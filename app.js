import express from 'express';
import createError from 'http-errors';
import indexRouter from './routes/index';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use( (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

app.use('/', indexRouter);

app.use( (req, res, next) => {
    next(createError(404));
});

app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;

    // render the error page
    res.status(err.status || 500);
    res.json(err);
});

var server = app.listen(3001, () => {
    var port = server.address().port;
    console.log('App listening at port %s', port);
});

export default server;