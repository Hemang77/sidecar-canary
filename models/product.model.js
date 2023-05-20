const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        trim: true,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    sku: {
        type: String,
        required: true,
        trim: true,
    }
},
    {
        collection: 'products'
    }
);

const Products = mongoose.model('products', productSchema);
module.exports = Products;