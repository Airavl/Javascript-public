function makePost(data){
    let parent = document.querySelector("#article__list");
    let articleElement = document.createElement("article");
    articleElement.className="articleEl";

    let titleEl = document.createElement("h3");
    titleEl.className = "articleTitle";
    titleEl.innerText = data.title;
    articleElement.appendChild(titleEl);

    let commentsEl = document.createElement("a");
    commentsEl.className = "articleComments";
    commentsEl.innerText= "Comments:" + data.comments;
    articleElement.appendChild(commentsEl);

    let imageEl = document.createElement("img");
    imageEl.className = "articleImage";
    imageEl.src = "https://placehold.net/default.svg";
    articleElement.appendChild(imageEl);

    let datetagsEl = document.createElement("p");
    datetagsEl.className = "articleDateTags";
    datetagsEl.innerText = data.tags;
    articleElement.appendChild(datetagsEl);

    let textEl = document.createElement("p");
    textEl.className = "articleText";
    textEl.innerText = data.text;
    articleElement.appendChild(textEl);

    parent.appendChild(articleElement);
}

export {makePost};