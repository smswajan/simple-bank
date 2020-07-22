// Login Button Event Handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function() {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";

  const trxArea = document.getElementById("transaction-area");
  trxArea.style.display = "block";
});

//   Deposit button event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function() {
  const depositAmount = document.getElementById("depositAmount").value;
  const depositNumber = parseFloat(depositAmount);

  updateSpanText("currentDeposit", depositNumber);
  updateSpanText("currentBalance", depositNumber);

  document.getElementById("depositAmount").value = "";
});
function updateSpanText(id, depositNumber) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const totalAmount = depositNumber + currentNumber;
  document.getElementById(id).innerText = totalAmount;
}

// Withdraw button event handler
const withdrawBtn = document.getElementById("minusWithdraw");
withdrawBtn.addEventListener("click", function() {
  const withdrawAmount = document.getElementById("withdrawAmount").value;
  const withdrawNumber = parseFloat(withdrawAmount);

  updateWithdrawBalance("currentWithdraw", withdrawNumber);
  updateWithdrawBalance("currentBalance", withdrawNumber);

  document.getElementById("withdrawAmount").value = "";
});

function updateWithdrawBalance(id, withdrawNumber) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  var totalAmount = 0;
  if (id == "currentBalance") {
    var totalAmount = currentNumber - withdrawNumber;
  } else {
    var totalAmount = currentNumber + withdrawNumber;
  }
  document.getElementById(id).innerText = totalAmount;
}
