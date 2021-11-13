import puppeteer, { Browser, Page } from 'puppeteer';
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
            headless: false,
            defaultViewport: null,
            args: ['--start-maximized']
        });
        
        const page = await browser.newPage();

        await this.delay(500);
        await page.goto(`https://www.amazon.com.br/s?k=${this.product.name}&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&ref=nb_sb_noss_2`);

        await this.delay(500);
        await page.click(`a[class='a-link-normal s-no-outline']`)
        await page.waitForSelector('.review-text-content');
        await this.delay(1000);
        
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