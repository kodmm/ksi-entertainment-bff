import { getHealthQuery } from '../../application/queries/get-health.query.js';

// リゾルバーは application/queries・application/commands のハンドラーを呼び出すだけにし、
// ビジネスロジックはここに書かない。
export const resolvers = {
  Query: {
    health: () => getHealthQuery(),
  },
};
