# Trello tasks copied into todoist

Pulls list of tasks from Trello's url and inserts them in a todoist project

## Environment Variables

To run this project, you will need to add the following environment variables to your nodemon.json file

`TRELLO_BOARD`: url from the Trello board

`TODOIST_API`: todoist.com api

`TODOIST_PROJECT_ID`: project id where the tasks will be copied

## Run Locally

Clone the project

```bash
  git clone https://github.com/hector-alarcon-gomez/trello-to-todoist
```

Go to the project directory

```bash
  cd trello-to-todoist
```

Install dependencies

```bash
  npm install
```

Configure nodemon.json file with the env vars

```bash
{
  "env": {
    "TRELLO_BOARD":"",
    "TODOIST_API":"",
    "TODOIST_PROJECT_ID": ""
  }
}
```

Start the server

```bash
  npm run start:dev
```

## Screenshots

![Trello tasks](https://raw.githubusercontent.com/hector-alarcon-gomez/trello-to-todoist/main/imgs/trello-tasks.png?token=GHSAT0AAAAAACLHUFJYOX5PUETI562WITWSZLWHOJQ)
![Process tasks](https://github.com/hector-alarcon-gomez/raw/main/trello-to-todoist/main/imgs/process-tasks.png)
![Todoist tasks](https://raw.githubusercontent.com/hector-alarcon-gomez/trello-to-todoist/main/imgs/todoist-tasks.png?token=GHSAT0AAAAAACLHUFJYZM7QDBYSILS3MP56ZLWHOKQ)

## Author

- [@Hector Alarcon](https://www.github.com/hector-alarcon-gomez)
