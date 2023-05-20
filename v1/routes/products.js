const router = express.Router();
const productController = require('../controllers/product.controller');

router.post('/add', productController.add);
router.get('/get/:sku', productController.get);
module.exports = router;
