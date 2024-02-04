require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 8080;

const connection = require("./db");
const crudRoutes = require("./routes/crudRoutes");
const authRoutes = require("./routes/authRoutes");
const getRouter = require("./routes/getRouter");
const deleteRoutes = require("./routes/deleteRoutes");
const updateRoutes = require("./routes/updateRoutes");
const getByIdRoutes = require("./routes/getByIdRoutes");
//const addBearer = require("./routes/addBearer");

connection();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());

// Routes middleware
app.use("/api/login",authRoutes);
//app.use("/api/adduser",addBearer);
app.use("/api/adduser",crudRoutes);
app.use("/api/getData",getRouter);
app.use("/api/deleteData",deleteRoutes);
app.use("/api/updateData",updateRoutes);
app.use("/api/getDataById",getByIdRoutes);




app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));