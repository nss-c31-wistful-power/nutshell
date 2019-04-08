import allFetchCalls from "./news-api-handler";
import news from "./news-dom-manager";

const clearElement = domElement => {
    while (domElement.firstChild) {
        domElement.removeChild(domElement.firstChild);
    }
}

console.log("Hello")
const newsForm = {
  buildNewsForm() {
    const newsContainer = document.querySelector("#articles-section")

    const newsTitleLabel = document.createElement("label");
    newsTitleLabel.textContent = "News Title: ";
    const newsTitleInput = document.createElement("input");
    newsTitleInput.id = "news-title-input";

    const synopsisLabel = document.createElement("label");
    synopsisLabel.textContent = "Synopsis: ";
    const synopsisInput = document.createElement("input");
    synopsisInput.id = "synopsis-title-input";

    const URLLabel = document.createElement("label");
    URLLabel.textContent = "URL: ";
    const URLInput = document.createElement("input");
    URLInput.id = "url-title-input";

    const saveNewsButton = document.createElement("button");
    saveNewsButton.textContent = "Save";
    saveNewsButton.id = "saveNewsButton";
    // saveNewsButton.addEventListener("click",)

    // const timeStampInfo = document.createElement("p");
    // timeStampInfo.textContent = new Date();
    // timeStampInfo.id = "time-stamp-info"

    const newsFormSections = document.createElement("section");
    newsContainer.appendChild(newsFormSections);
    newsFormSections.appendChild(newsTitleLabel);
    newsFormSections.appendChild(newsTitleInput);
    newsFormSections.appendChild(synopsisLabel);
    newsFormSections.appendChild(synopsisInput);
    newsFormSections.appendChild(URLLabel);
    newsFormSections.appendChild(URLInput);
    newsFormSections.appendChild(saveNewsButton);
    // newsFormSections.appendChild(timeStampInfo);

    return newsContainer;
},
  handleAddFormSubmission() {
    console.log("testing");
    // const idSubmission = document.querySelector("#id-sumbission")
    const newsTitleSubmission = document.querySelector("#news-title-input").value;
    const synopsisSubmission = document.querySelector("#synopsis-title-input").value;
    const urlSubmission = document.querySelector("#url-title-input").value;
    // const userId = document.querySelector(#user-id)


    const newNewsPost = {
      title: newsTitleSubmission,
      synopsis: synopsisSubmission,
      url: urlSubmission,
      timeStamp: new Date(),
      userId: ""
    };

    console.log("testing", newNewsPost)

    const newsSectionDiv = document.querySelector("#newsSectionDiv")

    allFetchCalls.postNewArticle(newNewsPost)
      .then(clearElement(newsSectionDiv))
      .then(news.getPostForPage);
  }
};
export default newsForm;