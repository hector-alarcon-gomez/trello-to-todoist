// 1. Create a new repo in your GitHub account
// 2. Create an account at https://todoist.com/
// 3. Using Puppeteer
//     3.1 Pull a list of tasks from https://trello.com/b/QvHVksDa/personal-work-goals
//     3.2 Login into todoist.com
//     3.3 Add 5 tasks of the list you got in step 3.1
// 4. Push the code to your repo

const { PROJECT_ID, TRELLO_BOARD, TODOIST_API } = require('./config');
const getTrelloTasks = require('./models/trello');
const { addTask } = require('./models/todoist');
const TASK_LIMIT = 5;

async function run() {
  try {
    if (!PROJECT_ID || !TRELLO_BOARD || !TODOIST_API) {
      throw new Error('Missing config');
    }

    // TODO: ask PM for assumptions
    // TODO: add jest
    const tasks = await getTrelloTasks(TASK_LIMIT);
    console.log(tasks);

    // const topTasks = tasks.slice(0, TASK_LIMIT);
    // for (task of topTasks) {
    //   addTask(task.title, PROJECT_ID);
    //   console.log(`Task added "${task.title}" to ${PROJECT_ID}`);
    // }
  } catch (err) {
    console.log(err);
  }
}

run();
