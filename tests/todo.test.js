// "test": "node tests/todo.test.js",
const puppeteer = require('puppeteer');
const tasklist = require('../factory/index');

(async () => {
    try {
        const browserURL = 'http://localhost:5001/';
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto(browserURL);


        for(let i = 1; i <= 3; i++) {
          await page.waitForSelector('.texterea');
          await page.$eval('.texterea', el => el.value = `test`);
          await page.click('.texterea');
          await page.click('.message-add');
        }


        // add task
        // const fna = await tasklist.addTask(text);


        // edit task
        // const if = 'awww7s99p';
        // const fne = await tasklist.editTask(id, {text, status, order});
        // await page.click(); ?


        // delete task
        // const id = '12rybwe2t';
        // const fnd = await tasklist.deleteTask(id);
        // await page.click('.fas fa-trash-alt');


        // await browser.close();
    } catch (e) {
        console.log('error', e);
    }
})();