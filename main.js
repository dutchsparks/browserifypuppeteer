document.getElementById('puppet').onclick = start;

async function start() {
    console.log('started');
    const puppeteer = require('puppeteer');
    const browser = await puppeteer.launch({headless: false, ignoreHTTPSErrors: true});
    const page = await browser.newPage();
    await page.goto('https://google.com');
}