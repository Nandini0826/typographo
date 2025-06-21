// Top of file (critical for env variables)
import 'dotenv/config'; 
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoDB from './config/mongodb.js'; 

// Fix __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Initialize DB
mongoDB();

// Routes
app.get('/', (req, res) => res.send("API working"));

app.listen(port, () => console.log(`Server started on PORT: ${port}`));
