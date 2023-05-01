fetch("/api/articles")
    .then(response => response.json())
    .then(function (response) {
        let articles = document.querySelector(".cards")
        for (let article of response) {

            let card = document.createElement("div");
            card.classList.add('card');
            card.style.widt = '18rem';

            let articleBody = document.createElement("div");
            articleBody.classList.add("card-body");

            let articleTitle = document.createElement("h5");
            articleTitle.classList.add("card-title");
            articleTitle.textContent = article.title;

            let articleCreated = document.createElement("h6");
            articleCreated.classList.add("card-subtitle", "mb-2", "text-body-secondary");
            articleCreated.textContent = article.created_at;

            let articleText = document.createElement("p");
            articleText.classList.add("card-text");
            articleText.textContent = article.body;

            let articleDelete = document.createElement('a');
            articleDelete.classList.add("card-link");
            articleDelete.textContent = "Delete";
            articleDelete.href = "/article/${article.id}/delete";

            articles.appendChild(card);
            card.appendChild(articleBody);
            articleBody.appendChild(articleTitle);
            articleBody.appendChild(articleCreated);
            articleBody.appendChild(articleText);
            articleBody.appendChild(articleDelete);
        }
    })