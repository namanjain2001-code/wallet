document.addEventListener("DOMContentLoaded", function() {
    const withdrawList = document.getElementById("withdrawList");
    const withdrawForm = document.getElementById("withdrawForm");
  
    withdrawForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const account = document.getElementById("account").value;
      const amount = document.getElementById("amount").value;
  
      // Create a new withdraw element
      const withdraw = document.createElement("div");
      withdraw.classList.add("withdraw");
      withdraw.innerHTML = `
        <div class="info">
          <span>Account: ${account}</span>
          <span>Amount: ${amount}</span>
        </div>
        <div class="info">
          <span>Status: Pending</span>
          <span>Date: ${getCurrentDate()}</span>
        </div>
      `;
  
      // Add the new withdraw request to the withdraw list
      withdrawList.appendChild(withdraw);
  
      // Reset the form
      withdrawForm.reset();
    });
  
    function getCurrentDate() {
      const currentDate = new Date();
      return currentDate.toDateString();
    }
  });
  