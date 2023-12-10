const puppeteer = require('puppeteer');

const { TRELLO_BOARD } = require('../config');

const getTrelloTasks = async () => {
  const config = {
    selector: '#board > li > div > ol > li',
  };

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    await page.goto(TRELLO_BOARD, { timeout: 5000 });
  } catch (err) {
    throw new Error(`URL ${TRELLO_BOARD} not available`);
  }

  let tasks = [];
  try {
    tasks = await getAllElementsBySelector(
      page,
      config.selector,
      (elements) => {
        return elements.map((element) => ({
          card: element.closest('div').querySelector('h2').innerText,
          title: element.querySelector('a').innerText,
          status: element.querySelector('span')?.innerText || undefined,
        }));
      }
    );
    return tasks;
  } catch (err) {
    throw new Error('Unable to retrieve Trello tasks');
  } finally {
    await browser.close();
  }
};

async function getAllElementsBySelector(page, selector, myFunction) {
  return new Promise(async (resolve, reject) => {
    await page
      .$$eval(selector, myFunction)
      .then((tasks) => {
        resolve(tasks);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

module.exports = getTrelloTasks;
