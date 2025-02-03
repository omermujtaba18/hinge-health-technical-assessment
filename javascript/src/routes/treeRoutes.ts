// treeRoutes.ts

import * as express from 'express';
import { treeController } from '../controllers';

const router = express.Router();

router.route('/').get(treeController.getTree).post(treeController.addTreeNode);

export default router;
