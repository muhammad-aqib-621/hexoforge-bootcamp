const boxes = document.querySelectorAll(".box");
const title = document.getElementById("title");
const para = document.getElementById("para");
const resetbtn = document.getElementById("reset");

const originalTitle = title.textContent;
const originalPara = para.textContent;

boxes.forEach(box => {
    box.addEventListener("click", () => {
        boxes.forEach(b => b.classList.remove("highlight")); 
        box.classList.add("highlight");                      

        title.textContent = `${box.textContent} Selected`;
        para.textContent = `${box.textContent} was clicked`;
    });
});

resetBtn.addEventListener("click", () => {
    boxes.forEach(b => b.classList.remove("highlight"));     
    title.textContent = originalTitle;
    para.textContent = originalPara;
});
