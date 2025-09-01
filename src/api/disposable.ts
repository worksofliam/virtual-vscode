import type vscode from "vscode";

type DisposeFunc = (() => void);

export class Disposable implements vscode.Disposable {
	private readonly _disposables: DisposeFunc[] = [];

	constructor(...disposables: DisposeFunc[]) {
		this._disposables.push(...disposables);
	}

	dispose() {
		for (const dispose of this._disposables) {
			dispose();
		}
	}
}
