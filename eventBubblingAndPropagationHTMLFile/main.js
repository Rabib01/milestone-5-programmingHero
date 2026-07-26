const grandParent = document.querySelector(".grandParent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

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
