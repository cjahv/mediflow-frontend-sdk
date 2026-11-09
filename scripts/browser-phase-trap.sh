# Loaded only for the browser acceptance shell and its child bash processes.
# Keep output in run-private.py's ephemeral capture; never trace commands or values.
# Unknown scripts emit nothing. Preserve the original failing command's status.
trap '__mediflow_error_line=$LINENO; case "${BASH_SOURCE[0]}" in
  scripts/browser-test.sh) printf "Browser shell check location: harness:%s\n" "$__mediflow_error_line" >&2 ;;
  scripts/build-java-proxy.sh) printf "Browser shell check location: java-build:%s\n" "$__mediflow_error_line" >&2 ;;
esac' ERR
