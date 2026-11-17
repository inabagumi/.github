# .github

Community health files for the [Haneru Developers](https://haneru.dev/).

## Renovate presets

This repository also hosts the shared [Renovate](https://docs.renovatebot.com/) presets for the Haneru Developers in the [`renovate-config`](renovate-config) directory.

Add this into `.github/renovate.json`:

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": ["github>inabagumi/.github//renovate-config/default"]
}
```

`renovate-config/default.json` combines the following presets, which can also be used individually:

| Preset                                                | Description                                                             |
| ----------------------------------------------------- | ----------------------------------------------------------------------- |
| `github>inabagumi/.github//renovate-config/base`      | Basic settings such as labels, semantic commits, timezone and grouping. |
| `github>inabagumi/.github//renovate-config/automerge` | Automerge minor and patch updates after all status checks pass.         |
| `github>inabagumi/.github//renovate-config/docker`    | Docker Compose, Docker versions and Kubernetes manifests in `k8s/`.     |
