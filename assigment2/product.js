const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


let products = [];

// Route to get all products
app.get('/products', (req, res) => {
    res.json(products);
});

// Route to create a product
app.post('/products', (req, res) => {
    const { name, price,size, quantity } = req.body;
    const newProduct = { name, price,size, quantity };
    if(name || price || size || quantity ==='undefined'){
        res.status(404).json({ message: 'Product name can not be empty' });
    }
    res.status(201).json({
        success:true,
        message: "product created successfully",
    })
    products.push(newProduct);

});
// Route to update a product
app.put('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, price,size, quantity } = req.body;

    if (products[id]) {
        products[id] = { name, price,size, quantity };
        res.json(products[id]);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});


// Route to delete a product
app.delete('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    products = products.filter((product, index) => index !== id);
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
