import express from 'express';
import * as bodyParser from 'body-parser';
import helmet from 'helmet';
import compression from 'compression';
import { APP_PORT } from './utils/secrets';
import { loadErrorHandlers } from './utils/error-handling';
import { MainRouter } from './routes';
import cors from './utils/cors';

const app = express();

app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(cors);
app.use('/', MainRouter);

loadErrorHandlers(app);

app
  .listen(APP_PORT, () => {
    console.log(`server running on port : ${APP_PORT}`);
  })
  .on('error', (e) => console.error(e));

export default app;
