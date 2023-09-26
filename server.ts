import dotenv from 'dotenv';
import app from './config/express';

dotenv.config();

const PORT = process.env.PORT || 3600;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
