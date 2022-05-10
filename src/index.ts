import express from 'express';
import { createExpressMiddleware, onError, RoutesToSDK } from 'bridgets';
import { routes } from './routes';

const app = express();
const port = 8081;

const errorHandler = onError(({ error, path, req }) => {
  if (error.name === 'Internal server error') console.log('Server error', error, path); // Send to bug reporting
  else console.log('Other error', error, path);
});

app.use('', createExpressMiddleware(routes, errorHandler));

app.use('', (req, res, next) => res.status(404).send('Root not found'));

app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

export type CEQUETUVEUX = RoutesToSDK<typeof routes>