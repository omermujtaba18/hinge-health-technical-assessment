// tree.controller.ts

import { Request, Response } from 'express';
import { treeService } from '../services';

export const getTree = async (req: Request, res: Response) => {
  const tree = await treeService.getTree();

  res.status(200).json(tree);
};

export const addTreeNode = async (req: Request, res: Response) => {
  const { parent, label } = req.body;

  try {
    const node = await treeService.addTreeNode(parent, label);
    res.status(200).json(node);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
