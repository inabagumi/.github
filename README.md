# .github

Community health files for the [Haneru Developers](https://haneru.dev/).

## Renovate presets

This repository also hosts the shared [Renovate](https://docs.renovatebot.com/) preset for the Haneru Developers in [`renovate-config/default.json5`](renovate-config/default.json5).

Add this into `.github/renovate.json`:

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": ["github>inabagumi/.github//renovate-config/default.json5"]
}
```

The `.json5` extension is required because Renovate only looks up `default.json` when the file name is omitted.

The preset includes basic settings such as labels, semantic commits, timezone and grouping, automerge for minor and patch updates after all status checks pass, a minimum release age, rules for the Dev Container image, the reviewer, and support for Docker Compose, Docker versions and Kubernetes manifests in `k8s/`.

It also updates `_VERSION` variables in shell scripts that have a `# renovate:` comment:

```sh
# renovate: datasource=npm depName=agent-browser
AGENT_BROWSER_VERSION="0.43.0"
```
