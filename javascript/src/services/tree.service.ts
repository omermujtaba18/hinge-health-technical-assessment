// tree.service.ts

import Node from '../models/node.model';
import Tree from '../models/tree.model';

const tree = new Tree();

export const getTree = async (): Promise<object> => {
  return tree.get();
};

export const addTreeNode = async (
  parent: number,
  label: string,
): Promise<Node> => {
  return tree.addNewNode(parent, label);
};
