const authRouter = require('./auth');
const blogRouter = require('./blog');
const categoryRouter = require('./category');
const commentRouter = require('./comment');
const orderRouter = require('./order');
const productRouter = require('./product');
const stripeRouter = require('./stripe');
const cartRouter = require('./cart');
const userRouter = require('./user');

function route(app) {
    app.use('/api/auth', authRouter)
    app.use('/api/blog', blogRouter)
    app.use('/api/category', categoryRouter)
    app.use('/api/comment', commentRouter)
    app.use('/api/order', orderRouter)
    app.use('/api/product', productRouter)
    app.use('/api/user', userRouter)
    app.use('/api/cart', cartRouter)
    app.use('/api/checkout', stripeRouter)
}

module.exports = route;