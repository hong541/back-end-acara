import express from "express";
import router from "./routes/api";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./utils/database";
import docs from "./docs/route";

async function init() {
  try {
    const result = await db();

    console.log("Database status:", result);

    const app = express();

    app.use(cors());

    app.use(bodyParser.json());

    const port = 3000;

    app.get("/", (req, res) => {
      res.status(200).json({
        message: "Welcome to the API",
        data: null,
      });
    });

    app.use("/api", router);

    docs(app);

    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

init();
