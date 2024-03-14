import express from 'express';
import dotenv from 'dotenv';
import routes from './src/routes/index.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

const jwtSecret = process.env.JWT_SECRET;

// Middleware Body Parser
app.use(express.json());

app.use('/api', routes); // Toutes les routes seront préfixées par /api

if (!jwtSecret) {
  console.error("La clé secrète JWT n'est pas définie dans le fichier .env");
  process.exit(1);
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
