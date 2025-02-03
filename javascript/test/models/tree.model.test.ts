// tree.model.test.ts

import Tree from '../../src/models/tree.model';

describe('Tree model', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = new Tree();
  });

  test('should initialize with a root node', () => {
    expect(tree.root).toBeDefined();
    expect(tree.root.id).toBe(1);
    expect(tree.root.label).toBe('root');
  });

  test('should return the tree structure', () => {
    const treeStructure = tree.get();
    expect(treeStructure).toEqual([
      {
        1: {
          label: 'root',
          children: [],
        },
      },
    ]);
  });

  test('should add a new node under a parent node', () => {
    const newNode = tree.addNewNode(1, 'Child Node');
    expect(newNode).toBeDefined();
    expect(newNode.id).toBe(2);
    expect(newNode.label).toBe('Child Node');
    expect(tree.root.children.length).toBe(1);
    expect(tree.root.children[0]).toBe(newNode);
  });

  test('should throw an error when parent not does not exists', () => {
    expect(() => tree.addNewNode(99, 'Invalid Node')).toThrow(
      'Parent node not found',
    );
  });
});
