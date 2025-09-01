import type vscode from "vscode";

export class TextEditor implements vscode.TextEditor {
  document: vscode.TextDocument;
  selection: vscode.Selection;
  selections: readonly vscode.Selection[];
  visibleRanges: readonly vscode.Range[];
  options: vscode.TextEditorOptions;
  viewColumn: vscode.ViewColumn;
  edit(callback: (editBuilder: vscode.TextEditorEdit) => void, options?: { readonly undoStopBefore: boolean; readonly undoStopAfter: boolean; }): Thenable<boolean> {
    throw new Error("Method not implemented.");
  }
  insertSnippet(snippet: vscode.SnippetString, location?: vscode.Position | vscode.Range | readonly vscode.Position[] | readonly vscode.Range[], options?: { readonly undoStopBefore: boolean; readonly undoStopAfter: boolean; readonly keepWhitespace?: boolean; }): Thenable<boolean> {
    throw new Error("Method not implemented.");
  }
  setDecorations(decorationType: vscode.TextEditorDecorationType, rangesOrOptions: readonly vscode.Range[] | readonly vscode.DecorationOptions[]): void {
    throw new Error("Method not implemented.");
  }
  revealRange(range: vscode.Range, revealType?: vscode.TextEditorRevealType): void {
    throw new Error("Method not implemented.");
  }
  show(column?: vscode.ViewColumn): void {
    throw new Error("Method not implemented.");
  }
  hide(): void {
    throw new Error("Method not implemented.");
  }
}

export class TextDocument implements vscode.TextDocument {
  uri: vscode.Uri;
  fileName: string;
  isUntitled: boolean;
  languageId: string;
  encoding: string;
  version: number;
  isDirty: boolean;
  isClosed: boolean;
  save(): Thenable<boolean> {
    throw new Error("Method not implemented.");
  }
  eol: vscode.EndOfLine;
  lineCount: number;
  lineAt(position: unknown): vscode.TextLine {
    throw new Error("Method not implemented.");
  }
  offsetAt(position: vscode.Position): number {
    throw new Error("Method not implemented.");
  }
  positionAt(offset: number): vscode.Position {
    throw new Error("Method not implemented.");
  }
  getText(range?: vscode.Range): string {
    throw new Error("Method not implemented.");
  }
  getWordRangeAtPosition(position: vscode.Position, regex?: RegExp): vscode.Range | undefined {
    throw new Error("Method not implemented.");
  }
  validateRange(range: vscode.Range): vscode.Range {
    throw new Error("Method not implemented.");
  }
  validatePosition(position: vscode.Position): vscode.Position {
    throw new Error("Method not implemented.");
  }

}

export class TextEditorEdit implements vscode.TextEditorEdit {
  replace(location: vscode.Position | vscode.Range | vscode.Selection, value: string): void {
    throw new Error("Method not implemented.");
  }
  insert(location: vscode.Position, value: string): void {
    throw new Error("Method not implemented.");
  }
  delete(location: vscode.Range | vscode.Selection): void {
    throw new Error("Method not implemented.");
  }
  setEndOfLine(endOfLine: vscode.EndOfLine): void {
    throw new Error("Method not implemented.");
  }

}