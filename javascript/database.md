## Database

### Database Chpice

For this implementation, a relational database like MySQL would be a good choice because:

- It supports hierarchical relationships using RECURSIVE
- Ensures data integrity using foreign keys.
- Allows fast querying of parent-child relationships.

### Tables

#### Node

    CREATE TABLE nodes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        label VARCHAR(255) NOT NULL,
        parent_id INT NULL,
        FOREIGN KEY (parent_id) REFERENCES nodes(id) ON DELETE CASCADE
    );

    CREATE INDEX idx_parent_id ON nodes (parent_id);

#### Decisions:

- Indexing: Index parent_id to speed up lookups.
- Foreign Key Constraint: Ensures valid parent-child relationships.

### Queries

### GET /api/tree

    WITH RECURSIVE tree AS (
        SELECT id, label, parent_id
        FROM nodes
        WHERE parent_id IS NULL

        UNION ALL

        SELECT n.id, n.label, n.parent_id
        FROM nodes n
        INNER JOIN tree t ON n.parent_id = t.id
    )
    SELECT * FROM tree;

#### Decisions:

- Use recursive to fetch all parent-child relationships.

### POST /api/tree

    SELECT * FROM tree
    WHERE parent_id = ${parent} // parent id from request

    INSERT INTO nodes (label, parent_id)
    VALUES (${label}, ${parent});  // parent id and label from request
