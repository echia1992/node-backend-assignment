
// this my collection that this will run on

// db.createCollection("users");
// db.createCollection("items");
// db.createCollection("categories");
// db.createCollection("orders");


// for inserting user record into the user collection this are the following code that will be run

// Insert records into entities

// Users
db.users.insertMany([
    { username: "admin", role: "admin" },
    { username: "user1", role: "user" },
    { username: "user2", role: "user" }
]);


// Categories
db.categories.insertMany([
    { category_name: "Electronics" },
    { category_name: "Clothing" },
    { category_name: "Furniture" }
]);

// Items
db.items.insertMany([
    { name: "Laptop", price: 999.99, size: "Medium", category_id: 1 },
    { name: "T-Shirt", price: 19.99, size: "Medium", category_id: 2 },
    { name: "Sofa", price: 599.99, size: "Large", category_id: 3 }
]);

// Orders
db.orders.insertMany([
    { item_id: 1, user_id: 2, status: "approved" },
    { item_id: 2, user_id: 3, status: "pending" },
    { item_id: 3, user_id: 2, status: "approved" }
]);

// Get records from two or more entities

// Get all items with their categories
db.items.aggregate([
    {
        $lookup:
            {
                from: "categories",
                localField: "category_id",
                foreignField: "category_id",
                as: "category"
            }
    }
]);

// Get all orders with user information
db.orders.aggregate([
    {
        $lookup:
            {
                from: "users",
                localField: "user_id",
                foreignField: "user_id",
                as: "user"
            }
    }
]);



// Update item price
db.items.update({ item_id: 1 }, { $set: { price: 1099.99 } });

// Update user role
db.users.update({ user_id: 1 }, { $set: { role: "admin" } });


// Delete records from two or more entities

// Delete an item
db.items.remove({ item_id: 3 });

// Delete a user
db.users.remove({ user_id: 3 });
