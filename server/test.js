const Koa = require('koa');
const app = new Koa();

app.use(function *() {
  this.title = 'Lin.JY Title';
  this.body = 'Koa Body';
});

// app监听3000的端口
app.listen(3000);
