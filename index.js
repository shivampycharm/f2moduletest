let img1 = document.getElementById("first-img");
let img2 = document.getElementById("second-img");
let img3 = document.getElementById("third-img");
let img4 = document.getElementById("fourth-img");

let form = document.getElementById("form");

let count = false;

// Result after clicking First Image

img1.addEventListener("click", function () {
  // To show the form after clicking the first image
  form.style.display = "block";
  count++;
});

// Result after clicking Second Image

img2.addEventListener("click", function () {
  // To get the input values
  let name_input = document.getElementById("name");
  let name = name_input.value;

  let email_input = document.getElementById("email");
  let email = email_input.value;

  let username_input = document.getElementById("username");
  let username = username_input.value;

  // Create paragraph to display Name and Username
  var para1 = document.createElement("p");
  para1.innerHTML = "Name   :   " + name;

  var para2 = document.createElement("p");
  para2.innerHTML = "Username   :   " + username;

  // Append the paragraph in the web page
  document.body.append(para1);
  document.body.append(para2);

  // Styling the paragraph
  para1.style.cssText = `
        padding: 10vh 5vw 20px 5vw;
        font-size: 2rem;`;

  para2.style.cssText = `
        padding: 0 5vw;
        font-size: 2rem;`;

  // To empty input fields for the next time
  name_input.value = "";
  username_input.value = "";
  email_input.value = "";

  // Hide the form to show name and username
  form.style.display = "none";
  count++;
});

// Result after clicking Third Image

img3.addEventListener("click", function () {
  let img = document.createElement("img");
  img.src = "images/dice.jpg";
  document.body.appendChild(img);

  img.style.cssText = `
    width: 400px;
    height: 400px;
    margin: 10vh 10vw;
    cursor: pointer;`;

  let diceNum = [1, 2, 3, 4, 5, 6];

  let n = 1;
  let sum = 0;

  while (n <= 2 && sum <= 10) {
    for (let i = 0; i < 3; i++) {
      img.addEventListener("click", () => {
        let randNum = Math.floor(Math.random() * diceNum.length + 1);
        sum += randNum;
        console.log(sum);
      });
    }
    if (sum > 10) {
      count = true;
      break;
    }
    sum = 0;
    n++;
  }

  if (sum <= 10) {
    console.log("Bad luck");
  }
});

function dice() {}

// Result after clicking Fourth Image

img4.addEventListener("click", function () {
  //define a variable consisting alphabets in small and capital letter
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";

  //specify the length for the new string
  let randomstring = "";
  let lenString = 12;

  //loop to select a new character in each iteration
  for (let i = 0; i < lenString; i++) {
    let rnum = Math.floor(Math.random() * characters.length);
    randomstring += characters.substring(rnum, rnum + 1);
  }

  //display the generated string
  let para = document.createElement("p");
  document.body.append(para);
  para.innerHTML = randomstring;

  para.style.cssText = `
    margin: 10vh 40vw;
    padding: 1.5vh 1vw;
    width: 300px;
    border: 4px solid black;
    font-size: 2.5rem;`;
});
