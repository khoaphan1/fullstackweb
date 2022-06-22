const express = require("express")
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const route = require('./routes');



app.use(cors());
app.use(express.json());

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("db connection success"))
.catch((err) => {
    console.log(err)
})

// truyền app vào route (khởi tạo tuyến đường)
route(app);

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
});
