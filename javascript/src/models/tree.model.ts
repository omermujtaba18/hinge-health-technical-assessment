// tree.model.ts

import Node from './node.model';

class Tree {
  root: Node;
  nodes: { [key: number]: Node };
  nextNodeId: number;

  constructor() {
    this.root = new Node(1, 'root');
    this.nodes = { 1: this.root };
    this.nextNodeId = 2;
  }

  get(): object {
    const formatTree = (node: Node = this.root): object => {
      return {
        [node.id]: {
          label: node.label,
          children: node.children.map((child) => formatTree(child)),
        },
      };
    };

    return [formatTree(this.root)];
  }

  addNewNode(parent: number, label: string): Node {
    if (!this.nodes[parent]) {
      throw new Error('Parent node not found');
    }

    const newNode = new Node(this.nextNodeId, label);
    this.nodes[parent].children.push(newNode);
    this.nodes[this.nextNodeId] = newNode;
    this.nextNodeId++;

    return newNode;
  }
}

export default Tree;
