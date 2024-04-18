let mainContainer = document.querySelector("#mainContainer");
let card = document.getElementById("card");
let btn = document.querySelector(".btn");
let txt = document.querySelector(".txt");

btn.addEventListener("click", () => {
  let value = txt.value;

  fun(value);
  window.scrollTo(0, 0);
});
function fillData(val, data) {
  let description = val.querySelector(".description");
  let title = val.querySelector(".title");
  let image = val.querySelector(".image");

  description.innerHTML = data.description;
  title.innerHTML = data.title;
  image.innerHTML = `<img src = "${data.urlToImage}"> `;
  val.addEventListener("click", () => {
    console.log(val);
    console.log(data);
    window.open(data.url, "__blank");
  });
}
function funtionCall(data) {
  mainContainer.innerHTML = "";

  data.articles.forEach((data) => {
    let val = card.cloneNode(true);
    val.id = "cards";
    if (data.urlToImage && data.description && data.title) {
      fillData(val, data);
      mainContainer.append(val);
    }
  });
}
async function fun(query) {
  let url = `https://newsapi.org/v2/everything?q=${query}&apiKey=6c18a61ad8be4e189d9d11a51b8aeca4`;
  let res = await fetch(url);
  let data = await res.json();
  console.log(data);
  funtionCall(data);
}
let query = "india";
window.addEventListener("load", () => {
  fun(query);
});
