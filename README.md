# ksi-entertainment-bff

音楽ライブの参戦記録を残してシェアし、趣味の合う人とマッチングするサービス「ksi-entertainment」の GraphQL BFF (Backend for Frontend)。

Next.js フロントエンドと、以下の2つの gRPC バックエンドの間を繋ぐ役割を持つ（現時点では未結線）。

- misc-service (Go)
- matching-service (FastAPI)

## 技術スタック

- Go
- [gqlgen](https://gqlgen.com/)（schema-first で GraphQL サーバーを実装）

## アーキテクチャ

Clean Architecture + CQRS（コマンドとクエリの分離）を採用する。Event Sourcing は matching-service のみで採用し、この BFF では使わない。

```
domain/                 # ドメインの型定義
application/
  queries/               # クエリハンドラー（読み取り専用）
  commands/               # コマンドハンドラー（書き込み）。現時点では未実装
interfaces/graphql/       # GraphQL スキーマ・リゾルバー。ハンドラーを呼ぶだけでロジックは持たない
infrastructure/           # misc-service / matching-service への gRPC クライアント置き場。現時点では未実装
generated/                 # gqlgen が生成するコード（exec スキーマ・model）。gqlgen の規約に従い、
                            # 上記の Clean Architecture のレイヤーとは別枠として扱う
server.go                  # composition root（サーバー起動とリゾルバー〜ハンドラーの結線のみ）
```

## セットアップ

```bash
go mod tidy
```

## コマンド

```bash
go run .                                    # 開発サーバー起動 (http://localhost:8080/ に GraphQL Playground)
go build -o ksi-entertainment-bff .         # ビルド
./ksi-entertainment-bff                     # ビルド済みバイナリを起動
go run github.com/99designs/gqlgen generate # schema.graphqls を変更した際にリゾルバー・modelを再生成
```

起動後、以下のクエリで動作確認できる。

```bash
curl -X POST http://localhost:8080/query \
  -H "Content-Type: application/json" \
  -d '{"query":"{ health }"}'
```

## Docker

```bash
docker build -t ksi-bff .
docker run -p 8080:8080 ksi-bff
```
