import Router from 'koa-router';
import user from './routes/user';

const router = new Router({ prefix: '/api/v1' });

router.use(user.routes());

export default router;
