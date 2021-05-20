const input = document.querySelector("input");
const addBtn = document.querySelector(".addTask > button");

addBtn.addEventListener("click", addList);


//functions
function addList(e){
    
    const notCompleted = document.querySelector(".notCompleted");
    const completed = document.querySelector(".Completed");

    const newLi = document.createElement("li");
    const delBtn = document.createElement("button");
    const checkBtn = document.createElement("button");

    

    delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    checkBtn.innerHTML = '<i class="fas fa-check"></i>';
    
    


    if(input.value !== ""){
        newLi.textContent = input.value;
        input.value = '';
        notCompleted.appendChild(newLi);
        newLi.appendChild(delBtn);
        newLi.appendChild(checkBtn);
    }

    checkBtn.addEventListener("click", function(){
        const parent = this.parentNode;
        parent.remove();
        completed.appendChild(parent);
        delBtn.style.display = "none";
    })

    delBtn.addEventListener("click", function () {
        const parent = this.parentNode;
        parent.remove();
    })
}