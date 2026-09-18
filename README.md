# ksi-entertainment-bff

音楽ライブの参戦記録を残してシェアし、趣味の合う人とマッチングするサービス「ksi-entertainment」の GraphQL BFF (Backend for Frontend)。

Next.js フロントエンドと、以下の2つの gRPC バックエンドの間を繋ぐ役割を持つ（現時点では未結線）。

- misc-service (Go)
- matching-service (FastAPI)

## 技術スタック

- Node.js / TypeScript
- [graphql-yoga](https://the-guild.dev/graphql/yoga-server)

## セットアップ

```bash
npm install
```

## コマンド

```bash
npm run dev    # 開発サーバー起動 (http://localhost:4000/graphql, ファイル変更を監視)
npm run build  # TypeScript をビルド (dist/ に出力)
npm run start  # ビルド済みのサーバーを起動
```

起動後、以下のクエリで動作確認できる。

```bash
curl -X POST http://localhost:4000/graphql \
  -H "Content-Type: application/json" \
  -d '{"query":"{ health }"}'
```
