// node.model.test.ts

import Node from '../../src/models/node.model';

describe('Node model', () => {
  test('should create a node with given id and label', () => {
    const node = new Node(1, 'Root');
    expect(node.id).toBe(1);
    expect(node.label).toBe('Root');
    expect(node.children).toEqual([]);
  });

  test('should allow adding children to a node', () => {
    const parent = new Node(1, 'Parent');
    const child = new Node(2, 'Child');

    parent.children.push(child);

    expect(parent.children.length).toBe(1);
    expect(parent.children[0]).toBe(child);
  });
});
