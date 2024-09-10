/* 
steps:
1- check if there is any saved rating value in local storage, 
   and if there is a value, mark it by changing its backgroundColor 
2- user selects a rating value, so its backgroundColor will be changed
3- the user clicks submit, then checking if he selects a rating value or not
4- if he selects a rating value, the rating part is hiden & a thank you msg is shown to him
   if he did not select a value, an error msg is shown to him
5- the rating value will be stored in the local storage 
   so, when the user open the site again, the previous selected value is shown to him, 
   and he is able to edit his selection and submit the new rating value
*/

// & step 1
const ratingVal = document.querySelectorAll(".ratingNo");
const ratingCard = document.querySelector(".ratingCard");

if (localStorage.getItem("ratingVal")) {
  ratingVal.forEach((rate) => {
    if (rate.children[0].value == localStorage.getItem("ratingVal")) {
      rate.classList.add("selected");
      const welcomeMsg = document.createElement("p");
      welcomeMsg.append("You have already rated our product ✨");
      welcomeMsg.style.cssText =
        "color:var(--orange); text-align:center; margin-bottom:1rem;";
      ratingCard.prepend(welcomeMsg);
    }
  });
}

// & step 1, 2, user selects a value
let SelectedVal = 0;

ratingVal.forEach((value) => {
  value.addEventListener("click", function () {
    // * save selected value to be shown in the thank you msg
    SelectedVal = this.children[0].value;

    // * remove selected style from previously selected values
    ratingVal.forEach((previousSel) => {
      previousSel.classList.remove("selected");
    });

    // * add selection style to the newley selected value only
    value.classList.add("selected");
  });
});

// & step 3, 4 & 5
const submitBtn = document.querySelector('button[type="submit"]');
const submitMsg = document.querySelector(".submitMsg");
const userRating = document.querySelector(".selectedVal");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault(); //* pevent refresh

  if (SelectedVal !== 0) {
    ratingCard.style.display = "none";
    submitMsg.style.display = "block";

    userRating.textContent = SelectedVal;
    localStorage.setItem("ratingVal", SelectedVal);
  } else {
    // * show error msg if user click on submit without selecting any value
    const errorMsg = document.createElement("p");
    errorMsg.append("Please select a rating value!");
    errorMsg.style.cssText =
      "color:var(--orange); text-align:center; margin-top:1rem;";
    ratingCard.append(errorMsg);
  }
});
