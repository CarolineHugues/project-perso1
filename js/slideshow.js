var slideshow = document.getElementById("slideshow");
var arrowLeft = document.getElementById("arrow-left");
var arrowRight = document.getElementById("arrow-right");

ajaxGet("http://localhost/project-sass-music-travel/api/articles-data.php", function (response) {

    var data = JSON.parse(response);
    var articles = data.result.articles;

    function articleTemplate(article){
        var imgElt = document.createElement("img");
        imgElt.setAttribute("src", article.image);
        imgElt.setAttribute("alt", article.title);
        var imageContainer = document.createElement("p");
        imageContainer.classList.add("image-container");
        imageContainer.appendChild(imgElt);

        var titleElt = document.createElement("h1");
        titleElt.textContent = article.title;

        var descriptionElt = document.createElement("p");
        descriptionElt.textContent = article.description;

        var button = document.createElement("input");
        button.setAttribute("type", "button");
        button.setAttribute("value", "voir");
        button.classList.add("button-see");
        var buttonLink = document.createElement("a");
        buttonLink.href = 'article.php?id=' + article.id + '';
        buttonLink.appendChild(button);
        var buttonContainer = document.createElement("p");
        buttonContainer.appendChild(buttonLink);
        buttonContainer.classList.add("button-container");

        var articleContainer = document.createElement("article");
        articleContainer.appendChild(imageContainer);
        articleContainer.appendChild(titleElt);
        articleContainer.appendChild(descriptionElt);
        articleContainer.appendChild(buttonContainer);

        slideshow.appendChild(articleContainer);
    }

    function addArticles(){
        for(var i = 0; i < articles.length; i++){
            articleTemplate(articles[i]);
        }
    }

    function setSlideshowWidth(){
        var allArticles = slideshow.querySelectorAll("article");
        var oneArticle = allArticles[0];
        var articleWidth = parseFloat(getComputedStyle(oneArticle).width);
        var numberArticles = data.result.number;
        var slideshowWidth = (articleWidth * numberArticles).toString();
        slideshow.style.width = slideshowWidth + "px";
    }

    addArticles();

    setSlideshowWidth();
});