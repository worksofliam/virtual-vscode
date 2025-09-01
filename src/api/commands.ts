import { Disposable } from "./disposable";
import { TextEditor, TextEditorEdit } from "./textEditor";

type CommandFunction = (...args: any[]) => any;
const commands: { [key: string]: CommandFunction } = {};

export function registerCommand(command: string, callback: CommandFunction, thisArg?: any): Disposable {
	const disposable = new Disposable(() => {
		delete commands[command];
	});

  commands[command] = callback.bind(thisArg);

	return disposable;
}

export function registerTextEditorCommand(command: string, callback: (textEditor: TextEditor, edit: TextEditorEdit, ...args: any[]) => void, thisArg?: any): Disposable {
  const disposable = new Disposable();

  throw new Error("Not implemented");

  return disposable;
}

export function executeCommand<T = unknown>(command: string, ...rest: any[]): Promise<T> {
  if (commands[command]) {
    return Promise.resolve(commands[command](...rest));
  }

  return Promise.reject(new Error(`Command not found: ${command}`));
}

export function getCommands(filterInternal?: boolean): Promise<string[]> {
  return Promise.resolve(Object.keys(commands));
}