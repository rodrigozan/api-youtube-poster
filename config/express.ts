import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cors());

    //this.app.use('/api', routes)

    this.app.use((req, res) => {
      res.status(404).json({ message: 'Rota não encontrada' });
    });
  }
}

export default new App().app;
