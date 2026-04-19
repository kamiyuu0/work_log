# work_log

作業内容をターミナルから手軽に記録・確認できるCLIツールです。ログはローカルのJSONファイルに保存されます。

## 技術スタック

- TypeScript
- [Commander.js](https://github.com/tj/commander.js/) — CLIフレームワーク
- [tsx](https://github.com/privatenumber/tsx) — TypeScriptの直接実行

## セットアップ

```bash
npm install
```

## 使い方

`tsx src/index.ts` でコマンドを実行します。

### 作業ログを追加する

```bash
npx tsx src/index.ts add "作業内容のメッセージ"
```

### ログ一覧を表示する

```bash
# すべてのログを表示
npx tsx src/index.ts list

# 今日のログのみ表示
npx tsx src/index.ts list --today
```

### 統計を表示する

```bash
# 全期間のログ件数を表示
npx tsx src/index.ts stats

# 直近7日間のログ件数を表示
npx tsx src/index.ts stats --week
```

## データ保存先

ログは `data/logs.json` にJSON形式で保存されます。

```json
[
  {
    "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "message": "作業内容のメッセージ",
    "createdAt": "2026-04-17T10:00:00.000Z"
  }
]
```

## 開発

```bash
# Lintの実行
npm run lint

# コードフォーマット
npm run format
```
