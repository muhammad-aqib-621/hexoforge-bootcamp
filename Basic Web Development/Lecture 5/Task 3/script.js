  const countdown = document.getElementById("countdown");
    const reminder = document.getElementById("reminder");

    let timeLeft = 15;

    function startTimer() {
      timeLeft = 15;
      reminder.textContent = "";

      const interval = setInterval(() => {
        timeLeft--;
        countdown.textContent = `Next reminder in: ${timeLeft} sec`;

        if (timeLeft === 0) {
          clearInterval(interval);
          reminder.textContent = "Drink Water!";
          setTimeout(startTimer, 3000); 
        }
      }, 1000);
    }

    startTimer();