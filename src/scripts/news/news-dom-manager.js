import newsForm from "./news-event-listeners";

const header = document.createElement("h1")
const newsContainer = document.querySelector("#articles-section");
header.textContent = "NEWS"
newsContainer.appendChild(header);

const news = {
  newsPost() {
    const newNewsButton = document.createElement("button");
    newNewsButton.textContent = "New Post";
    newsContainer.appendChild(newNewsButton);

    newNewsButton.addEventListener("click", () => {
      newsForm.buildNewsForm()
      document.querySelector("#saveNewsButton").addEventListener("click", newsForm.handleAddFormSubmission);
    })
  }
}
export default news;


// WORKING ON TIMESTAMP FUNCTIONALITY

// const timeStamp = new Date();
// timeStamp.getTime();

