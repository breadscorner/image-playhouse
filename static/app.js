// CURRENT BUGS
/* 
When random seed images present then you click add image toggling the buttons/edit mode glitches. More than one image may be clicked and shrunk at the same time. Buttons also do not appear on the URL(From add image) cards.
*/
/* 
When you max or min the grow or shrink the buttons stop working.
*/

// TO DO
/*
When you click add image the input should clear.
*/
/*
Add local storage.
*/
/* 
Add undo/redo buttons.
*/
/*
Fix key binds so they work again.
Grow/shrink keydown have issues in function.
Tab index.
*/

// Get button element
const addImgButton = document.querySelector('.buttonAddImage');
// Get form element
const addImgForm = document.querySelector('.newPicture');

// DISPLAY FORM/ HIDE FORM
// ------------------------

const displayForm = () => {
  // Toggle form visibility/ change button text
  let boxDisplay = window.getComputedStyle(addImgForm).display;
  if (boxDisplay === 'none') {
    addImgForm.style.display = 'block';
    addImgForm.style.position = "absolute";
    addImgForm.style.top = "0";
    addImgForm.style.marginTop = "50px";
    addImgForm.style.right = "0";
    addImgButton.innerHTML = 'Hide Form';
  } else {
    addImgForm.style.display = 'none';
    addImgButton.innerHTML = 'Add Image';
  }
}

// EDIT BUTTONS
// ------------------------

const createEditButtons = () => {
  const custom = document.createElement('div');
  const editButton = document.createElement('button');
  editButton.innerText = 'edit';
  editButton.classList.add('editButton');

  // Delete Button
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('deleteButton');
  deleteButton.innerText = 'delete';

  custom.appendChild(editButton);
  custom.appendChild(deleteButton);

  return custom;
}

// HIDDEN BUTTON LISTENERS
// ------------------------

// let activeCard = null;

const editMode = (event, newImageCard) => {
  // 1/ Hide whatever was active
  document.querySelector('.active') &&
    document.querySelector('.active').classList.add('hiddenCard');
  // Don't need both just one and the default

  // 2/ Activate the clicked one
  newImageCard.querySelector('.hiddenCard') &&
    newImageCard.querySelector('.hiddenCard').classList.add('active');

  // activeCard = newImageCard
  // but I might do....
  // 1/
  // find *every* active buttonarea, and for ALL of them make them not active
  // 2/
  // find the buttonarea for our newImageCard, and .classList.add('active');
}

const swap = (firstNode, secondNode) => {
  const temp = document.createElement('div');
  firstNode.parentNode.insertBefore(temp, firstNode);
  secondNode.parentNode.insertBefore(firstNode, secondNode);
  temp.parentNode.insertBefore(secondNode, temp);
  temp.parentNode.removeChild(temp);
};

// Left function(Edit)
const moveLeftListener = (event) => {
  // adding debugger here...swapping logic works
  // keybind only allows it to work once.
  let leftTarget = event.target.closest('.card');
  if (leftTarget != null) {
    swap(
      leftTarget,
      leftTarget.previousElementSibling
    );
  }
}

// Right function(Edit)
const moveRightListener = (event) => {
  let rightTarget = event.target.closest('.card');
  if (rightTarget != null) {
    swap(
      rightTarget,
      rightTarget.nextElementSibling
    );
  }
}

// Shrink function(Edit)
const shrinkListener = (event) => {
  let selectedImg = event.target.closest('.card').querySelector('img'); //issue
  if (selectedImg.style.width <= "300px" && selectedImg.style.height <= "300px") {
    selectedImg.style.width = `${parseInt(selectedImg.style.width) - 30}px`;
    selectedImg.style.height = `${parseInt(selectedImg.style.height) - 30}px`;
  }
}

// Grow function(Edit)
const growListener = (event) => {
  let selectedImg = event.target.closest('.card').querySelector('img');
  if (selectedImg.style.width <= "270px" && selectedImg.style.height <= "270px") {
    selectedImg.style.width = `${parseInt(selectedImg.style.width) + 30}px`;
    selectedImg.style.height = `${parseInt(selectedImg.style.height) + 30}px`;
  }
}

// Delete function(Edit mode)
const deleteListener = (event) => {
  let deleteEvent = event.target.closest('.card');
  if (deleteEvent) {
    deleteEvent.remove()
  }
}

// IMAGE SEEDING
// ------------------------

const addImages = () => {
  let input = document.querySelector('#newPicUrl').value;
  if (input) {
    const card = makeImage(input);
    const cardWithButtons = editModeBtns(card)
    card.children[1].classList.add("hiddenCard");
    document.querySelector('#displayImage').appendChild(cardWithButtons);
  }
}

