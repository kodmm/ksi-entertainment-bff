package queries

import "github.com/kodmm/ksi-entertainment-bff/domain"

// GetHealthQuery はヘルスチェック用クエリ。読み取りのみで副作用を持たない。
func GetHealthQuery() domain.HealthStatus {
	return domain.HealthStatusOK
}
