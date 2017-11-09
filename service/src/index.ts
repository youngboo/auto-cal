import * as koa from 'koa';
let app = new koa;

app.use(function *(next) {
    let start = new Date;

    yield next;

    let ms = Number(new Date) - Number(start);
    console.log('%s %s - %s', this.method, this.url, ms)
});

app.use(function () {
    this.body = 'Hello World';
});

app.listen(3000);