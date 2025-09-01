## virtual-vscode

virtual-vscode (vvsc) is an implementation of the VS Code runtime which can be used for the purposes of automated testing without the need of the entirety of VS Code. The actual goes is to provide a way to test VS Code commands through automation and without headless mode. This is different to using the [standard testing methodology provided by the VS Code team](https://code.visualstudio.com/api/working-with-extensions/testing-extension#advanced-setup-your-own-runner).

This effectively means re-implementing the `vscode` import. It's a large task, but a worthy one.

### Goal

We need a way to call the `activate` and `deactivate` functions exported by the extension entrypoint. Something like this:

```ts
setupVvcs();

await activateExtension({directory: `/path/to/built/ext`}); // reads package.json to find index file
await activateExtension({context, activate, deactivate}); // calls the activate function directly
```

*This is not final. Just a roudgh idea.*

### Test bed

A good test bed is the [sample extensions](https://github.com/microsoft/vscode-extension-samples) provided by the VS Code team. If we're able to get all of these running virtually, then it's a job well done.

## API

| API | State | Phase |
| - | - | - |
| `authentication` | ⊗ | |
| `chat` | ⊗ | |
| `commands` | ⊗ | 1️⃣ |
| `comments` | ⊗ | |
| `debug` | ⊗ | | 
| `env` | ⊗ | 1️⃣ |
| `extensions` | ⊗ | 1️⃣ |
| `l10n` | ⊗ | 2️⃣ |
| `languages` | ⊗ | 3️⃣ |
| `lm` | ⊗ | |
| `notebooks` | ⊗ | |
| `scm` | ⊗ | |
| `tasks` | ⊗ | |
| `tests` | ⊗ | | 
| `window` | ⊗ | 2️⃣ |
| `workspace` | ⊗ | 2️⃣ |

* ⊗ not started
* 🧰 WIP
* ✅ done

### Events

Implementing the events will be part of this, but actually making them work is going to be secondary.

### Milestones

* `registerCommand` ⊗
* `TextEditor` + `TextDocument` ⊗
* File system provider ⊗
* `openTextDocument` ⊗
* `getConfiguration` ⊗
* `tabGroups` ⊗
