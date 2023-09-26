import express, { Application } from 'express';
import cors from 'cors';

import routes from '../src/routes';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());

    this.app.use('/api', routes)

    this.app.use((req, res) => {
      res.status(404).json({ message: 'Rota não encontrada' });
    });
  }
}

export default new App().app;
