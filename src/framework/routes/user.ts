import Router from 'koa-router';
import { userController } from '../../makers/controllers/user';
import { HttpRequest } from '../../app/contracts/http';

const router = new Router({ prefix: '/users' });

router.post('/create', async ({ request, response }) => {
  const httpRequest: HttpRequest = {
    body: request.body,
  };
  const httpResponse = await userController.create(httpRequest);
  response.body = httpResponse.body;
  response.status = httpResponse.status;
});

export default router;
