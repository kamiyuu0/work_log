# work_log コードリーディングまとめ

## コードの読む順番

1. `src/types.ts` — データ構造の把握
2. `src/storage.ts` — 永続化の仕組み
3. `src/index.ts` — CLIの骨格
4. `src/commands/*.ts` — 各コマンドの実装

---

## JavaScript / Node.js

### `JSON.stringify(value, replacer, space)`

| 引数 | 渡している値 | 役割 |
|------|-------------|------|
| `value` | `logs` | JSON化したいデータ |
| `replacer` | `null` | 出力するキーのフィルター。`null` は全キー出力 |
| `space` | `2` | インデントのスペース数。人間が読みやすいJSONになる |

### `Date.toISOString()`

`Date` オブジェクトをISO 8601形式の文字列に変換するメソッド。

```js
new Date().toISOString()
// → "2026-04-17T10:30:00.000Z"

new Date().toISOString().slice(0, 10)
// → "2026-04-17"  （日付部分だけ切り出す）
```

### `randomUUID()`

Node.jsの `crypto` モジュールが提供する、ランダムなUUIDを生成する関数。

```js
import { randomUUID } from 'crypto';
randomUUID()
// → "550e8400-e29b-41d4-a716-446655440000"
```

連番と違い、削除・並び替えをしても重複しない一意なIDを生成できる。

---

## Commander.js

### `program.parse()`

コマンドライン引数（`process.argv`）を解析して、対応するコマンドを実行するメソッド。
これを呼ばないとコマンドの定義だけで終わり、何も実行されない。

### フラグオプションの値

値なしのフラグオプション（`--week` など）は、Commander.jsによって以下の値が渡される。

```ts
.option('--week')

// --week あり → true
// --week なし → undefined
```

---

## TypeScript 独自の構文

### 型エイリアス

```ts
export type LogEntry = {
  id: string;
  message: string;
  createdAt: string;
};
```

### 型アノテーション

```ts
// 引数と戻り値に型をつける
export const addLog = (message: string): void => { ... }

// 変数に型をつける
const entry: LogEntry = { ... }
```

### 配列型

```ts
// 「LogEntry の配列」を表す
const logs: LogEntry[] = readLogs();
```

### 型のインポート

```ts
import { LogEntry } from '../types';
```

---

## tsconfig.json の主要オプション

| オプション | 値 | 意味 |
|-----------|-----|------|
| `target` | `"ES2020"` | コンパイル後のJSのバージョン |
| `rootDir` | `"./src"` | TSファイルの入力ディレクトリ |
| `outDir` | `"./dist"` | コンパイル後のJSの出力ディレクトリ |
| `strict` | `true` | 厳格な型チェックを有効にする |
| `module` | `"commonjs"` | モジュール形式（Node.jsでは commonjs が一般的） |
