document.addEventListener("DOMContentLoaded", function() {
    const transactionList = document.getElementById("transactionList");
    const transactionForm = document.getElementById("transactionForm");
  
    transactionForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const sender = document.getElementById("sender").value;
      const recipient = document.getElementById("recipient").value;
      const amount = document.getElementById("amount").value;
  
      // Create a new transaction element
      const transaction = document.createElement("div");
      transaction.classList.add("transaction");
      transaction.innerHTML = `
        <div class="info">
          <span>Sender: ${sender}</span>
          <span>Recipient: ${recipient}</span>
        </div>
        <div class="info">
          <span>Amount: ${amount}</span>
          <span>Date: ${getCurrentDate()}</span>
        </div>
      `;
  
      // Add the new transaction to the transaction list
      transactionList.appendChild(transaction);
  
      // Reset the form
      transactionForm.reset();
    });
  
    function getCurrentDate() {
      const currentDate = new Date();
      return currentDate.toDateString();
    }
  });
  