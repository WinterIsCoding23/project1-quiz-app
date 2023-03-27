// Read all entered data from the input fields (question, answer, tags)
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(document.querySelector("form"));
    const data = Object.fromEntries(formData);
    console.log(data);

    // Generate all DOM elements for a card with createElement()
    const card = document.createElement("section");  
    const cardQuestion = document.createElement("h2");
    const cardBookmark = document.createElement("img");  
    const cardShowAnswer = document.createElement("p");  
    const cardTagList = document.createElement("ul");  
    const cardTag = document.createElement("li"); 

    //Append the card to the page, directly below the form
    document.body.append(card);
    card.append(cardQuestion);
    card.append(cardBookmark);
    card.append(cardShowAnswer);
    card.append(cardTagList);
    card.append(cardTag);

    // Insert the form's data as text into the DOM elements
    const cardInput = card.value;
    const cardQuestionInput = document.getElementById("question").value;
    const cardShowAnswerInput = document.getElementById("answer").value;
    const cardTagInput = document.getElementById("tag").value;
    
    card.innerHTML = `
    <section class="card">
    <h2 class="card__question">${cardQuestionInput}</h2>
    <img class="card__bookmark" src="./assets/bookmark_filled.png" alt="bookmark_filled" />
    <p>${cardShowAnswerInput}</p>          
        <ul class="card__tag-box">
            <li>${cardTagInput}</li>
        </ul>            
    </section>
    `;

    // Clear input-fields (TODO!!!)
    console.log(card, cardQuestion, cardBookmark, cardShowAnswer, cardTag)

    const cardContainer = document.querySelector("cardInput");
    console.log(cardInput);
    console.log(cardContainer);
    cardContainer.innerHTML = "";

})


