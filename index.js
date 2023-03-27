
/*
const toggleBookmark = document.querySelector(".card__bookmark1");

toggleBookmark.addEventListener("click", () => {
    console.log("hallo");
    if (toggleBookmark.src="./assets/bookmark_filled.png")
    toggleBookmark.src="./assets/bookmark_filled.png";
})


const button = document.querySelector(".card__button1");
const buttonClicked = document.querySelector(".card__button1--filled");

function toggleButton() {

    if (button.setAttribute('src') === "./assets/bookmark.png") {
        button.setAttribute('src') === "./assets/bookmark_filled.png";
    }
    else {
        buttonEmpty.setAttribute('src') === "./assets/bookmark.png";
    }
}

buttonFilled.addEventListener("click", toggleButton);


function toggleButtonClick(event) {
    const toggleButton = event.target;
    toggleButton.classList.toggle("card__bookmark--filled");
  }

const toggleBookmark = document.querySelector(".card__bookmark1");
toggleBookmark.addEventListener("click", toggleButtonClick);

button.setAttribute("type", "button");
button.addEventListener("click", toggleButtonClick);
*/


// toggle bookmark
const toggleBookmarks = document.querySelectorAll(".card__bookmark");

for (let i = 0; i < toggleBookmarks.length; i++) {
    const toggleBookmark = toggleBookmarks[i];

    toggleBookmark.addEventListener("click", ()=> {
        //console.log("hallo");
        console.log(toggleBookmark);
        // toggleBookmark.src="./assets/bookmark_filled.png";
        console.log(toggleBookmark.src.includes('filled'));
        if (toggleBookmark.src.includes('filled')) {
        // if (toggleBookmark.src==="./assets/bookmark.png") {
            toggleBookmark.src="./assets/bookmark.png";
        } else {
            // toggleBookmark.classList.add(".card__bookmark1--hidden");
            toggleBookmark.src="./assets/bookmark_filled.png";
        }    
    });
}
  

// answer button 



/*
When the user clicks on the button the previously hidden answer should be displayed

When the user clicks this button again the answer is hidden again

The user can click on this button endlessly and the answer will either be displayed or hidden after each click

The toggle functionality should be applied by using a class which is named "hidden"

If the user clicks on an answer button, we want the button to say "hide answer" when the answer is displayed and "show answer" when the answer is not displayed.
*/