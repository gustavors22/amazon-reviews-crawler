import { Router } from "express";
import AmazonProductReviewsController from "../Controllers/AmazonProductReviewsController";

export const routes = Router();

routes.get("/", (req, res) => {
    res.json({
        message: "Welcome to the API"
    });
});

routes.post("/product", AmazonProductReviewsController.getReviews);

export default routes;