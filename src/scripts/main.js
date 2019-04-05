// import statements for TASKS
import taskAPI from "./tasks-module/taskAPI"
import taskForm from "./tasks-module/taskForm"
import taskListeners from "./tasks-module/task-list"




// import statements for EVENTS




// import statements for NEWS


// MAKING FORM BUTTON FOR NEW NEWS
import news from "./news/news-dom-manager";

// GENERATING FORM FOR NEWS
news.newsPost();
news.getPostForPage();

// import statements for MESSAGES
import messageBuilder from "../scripts/Messages.js/DOMhandler"





// function call statements for TASKS
taskAPI.getAllTasks()
taskForm.buildTaskForm()
// task-list.taskListeners()





// function call statements for EVENTS





// function call statements for NEWS





// function call statements for MESSAGES
messageBuilder.createForm()
messageBuilder.displayMessages()












