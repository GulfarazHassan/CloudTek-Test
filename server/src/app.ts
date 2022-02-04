import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { itemRouter } from './routes/item.route';

const app = express();

app.use(cors());
// app.use(helmet());
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(itemRouter);

export default app;
