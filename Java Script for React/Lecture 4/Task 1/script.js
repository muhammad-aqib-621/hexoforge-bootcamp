  (function () {
    const questions = [
      {
        q: "What is the capital of France?",
        options: ["Berlin", "Paris", "Madrid", "Rome"],
        answer: "Paris"
      },
      {
        q: "What is the capital of Pakistan?",
        options: ["Lahore", "Karachi", "Islamabad", "Multan"],
        answer: "Islamabad"
      },
      {
        q: "What is 2 + 4?",
        options: ["3", "4", "5", "6"],
        answer: "6"
      }
    ];

    function createQuiz(qList) {
      const container = document.getElementById("quiz");
      let correct = 0, wrong = 0;

      qList.forEach((qObj, index) => {
        const qDiv = document.createElement("div");
        qDiv.className = "question";
        qDiv.innerHTML = `<p>${index + 1}. ${qObj.q}</p>`;

        qObj.options.forEach(option => {
          const btn = document.createElement("button");
          btn.textContent = option;

          btn.addEventListener("click", function () {
            if (qDiv.querySelector('.feedback')) return;

            const feedback = document.createElement("div");
            feedback.className = "feedback";

            if (option === qObj.answer) {
              feedback.textContent = "Your answer is correct!";
              feedback.classList.add("correct");
              correct++;
            } else {
              feedback.textContent = "Your answer is wrong!";
              feedback.classList.add("wrong");
              wrong++;
            }

            qDiv.appendChild(feedback);

            
            if (index === qList.length - 1) {
              document.getElementById("result").textContent = ` Correct: ${correct},  Wrong: ${wrong}`;
            }
          });

          qDiv.appendChild(btn);
        });

        container.appendChild(qDiv);
      });
    }

    createQuiz(questions);
  })();
