import WebCrawler from "../Services/WebCrawler";
import { Request, Response } from "express";

class AmazonProductReviewsController {

    public async getReviews(req: Request, res: Response) {
        const product = {
            url: req.body.url
        };

        const amazonProductReviewsService = new WebCrawler(product);

        await amazonProductReviewsService.run();

        const reviews = amazonProductReviewsService.getReviewsList();

        return res.json(reviews);
    }
}

export default new AmazonProductReviewsController();