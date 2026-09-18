import type { HealthStatus } from '../../domain/health-status.js';

/** ヘルスチェック用クエリ。読み取りのみで副作用を持たない。 */
export const getHealthQuery = (): HealthStatus => 'ok';
