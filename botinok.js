// import puppeteer from 'puppeteer';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

puppeteer.use(StealthPlugin());

function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
  }

(async () => {
    // Launch the browser
    const browser = await puppeteer.launch({
        headless: false
    });
  
    // Go to your site
    const page = await browser.newPage();
    await page.goto('https://www.fon.bet/');
    await page.setViewport({ width: 1280, height: 960 });
    

    // login
    await delay(3000)
    await page.waitForSelector('._blue--JGRVu');
    const loginBtn = await page.$('._blue--JGRVu');
    await loginBtn.click('._blue--JGRVu');

    await delay(3000)
    await page.waitForSelector('._blue--JGRVu');
    const loginField = await page.$('input[name="login"]');
    await loginField.focus()
    await loginField.type('79244456734')

    const passwordField = await page.$('input[type="password"]');
    await passwordField.focus()
    await passwordField.type('89098149930q')

    const completeLogin = await page.$('._primary--xaCqa');
    await completeLogin.click('._primary--xaCqa');


    // select a section

    await delay(3000)
    await page.waitForSelector('a[href="/live/"]');
    const liveBtn = await page.$('a[href="/live/"]');
    await liveBtn.click('a[href="/live/"]');

    await page.waitForSelector('a[href="/live/table-tennis/"]');
    const liveTenisBtn = await page.$('a[href="/live/table-tennis/"]');
    await liveTenisBtn.click('a[href="/live/table-tennis/"]');
    


  })();
