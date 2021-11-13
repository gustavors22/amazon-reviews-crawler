import { Router } from "express";
import AmazonProductReviewsController from "../Controllers/AmazonProductReviewsController";

export const routes = Router();

routes.get("/", (req, res) => {
    res.json({
        message: "Welcome to the API"
    });
});

routes.get("/product/:product", AmazonProductReviewsController.getReviews);

export default routes;