const makeImage = (src, index) => {
  const newImageCard = document.createElement('div');
  newImageCard.className = 'card';

  // Create new random images
  const newRdmImage = document.createElement('img');
  newRdmImage.src = src;
  newRdmImage.style.width = "180px";
  newRdmImage.style.height = "180px";
  newImageCard.appendChild(newRdmImage);
  const contentCard2 = document.createElement('div');
  newRdmImage.addEventListener("click", (e) => {
    shrinkImage(contentCard2);
    //  debugger;
    contentCard2.children[1].classList.toggle("hiddenCard");
    [...document.querySelectorAll(".card")].filter((card) => card.children[1].className === "" && card != e.target.parentNode).forEach(card => {
      card.children[1].classList.toggle("hiddenCard");
      shrinkImage(card);
    })
  })
  // Add .card class to container element
  contentCard2.className = 'card';
  contentCard2.tabIndex = index + 1;
  contentCard2.appendChild(newRdmImage);
  return contentCard2;
}

const randomSeed = () => {
  // debugger;
  // Loop to create 10 rdm images
  for (let i = 0; i < 10; i++) {
    let random10 = Math.floor(Math.random() * 100);
    const contentCard = makeImage(`https://picsum.photos/id/${random10}/200/300`, i)
    const cardWithButtons = editModeBtns(contentCard)
    contentCard.children[1].classList.add("hiddenCard");
    document.querySelector('#displayImage').appendChild(cardWithButtons);
  }
}

const shrinkImage = (card) => {
  //debugger;
  const image = card.children[0];
  const isShrunk = image.style.width == "120px";
  if (isShrunk) {
    image.style.width = "180px";
    image.style.height = "180px";
  } else {
    image.style.width = "120px";
    image.style.height = "120px";
  }
}

// CREATING EDITING BUTTONS
// ------------------------

const editModeBtns = (clickedCard) => {
  // Container for buttons
  const customContainer = document.createElement('div');

  // Grow Button
  const growButton = document.createElement('button');
  growButton.innerText = '🌱';
  growButton.classList.add('growButton');

  // Shrink Listener 
  const shrinkButton = document.createElement('button');
  shrinkButton.innerText = '🤏';
  shrinkButton.classList.add('shrinkButton');

  // Delete Button
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('deleteButton');
  deleteButton.innerText = '❌';

  // Move left Button
  const moveLeftButton = document.createElement('button');
  moveLeftButton.classList.add('moveLeft');
  moveLeftButton.innerText = '⬅️';

  // Move right button
  const moveRightButton = document.createElement('button');
  moveRightButton.classList.add('moveRight');
  moveRightButton.innerText = '➡️';

  // Append edit buttons to div
  customContainer.appendChild(moveLeftButton);
  customContainer.appendChild(moveRightButton);
  customContainer.appendChild(shrinkButton);
  customContainer.appendChild(growButton);
  customContainer.appendChild(deleteButton);

  // Append buttons to the card clicked
  clickedCard.appendChild(customContainer);
  moveLeftButton.addEventListener('click', moveLeftListener)
  moveRightButton.addEventListener('click', moveRightListener)
  growButton.addEventListener('click', growListener);
  shrinkButton.addEventListener('click', shrinkListener);
  deleteButton.addEventListener('click', deleteListener);
  return clickedCard;
}

// CLEAR BUTTON
// ------------------------

const clearPage = () => {
  document.querySelector("#displayImage").innerHTML = "";
}

// CANCEL
// ------------------------

const cancelUrl = () => {
  // Clear the url input box
  const clearUrl = document.querySelector('#newPicUrl');
  clearUrl.value = '';
}

// EVENT LISTENER(CLICK)
// ------------------------

document.addEventListener('click', function (event) {
  event.preventDefault();
  if (event.target.classList.contains('buttonAddImage')) {
    displayForm();
  } else if (event.target.classList.contains('randomSeed')) {
    randomSeed();
  } else if (event.target.classList.contains('addPicture')) {
    addImages();
  } else if (event.target.classList.contains('clearspace')) {
    clearPage();
  } else if (event.target.classList.contains('buttonCancelAdd')) {
    cancelUrl();
  }
})

// EVENT LISTENER(KEYBINDS)
// ------------------------

// Use tab index through 
document.addEventListener('keydown', recordKey);

function recordKey(e) {
  e.preventDefault();
  switch (e.key) {
    // Up
    case "w":
    case "ArrowUp":
    case "up":
      growListener(e);
      break
    // Down
    case "s":
    case "ArrowDown":
    case "down":
      shrinkListener(e);
      break
    // Left
    case "a":
    case "ArrowLeft":
    case "left":
      debugger;
      moveLeftListener(e);
      break
    // Right
    case "d":
    case "ArrowRight":
    case "right":
      moveRightListener(e);
      break
    // Delete
    case "Backspace":
      deleteListener(e);
    default:
  }
}
