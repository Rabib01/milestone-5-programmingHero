const btn = document.getElementById("button");
const comment = document.querySelector(".comments");

console.dir(comment);

btn.addEventListener("click", function (e) {
  console.log("I was clicked");
  const textArea = document.getElementById("text-area").value;
  console.log(textArea);

  const markup = `<p>${textArea}</p>`;

  comment.insertAdjacentHTML("beforeend", markup);
});
