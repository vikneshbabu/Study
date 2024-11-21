const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//===== addTask() function you need to provide add Task btn using click event=====
function addTask(){

    //check is there a value in the inputbox
    // ***if value is empty give alert***
    if(inputBox.value == ""){
        alert("You should write something.")
    }else{
    //***if there a value in inputbox do these things

        // 1- create li tag when add new task clicking the btn
        let li = document.createElement('li');
        // 2 -add task value (eg: Php Fundamental) into this li tag
        li.innerHTML = inputBox.value;
        // 3- then append this li tag with value to our container
        listContainer.appendChild(li);
        
        //as well ad need to add image (close img) to close task
        let img = document.createElement('img');
        img.src = "img/notcheck.png";
        img.classList.add("close"); //some css style add using class
        li.appendChild(img); 
    }

    //::::after adding task inputbox should be empty:::
    inputBox.value = "";

    //::::need to call saveData method to store these task in Local Storage
    saveData();
}
//--------------------------------------------------------------------------

//===== when click listcontainer =======

listContainer.addEventListener('click',(e)=>{
    //when you click the task in the container, it mark as checked.
    // also you can uncheck
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked"); 
        //that changes shoud be saved in the local storage
        saveData();
    }

    //when you click the close btn, task should be removed from the container
    else if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        //that changes shoud be saved in the local storage
        saveData();
    }
})
//------------------------------------------------------------------------
//=====this function is used to save data in local storage.=====
function saveData(){
    //this is the medthod signature ==> localStorage.setItem(key, value)
    localStorage.setItem("data",listContainer.innerHTML);
}

//-----------------------------------------------------------------------
//====this function is used to get data from local storage.===
function showList(){
      //this is the medthod signature ==> localStorage.getItem(key);
      //that data you need to set to listCOntainer. Then you can see your works
    listContainer.innerHTML = localStorage.getItem("data");
}

//you need to call to it
showList();