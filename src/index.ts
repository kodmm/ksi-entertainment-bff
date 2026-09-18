import { createYoga } from 'graphql-yoga';
import { createServer } from 'node:http';
import { schema } from './interfaces/graphql/index.js';

// composition root: サーバー起動とリゾルバー〜ハンドラーの結線だけを行う
const yoga = createYoga({ schema });
const server = createServer(yoga);

const port = Number(process.env.PORT ?? 4000);

server.listen(port, () => {
  console.log(`GraphQL BFF is running on http://localhost:${port}/graphql`);
});
