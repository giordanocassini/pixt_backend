import express, { Request, Response } from 'express';
import routes from './routes';
const app = express();
import cors from 'cors';
import helmet from 'helmet';
import 'reflect-metadata';
import * as bodyParser from 'body-parser';

// Add middleware and routes here
// For example:
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Pixt!');
});

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(routes);

export default app;
