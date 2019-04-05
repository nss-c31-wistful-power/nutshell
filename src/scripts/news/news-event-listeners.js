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

    const timeStampInfo = document.createElement("p");
    timeStampInfo.textContent = new Date();

    const newsFormSections = document.createElement("section");
    newsContainer.appendChild(newsFormSections);
    newsFormSections.appendChild(newsTitleLabel);
    newsFormSections.appendChild(newsTitleInput);
    newsFormSections.appendChild(synopsisLabel);
    newsFormSections.appendChild(synopsisInput);
    newsFormSections.appendChild(URLLabel);
    newsFormSections.appendChild(URLInput);
    newsFormSections.appendChild(saveNewsButton);
    newsFormSections.appendChild(timeStampInfo);

    return newsContainer;
}
};
export default newsForm;