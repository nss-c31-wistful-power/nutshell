const news = {
  newsPost() {
    const newNews = document.createElement("button");
    newNews.textContent = "News";
    const newsButton = document.querySelector("#articles-section");
    newsButton.appendChild(newNews);

  }
};
export default news;

