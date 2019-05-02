const MOCK_SERVER_PORT = 2202
﻿
const provider = pact({
 consumer: 'TodoApp',
 provider: 'TodoService',
 port: MOCK_SERVER_PORT,
 log: path.resolve(process.cwd(), 'logs', 'pact.log'),
 dir: path.resolve(__dirname, 'pacts'),
 logLevel: 'INFO',
   spec: 2
 })