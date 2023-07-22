function generatePin() {
  const randomDigit = Math.round(Math.random() * 10000);
  const randomDigitString = randomDigit + "";

  if (randomDigitString.length === 4) {
    console.log(randomDigit);
    return randomDigit;
  } else {
    console.log(generatePin());
    return generatePin();
  }
}
document
  .getElementById("generateButtton")
  .addEventListener("click", function () {
    const pin = generatePin();
    const getGeneratedPin = document.getElementById("generatedPin");
    getGeneratedPin.value = pin;
  });

document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    const getNumber = event.target.innerText;
    const inputUserNumber = document.getElementById("inputNumber");
    const previousInputNumber = inputUserNumber.value;

    if (isNaN(getNumber)) {
      if (getNumber === "C") {
        inputUserNumber.value = "";
      } else if (getNumber === "<") {
        const digits = previousInputNumber.split("");
        digits.pop();
        const remainingDigits = digits.join("");
        inputUserNumber.value = remainingDigits;
      }
    } else {
      const newInputNumber = previousInputNumber + getNumber;
      inputUserNumber.value = newInputNumber;
    }
  });
document.getElementById("submitPin").addEventListener("click", function () {
  const generatedPinFieldString = document.getElementById("generatedPin");
  const generatedPinField = generatedPinFieldString.value;

  const inputPinFieldString = document.getElementById("inputNumber");
  const inputPinField = inputPinFieldString.value;

  const showSuccessStatus = document.getElementById("success-status");
  const showFailedStatus = document.getElementById("failed-status");
  const showBlankStatus = document.getElementById("blank-status");

  if (generatedPinField === inputPinField) {
    inputPinFieldString.value = "";
    generatedPinFieldString.value = "";
    showSuccessStatus.style.display = "block";
    showFailedStatus.style.display = "none";
    showBlankStatus.style.display = "none";
  } else if (inputPinField === "") {
    showBlankStatus.style.display = "block";
    showSuccessStatus.style.display = "none";
    showFailedStatus.style.display = "none";
  } else {
    inputPinFieldString.value = "";
    showFailedStatus.style.display = "block";
    showSuccessStatus.style.display = "none";
    showBlankStatus.style.display = "none";
  }
});
