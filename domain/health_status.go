package domain

// HealthStatus はサーバーの稼働状態。今は "ok" 固定だが、将来の拡張に備えて型として定義しておく。
type HealthStatus string

const HealthStatusOK HealthStatus = "ok"
