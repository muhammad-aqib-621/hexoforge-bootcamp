 const button = document.getElementById("startBtn");
    const timerDisplay = document.getElementById("timer");
    const message = document.getElementById("message");

    button.addEventListener("click", () => {
      let count = 0;
      message.textContent = "";
      timerDisplay.textContent = "Time: 0 sec";

      const interval = setInterval(() => {
        count++;
        timerDisplay.textContent = `Time: ${count} sec`;

        if (count >= 10) {
          clearInterval(interval);
          message.textContent = "Stopwatch finished!";
        }
      }, 1000); 
    });