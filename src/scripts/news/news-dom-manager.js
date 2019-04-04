import newsForm from "./news-event-listeners";

const news = {
  newsPost() {
    const newNewsButton = document.createElement("button");
    newNewsButton.textContent = "News";
    const newsContainer = document.querySelector("#articles-section");
    newsContainer.appendChild(newNewsButton);

    newNewsButton.addEventListener("click", newsForm.buildNewsForm);

  }
};
export default news;

// MAKING FORM BUTTON FOR NEW NEWS
import news from "./news/news-dom-manager";

// GENERATING FORM FOR NEWS
news.newsPost();
