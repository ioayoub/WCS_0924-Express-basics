import express from "express";
import {apiGet, apiPost} from "./modules/apiActions.js";
import {apiGlobalMiddleware, apiTotoMiddleware} from "./middlewares/toto.middleware.js";

const router = express.Router();

router.get("/get", apiTotoMiddleware, apiTotoMiddleware, apiTotoMiddleware, apiTotoMiddleware, apiGet)

router.use(apiGlobalMiddleware)

router.post("/post", apiPost)

export default router;