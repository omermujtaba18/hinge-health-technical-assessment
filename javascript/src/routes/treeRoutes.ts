// treeRoutes.ts

import * as express from 'express';
import { treeController } from '../controllers';
import { validateRequestBody } from '../middlewares/validateRequestBody.middleware';
import { postTree } from '../schemas/tree.schema';

const router = express.Router();

router
  .route('/')
  .get(treeController.getTree)
  .post(validateRequestBody(postTree), treeController.addTreeNode);

export default router;
