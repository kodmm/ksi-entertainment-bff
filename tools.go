//go:build tools

// gqlgen はコード生成専用の実行ツールとして使う（`go run github.com/99designs/gqlgen generate`）。
// アプリケーションコードからは import しないため、`go mod tidy` が依存関係を消してしまわないよう
// tools.go で明示的に参照しておく。
package tools

import (
	_ "github.com/99designs/gqlgen"
)
