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
  // CHANGE THE NAME FOR ONLY EXISTING ARTICLES
  getPostForPage() {
    allFetchCalls.getArticles()
    .then(articles => {
      
        const newsContainer = document.querySelector("#articles-section")
        const newsSectionDiv = document.createElement("div");
          newsSectionDiv.id = "newsSectionDiv";
          newsContainer.appendChild(newsSectionDiv);
        articles.forEach(article => {
        console.log(article)
        const newsSection = document.createElement("section");
        
        //  CREATING NEWS ELEMENT POST TO PUT TO DOM
        
         const title = document.createElement("h1");
         const synopsis = document.createElement("h2");
         const url = document.createElement("a");
         const time = document.createElement("p");

         title.textContent = article.title;
         synopsis.textContent = article.synopsis;
         url.textContent = article.url;
         url.setAttribute("href", article.url)
         url.setAttribute("target", "_blank")
         time.textContent = new Date();
         
         newsSection.appendChild(title);
         newsSection.appendChild(synopsis);
         newsSection.appendChild(url);
         newsSection.appendChild(time);
         newsSectionDiv.appendChild(newsSection);
        })
      })}
    };
    
    export default news;
    
    
    // WORKING ON TIMESTAMP FUNCTIONALITY
    
// const timeStamp = new Date();
// timeStamp.getTime();

