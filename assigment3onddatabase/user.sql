-- Table creation for entities

 CREATE TABLE User  (
  user_id INT PRIMARY KEY,
  username VARCHAR(255),
  password VARCHAR(50),
  role VARCHAR(255)
);

CREATE TABLE  Order(
  order_id INT PRIMARY KEY,
  item_id INT,
  user_id INT,
  status VARCHAR(255),
  FOREIGN KEY (item_id) REFERENCES Item(item_id),
  FOREIGN KEY (user_id) REFERENCES User(user_id)
);

CREATE TABLE Category (
  category_id INT PRIMARY KEY,
  category_name VARCHAR(255)
);

CREATE TABLE Item (
  item_id INT PRIMARY KEY,
  name VARCHAR(255),
  price DECIMAL(10,2),
  size VARCHAR(255),
  category_id INT,
  FOREIGN KEY (category_id) REFERENCES Category(category_id)
);


-- Insert records

INSERT INTO User (user_id, username, role) VALUES
(1, 'admin', 'admin'),
(2, 'user1', 'user'),
(3, 'user2', 'user');

INSERT INTO Category (category_id, category_name) VALUES
(1, 'Electronics'),
(2, 'Clothing'),
(3, 'Furniture');

INSERT INTO Item (item_id, name, price, size, category_id) VALUES
(1, 'Laptop', 999.99, 'Medium', 1),
(2, 'T-Shirt', 19.99, 'Medium', 2),
(3, 'Sofa', 599.99, 'Large', 3);

-- Get records from two or more entities

SELECT * FROM Item
JOIN Category ON Item.category_id = Category.category_id;

SELECT * FROM User
JOIN.Order.ON User.user_id = Order.user_id;

-- Update records from two or more entities

UPDATE Item
SET price = 1099.99
WHERE item_id = 1;

UPDATE User
SET role = 'admin'
WHERE user_id = 1;

-- Delete records from two or more entities

DELETE FROM Item
WHERE item_id = 3;

DELETE FROM User
WHERE user_id = 3;
