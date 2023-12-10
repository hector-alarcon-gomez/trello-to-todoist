const Todoist = require('@doist/todoist-api-typescript');

const { TODOIST_API } = require('../config');
const api = new Todoist.TodoistApi(TODOIST_API);

const getAllProjects = async () => {
  return new Promise((resolve, reject) => {
    api
      .getProjects()
      .then((projects) => {
        resolve(projects);
      })
      .catch((error) => {
        reject('Unable to get All the projects');
      });
  });
};

const addProject = async (name) => {
  return new Promise((resolve, reject) => {
    api
      .addProject({ name: name })
      .then((project) => {
        resolve(project);
      })
      .catch((error) => {
        reject(`Unable to Add the project: "${name}"`);
      });
  });
};

const addTask = async (name, projectId) => {
  return new Promise((resolve, reject) => {
    api
      .addTask({ content: name, projectId: projectId })
      .then((task) => {
        resolve(task);
      })
      .catch((error) => {
        reject(`Unable to Add the task: "${name}"`);
      });
  });
};

module.exports = {
  getAllProjects,
  addProject,
  addTask,
};
