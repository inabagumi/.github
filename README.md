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

The preset includes basic settings such as labels, semantic commits, timezone and grouping, automerge for minor and patch updates after all status checks pass, and support for Docker Compose, Docker versions and Kubernetes manifests in `k8s/`.

It also includes the following:

- **Minimum release age**: Renovate waits 1 day after a release before it updates to that release.
- **Versions in shell scripts**: Renovate updates a `_VERSION` variable in any `*.sh` file when the line before it has a `# renovate:` comment. A script without the comment is left alone.

  ```sh
  # renovate: datasource=npm depName=agent-browser
  AGENT_BROWSER_VERSION="0.43.0"
  ```

  `datasource` and `depName` are required. `packageName` (or `lookupName`), `versioning`, `extractVersion` and `registryUrl` can follow them in this order.

- **Dev Container image**: a tag of `mcr.microsoft.com/devcontainers/typescript-node` is read as `<image version>-<Node.js version>-<distribution>`, such as `5-26-bookworm`. A new Node.js version is a major update, and it is grouped with the other Node.js major updates into one pull request named "Node.js major". A new image version is a minor update, and it is not automerged because it can change the tools in the Dev Container.
- **Reviewers**: [@ykzts](https://github.com/ykzts) is requested as the reviewer of every pull request.
