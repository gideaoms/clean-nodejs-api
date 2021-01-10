import Koa from 'koa';
import bodyparser from 'koa-bodyparser';
import logger from 'koa-logger';
import router from './router';

const app = new Koa();

app.on('error', (err) => {
  console.error(err);
  process.exit(1);
});

app.use(logger());
app.use(bodyparser());
app.use(router.routes());
app.use(router.allowedMethods());

export default app;
