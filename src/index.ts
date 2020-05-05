import express from 'express';
import rootRouter from './routes/root';
import config from './config/config';
import morgan from 'morgan';

configureServer();

// configure server
function configureServer() {
    // declaring server will use express to manage everything
    const app = express();

    // config middlewares

    // helps with request log
    app.use(morgan('dev'));
    
    // convert incoming request to JSON
    app.use(express.json());

    // config body of JSON request
    app.use(express.urlencoded({
        extended: false
    }));

    // main route
    app.use(rootRouter);

    // no match for requested route
    app.use((req, res, next) => {
        const error:Error = new Error('Route was not found');
        res.status(404).json({
            error: error.message
        });
    })

    // STARTING THE SERVER
    // PORT is stored in config folder
    app.listen(config.server.port, () => {
        console.log(`Server is listening on port ${config.server.port}...`);
    });
}

/* lsof -i:3000 
kill -9 [PID]  */