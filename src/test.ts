import WebCrawler from "./Services/WebCrawler";


async function run() {
    
    const crawler = new WebCrawler({
        name: "https://www.amazon.com.br/C%C3%B3digo-limpo-Robert-C-Martin/dp/8576082675/?_encoding=UTF8&pd_rd_w=KZbhg&pf_rd_p=7721c677-7472-42db-8338-bc52d43d62e7&pf_rd_r=504KWXYC6ADP8R7H8R3E&pd_rd_r=6b5d0151-1cb2-4b64-a5a0-0ca7c7717706&pd_rd_wg=EdnKD&ref_=pd_gw_ci_mcx_mr_hp_d",
    
    });
    
    await crawler.run();
    
    console.log(crawler.getReviewsList());
}

run();
