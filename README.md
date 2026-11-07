# Mediflow Screen SDK

Prebuilt JavaScript and TypeScript declarations for unattended Mediflow screens.
This public repository contains distribution files only, not platform source or its history.

```sh
npm install git+https://github.com/cjahv/mediflow-frontend-sdk.git#v0.6.0-rc.1
```

```ts
import { ScreenClient } from '@cjahv/mediflow-screen-sdk';
const client = new ScreenClient({
  baseURL: 'https://your-platform.example',
  token: 'your-screen-token',
  onSnapshot(snapshot) {
    // Replace with your screen rendering. These are current queues, not history.
    console.log(snapshot.data.queues);
  },
});
await client.start(); // SDK connects, authenticates and obtains the initial snapshot.
// Subsequent snapshots update automatically. Call client.close() on teardown.
// Keep screen tokens out of URLs and source control.
```

Each release has a fixed version tag. CI refuses to replace an existing tag.
Commit the consumer lockfile to pin the resolved Git commit. No npmjs account is required.
Runtime dependencies are downloaded from their public npm registry.
License: MIT (see LICENSE).
