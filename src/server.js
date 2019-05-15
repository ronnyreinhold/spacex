import express from 'express';
import graphql from './graphql/schema';
const PORT = process.env.PORT || 4000;

const app = express();

// Middleware Apollo
graphql.applyMiddleware({
    app
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})

