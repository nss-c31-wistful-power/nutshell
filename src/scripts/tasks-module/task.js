//

export default {

    buildForm(form) {
        //<article>
        //<h3> Task Name </h3>
        //<p> Date </p>
        //</article>


        const taskArticle = document.createElement("article");

        const taskHeader = document.createElement("h3");
        taskHeader.textContent = form.taskName;

        const taskParagraph = document.createElement("p");
        taskParagraph.textContent = form.date;

        taskArticle.appendChild(taskHeader);
        taskArticle.appendChild(taskParagraph);

        return taskArticle;

    }
}