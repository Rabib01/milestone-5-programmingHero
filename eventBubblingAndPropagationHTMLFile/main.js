// his event bubbling video was good, but this one the one with event delegation, he did not use e.target.closest() therefore this was not good
// https://www.youtube.com/watch?v=3KJI1WZGDrg
const grandParent = document.querySelector(".grandParent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const category = document.querySelector("#categories");
const inputs = document.querySelector(".input-container");

grandParent.addEventListener(
  "click",
  function () {
    console.log("grand parent clickedd!");
    console.log("");
  },
  false,
);

parent.addEventListener(
  "click",
  function (e) {
    console.log("Parent is clicked");
    console.log("");
    e.stopPropagation();
  },
  false,
);

child.addEventListener(
  "click",
  function () {
    console.log("Child is clicked");
    console.log("");
  },
  true,
);

// Code for event delegation

category.addEventListener("click", function (e) {
  // ---------------->
  if (e.target.id === "Laptops") {
    window.location.assign("laptop.html");
  }

  //------------------> The issue with this is that
  // if we had few more tags and nested elements, if we clicked those elemetns then due to bubbling the user will be directerd to the laptop as well
});

inputs.addEventListener("keyup", function (e) {
  if (e.target.value != undefined) {
    e.target.value = upperCasingFirstLetter(e.target.value);
  }
});

const upperCasingFirstLetter = function (string) {
  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// pros and limitations of event Delegations
// saves a lot of memory
// less code
// dom manipulation and infinite scrolling

// lot of evetns do not bubble up, for example blur and focus

// limitation -> we need to let the events bubble and and not use e.stopProppagation() in the code
