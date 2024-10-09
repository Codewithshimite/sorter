const comma = document.querySelector(".text")
const space = document.querySelector(".text")
const lineBreak = document.querySelector(".text")






//sort words asceding order by comma
function sortWordsByComma(){
  let inputWords = document.querySelector("#inputWords").value;
  let arr = inputWords.split(" ");

  arr.sort(ascendingOrder);
  arr = arr.map(item => typeof item === "number" ? item.toString() : item);

  comma.innerHTML = arr.join(",")
  
}

//sort words asceding order by space
function sortWordsBySpace(){
  let inputWords = document.querySelector("#inputWords").value;
  let arr = inputWords.split(" ");

  arr.sort(ascendingOrder);
  arr = arr.map(item => typeof item === "number" ? item.toString() : item);

  space.innerHTML = arr.join(" ")
 
}

//sort words asceding order by lineBreak
function sortWordsByLineBreak(){
  let inputWords = document.querySelector("#inputWords").value;
  let arr = inputWords.split(" ");

  arr.sort(ascendingOrder);
  arr = arr.map(item => typeof item === "number" ? item.toString() : item);

  space.innerHTML = arr.join("<br>")
 
}



function ascendingOrder(a, b) {
return a.localeCompare(b);
}

//descendingOrder by comma
function sortWordsByCommadescendingOrder(){
  let inputWords = document.querySelector("#inputWords").value;
  let arr = inputWords.split(" ");

  arr.sort(descendingOrder);
  arr = arr.map(item => typeof item === "number" ? item.toString() : item);

  comma.innerHTML = arr.join(", ")
};

//descendingOrder by space
function sortWordsByspacedescendingOrder(){
  let inputWords = document.querySelector("#inputWords").value;
  let arr = inputWords.split(" ");

  arr.sort(descendingOrder);
  arr = arr.map(item => typeof item === "number" ? item.toString() : item);

  comma.innerHTML = arr.join(" ")
};


//descendingOrder by lineBreak
function sortWordsBybreakdescendingOrder(){
  let inputWords = document.querySelector("#inputWords").value;
  let arr = inputWords.split(" ");

  arr.sort(descendingOrder);
  arr = arr.map(item => typeof item === "number" ? item.toString() : item);

  comma.innerHTML = arr.join("<br>")
};


function descendingOrder(a, b) {
  return b.localeCompare(a);
  }

function copyText() {
  // Get the div element
  const copy = document.getElementById('sortedWords');

  // Log the content for debugging
  console.log(copy);           // Check if the element is selected
  console.log(copy?.textContent); // Check if the div has any text content

  // Check if the element exists and has text content
  if (copy && copy.textContent) {
    // Copy the text to the clipboard
    navigator.clipboard.writeText(copy.textContent)
      .then(() => {
        // Success message
        alert("Copied to clipboard");
      })
      .catch(err => {
        // Error handling
        console.error("Failed to copy text: ", err);
      });
  } else {
    alert("No text to copy");
  }
};

