// node.model.ts

class Node {
  id: number;
  label: string;
  children: Array<Node>;

  constructor(id: number, label: string) {
    this.id = id;
    this.label = label;
    this.children = [];
  }
}

export default Node;
