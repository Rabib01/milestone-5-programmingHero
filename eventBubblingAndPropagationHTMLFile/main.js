// his event bubbling video was good, but this one the one with event delegation, he did not use e.target.closest() therefore this was not good
// https://www.youtube.com/watch?v=3KJI1WZGDrg
const grandParent = document.querySelector(".grandParent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const category = document.querySelector("#categories");
const inputs = document.querySelector(".input-container");

const addBoxButtoon = document.querySelector("[data-add-box]");
const grid = document.querySelector(".grid");
const boxes = document.querySelectorAll(".box");

const strongMango = document.querySelector("#strong-mango");
const buttonsList = document.querySelectorAll(".btn-add");

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
  if (e.target.id === "Laptops") {
    window.location.assign("laptop.html");
  }
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

// // bad practise starts here, adding event listeners everytime oe blox is clicked

// addBoxButtoon.addEventListener("click", function (e) {
//   const box = document.createElement("div");
//   box.classList.add("box");
//   box.addEventListener("click", function (e) {
//     box.classList.toggle("clicked");
//   });

//   grid.append(box);
// });

// boxes.forEach((box) => {
//   box.addEventListener("click", function (e) {
//     box.classList.toggle("clicked");
//   });
// });
// // bad practise

// good starts here, the only problem is that for demo reasons
// i am attaching an evenmtlistener to the documentr itself
// addBoxButtoon.addEventListener("click", function (e) {
//   const box = document.createElement("div");
//   box.classList.add("box");
//   grid.append(box);
// });

// // doucment s the parent element
// document.addEventListener("click", function (e) {
//   if (e.target.matches(".box")) {
//     console.log("bOx diV waS ClicKEd");
//     e.target.classList.toggle("clicked");
//   }
// });
// good practise ends here

// even betterPractise - Doing the same wthing with a global helper function
addBoxButtoon.addEventListener("click", function (e) {
  const box = document.createElement("div");
  box.classList.add("box");
  grid.append(box);
});

function addGlobalListenerHelperFunction(type, selector, callBack) {
  document.addEventListener(type, function (e) {
    if (e.target.matches(selector)) {
      callBack(e);
    }
  });
}

addGlobalListenerHelperFunction("click", ".box", (e) => {
  e.target.classList.toggle("clicked");
});
// evven better practise enbds here

// CLOSEST METHOD :: ************************
// Allows to start at the child element and then using a selector
// go up the dom tree untily ou find an element mathcing hte selector
// in other words the closest parent element to whatever your target is

// badPractise - Thiis is a [bad practise] because what if this werre nested byh a lot of timkjesw
// const list = strongMango.parentElement.parentElement;
// console.log(list);

//good practise - this is where the closest method isw going tho be a lot more nifty
const list = strongMango.closest("ul");
console.log(list);
// now we have a reference to that unordered list from that strong mango tag

// using the closest Method on a button node-list
buttonsList.forEach((listItem) => {
  listItem.addEventListener("click", function (e) {
    console.log("I was clicked");
    console.log(listItem.closest("li"));
  });
});
// We need to know which list item this button is for

//-----------------------------------//

/**
 * Notes :
 * matches(".class-name") selects ansy css selectors in the dom
 * matches by css selectors
 */

// event delegation
// taking an event listener to our parent and delegating it to our children

/** notes
------Advantages
// pros and limitations of event Delegations
// saves a lot of memory
// less code
// dom manipulation and infinite scrolling
-----Limitations
// lot of evetns do not bubble up, for example blur and focus
// limitation -> we need to let the events bubble and and not use e.stopProppagation() in the code
*/

//------------------> The issue with this is that
// if we had few more tags and nested elements, if we clicked those elemetns then due to bubbling the user will be directerd to the laptop as well
