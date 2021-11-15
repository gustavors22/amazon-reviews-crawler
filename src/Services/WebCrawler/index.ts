import puppeteer from 'puppeteer';
import Iproduct from './procductInterface';

class WebCrawler {
    private product: Iproduct;
    private reviews: any[]

    constructor(product: Iproduct) {
        this.product = product;
        this.reviews = [];
    }

    public async run(): Promise<void> {
        const browser = await puppeteer.launch({
            headless: true,
            defaultViewport: null,
            args: ['--start-maximized']
        });
        
        const page = await browser.newPage();

        await this.delay(200);
        await page.goto(this.product.url);

        await page.waitForSelector('.review-text-content');
        await this.delay(200);
        
        const reviews = await page.evaluate(() => {
            const reviews = Array.from(document.querySelectorAll('.review-text-content'));
            
            return reviews.map((review: any) => {
                return {
                    text: review.innerText
                };
            });
        });

        await browser.close();

        this.reviews = reviews;
    }

    public getReviewsList(): any[] {
        return this.reviews;
    }

    private delay(time: number) {
        return new Promise(resolve => {
            setTimeout(resolve, time);
        });
    } 
}

export default WebCrawler;