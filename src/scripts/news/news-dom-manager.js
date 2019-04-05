import newsForm from "./news-event-listeners";
import allFetchCalls from "./news-api-handler";

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
  },
  getPostForPage() {
    allFetchCalls.getArticles()
    .then(articlesName => articlesName.forEach(article => {
    console.log(article)
    const newsContainer = document.querySelector("#articles-section")
    const newsSection = document.createElement("section");
    newsContainer.appendChild(newsSection);

  //  CREATING NEWS ELEMENT POST TO PUT TO DOM
    
    // const newsElement () => {
    //   document.createElement("h1"),
    //   document.createElement("h2"),
    //   document.createElement("p")
    // }

    }))
  }
};

export default news;


// WORKING ON TIMESTAMP FUNCTIONALITY

// const timeStamp = new Date();
// timeStamp.getTime();

