import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response, NextFunction } from 'express';
import userRouter from './routes/user.route';

const app = express();

app.use(express.json({ limit: '10kb' }));

app.use('/users', userRouter);

app.get('/health', (req: Request, res: Response) => {
  res.status(200).send('Taekwon V API Server!!');
});

// UnKnown Routes
app.all('*', (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not found`);
  res.statusCode = 404;
  next(err);
});

app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  console.log(err.message);
  res.status(res.statusCode).send(err.message);
});

export default app;
