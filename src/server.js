import express from 'express';
import graphql from './graphql/schema';
import cors from 'cors';

const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());

// Middleware Apollo
graphql.applyMiddleware({
    app
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})

