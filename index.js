import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path from 'path';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
app.use(cors());

app.use('/books', booksRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.get('/', (request, response) => {
            app.use(express.static(path.resolve(__dirname, "frontend", "dist")));
            response.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
        });
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
