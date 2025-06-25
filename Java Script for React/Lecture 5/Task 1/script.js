const button = document.getElementById("startBtn");
    const message = document.getElementById("message");

    button.addEventListener("click", () => {
      message.textContent = "Timer started. Please wait...";

      setTimeout(() => {
        message.textContent = "Timer End!";
      }, 5000); 
    });