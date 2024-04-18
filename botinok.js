import puppeteer from 'puppeteer';

(async () => {
    // Launch the browser
    const browser = await puppeteer.launch({
        headless: false
    });
  
    // Create a page
    const page = await browser.newPage();
  
    // Go to your site
    await page.goto('https://www.fon.bet/');
  
  
    // Close browser.
    // await browser.close();
  })();