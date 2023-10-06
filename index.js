let fromUserInputEl = document.getElementById("fromUserInput");
let toUserInputEl = document.getElementById("toUserInput");
let counterTextEl = document.getElementById("counterText");

function displayValue(fromCount, toCount) {
  let currentCount = fromCount;
  counterTextEl.textContent = currentCount;

  let valueId = setInterval(function () {
    if (currentCount < toCount) {
      currentCount = currentCount + 1;
      counterTextEl.textContent = currentCount;
    } else {
      clearInterval(valueId);
    }
  }, 1000);
}

function onClickStart() {
  let fromVal = fromUserInputEl.value;
  let toval = toUserInputEl.value;

  if (fromVal === "") {
    alert("Enter from value");
  } else if (toval === "") {
    alert("Enter from value");
  } else {
    let fromUserInput = parseInt(fromVal);
    let toUserInput = parseInt(toval);

    displayValue(fromUserInput, toUserInput);
  }
}
