/** 无人值守屏幕入口：页面加载即连接，直接使用 SDK 的当前屏幕镜像和自动播报。 */
import { ScreenClient } from "../src/index.js"; // 业务项目改为 @cjahv/mediflow-screen-sdk
import type { Snapshot } from "../src/index.js";
// 接入项目提供配置；此声明不是SDK函数，不把真实token写进源码。
declare const screenConfig: { baseURL: string; token: string };
const root = document.querySelector<HTMLElement>("#screen")!;
const status = document.querySelector<HTMLElement>("#connection")!;
const diagnostic = document.querySelector<HTMLElement>("#diagnostic")!;
const client = new ScreenClient({
  ...screenConfig,
  onSnapshot(snapshot) {
    // 完整镜像：data.queues -> sections -> persons。整体替换显示，空数据清空旧画面。
    renderSnapshot(root, snapshot);
  },
  onStatus(state) {
    // offline由SDK自动重连；rejected是凭据/策略拒绝，检查配置后再start()。
    // connecting尚未就绪；online可用；closed是主动停止。
    status.textContent = {
      connecting: "连接中",
      online: "在线",
      offline: "离线，正在重连",
      rejected: "连接被拒绝，请检查配置",
      closed: "已停止",
    }[state];
    root.dataset.offline = String(state !== "online"); // 离线旧画面可能已过时。
  },
  playback: {
    // SDK负责获取全部待消费页、去重排队、消费及日志；只提供实际播放器。
    // 必须声音真正结束才resolve，播放失败reject。不会重播失败的那一次。
    play: speakInBrowser,
    onConsumption(result) {
      // granted=false是正常业务拒绝（取消/过期/无额度），SDK不会播放。
      if (!result.granted)
        diagnostic.textContent = `本次未播报：${result.reason ?? "已拒绝"}`;
    },
    onState(state) {
      // uncertain：消费结果未知，SDK保留原ID，在线退避重试，重连后也会恢复。
      // paused：音频设备失败或日志缓冲满，检查后再恢复；不重播已失败音频。
      // playing/idle/offline/closed分别表示播放中/空闲/离线/已关闭。
      diagnostic.dataset.playback = state.status;
      // 不在候诊屏幕上提供人工操作按钮；设备/凭据故障交给远程运维处理。
      // paused不代表显示停止，onSnapshot仍持续更新队列。
    },
  },
  onError(error) {
    // 给受保护诊断区显示，不按错误文案猜业务结果，不因此补额度或重播。
    diagnostic.textContent = error.message;
  },
});
// 无需点击开始。start()负责连接、鉴权、取得首份当前快照；之后持续推送更新。
void client.start().catch((error: Error) => {
  diagnostic.textContent = error.message;
  // 首次就绪超时不会停止 SDK 自动重连，不自行拼消息、轮询或新建重试队列。
});
window.addEventListener("pagehide", () => client.close());
// client.snapshot 是最后镜像的副本；首次就绪前undefined，离线不保证新鲜。
// 页面刷新/断电后的音频状态无法证明，SDK不会承诺恰好一次播放；按故障漏播约定排查。
// close停止未来消费，不中止应用自定义的正在播放音频。

/** 最小真实渲染示例：用安全textContent展示姓名/编号，不拼接服务端HTML。 */
export function renderSnapshot(root: HTMLElement, snapshot: Snapshot) {
  const fragment = document.createDocumentFragment();
  for (const queue of snapshot.data.queues) {
    const heading = document.createElement("h2");
    heading.textContent = queue.name;
    fragment.append(heading);
    for (const section of queue.sections) {
      const title = document.createElement("h3");
      title.textContent = section.name;
      const list = document.createElement("ul");
      // 使用后端数组顺序，保留order供显示/诊断，不自行改变排队业务规则。
      for (const person of section.persons) {
        const item = document.createElement("li");
        item.textContent = `${person.displayNumber} ${person.name}`;
        list.append(item);
      }
      fragment.append(title, list);
    }
  }
  root.replaceChildren(fragment); // 空快照也会正确清空旧画面。
}

/** 浏览器语音示例。无人值守终端须在部署时配置自动播放/语音权限，不依赖现场点击。 */
export function speakInBrowser(text: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (!("speechSynthesis" in globalThis)) {
      reject(new Error("This browser has no speech synthesis"));
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-CN";
    utterance.onend = () => resolve();
    utterance.onerror = () => reject(new Error("Browser speech failed"));
    speechSynthesis.speak(utterance);
  });
}
