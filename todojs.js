function createCategory() {
    var categoryInput = document.getElementById("categoryInput");
    var categoryList = document.getElementById("categoryList");
    var url = "http://todo.reworkstaging.name.ng/v1";
    var aideUser = JSON.parse(localStorage.getItem("AiDe User"));
    
  
    // Check if the input is not empty
    if (categoryInput.value.trim() !== "") {
        // Create a new list item
        
        var listItem = document.createElement("li");
        listItem.textContent = categoryInput.value;
        
        
        // Add an edit button to the category
        var editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = function () {
            categoryList.editChild(listItem);
        };

        // Add a delete button to the category
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            categoryList.removeChild(listItem);
        };
        // var categoryColour = document.createElement("categoryColour")
       
        // Append the edit and delete button to the list item
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        
  
        // Append the list item to the task list
        categoryList.appendChild(listItem);
  
        // Clear the input field
        categoryInput.value = "";
    } 
    // else {
      category = []
        var newCategory = {
          "Category List": categoryList,
          "Colour": colour,
      }
      category.push(newCategory)
      category = JSON.stringify(category)
        localStorage.setItem("Todo Category", category)
      // alert("You have successfully created an account");
      
  // }
  // $(document).ready(function(){
  //   $('#userItem').on('submit', function(event){
  //     event.preventDefault();
  //     // var createUser = $('form').serializeArray();
      var postCategory ={
        user_id: aideUser.id,
        title: $("#categoryList").val(),
        color: $("#colour").val(),
      }
      
      $.ajax({
        type: 'POST',
        url: `${url}/tags`,
        data: postCategory,
        // processData: false,
        // contentData: false,
        success: function (postNewCategory){
          console.log(postNewCategory);
          alert('You have successfully created a Category');
        },
        error: function(postNewCategoryError){
          console.log(postNewCategoryError);
        }
      });
      console.log(postCategory);

    // })
    
  // });

   
// }

  }

  

  function createTask() {
    var categoryInputs = document.getElementById("taskHead");
    var categoryLists = document.getElementById("taskTitle");
    var categoryInputss = document.getElementById("taskInput");
    var categoryListss = document.getElementById("taskList");
    let url = "http://todo.reworkstaging.name.ng/v1";
    let aideUser = JSON.parse(localStorage.getItem("AiDe User"));
  
    // Check if the input is not empty
    if (categoryInputs.value.trim() !== "") {
        // Create a new list item
        
        var listItems = document.createElement("banner");
        listItems.textContent = categoryInputs.value;
  
        // Append the list item to the task list
        categoryLists.appendChild(listItems);
  
        // Clear the input field
        categoryInputs.value = "";
    }
    // Check if the input is not empty
    if (categoryInputss.value.trim() !== "") {
      // Create a new list item
      
      var listItems = document.createElement("banner");
      listItems.textContent = categoryInputss.value;

      // Append the list item to the task list
      categoryListss.appendChild(listItems);

      // Clear the input field
      categoryInputss.value = "";
  }
    
    
  
    // Check if the input is not empty
    if (categoryInputss.value.trim() !== "") {
        // Create a new list item
        
        var listItemss = document.createElement("li");
        listItemss.textContent = categoryInputss.value;
        
        
        // Add an edit button to the list
        var editButtonss = document.createElement("button");
        editButtonss.textContent = "Edit";
        editButtonss.onclick = function () {
            categoryListss.editChild(listItemss);
        };

        // Add a delete button to the list item
        var deleteButtonss = document.createElement("button");
        deleteButtonss.textContent = "Delete";
        deleteButtonss.onclick = function () {
            categoryListss.removeChild(listItemss);
        };
        // var categoryColour = document.createElement("categoryColour")
       
        // Append the edit and delete button to the list item
        listItemss.appendChild(editButtonss);
        listItemss.appendChild(deleteButtonss);
        
  
        // Append the list item to the task list
        categoryListss.appendChild(listItemss);
  
        // Clear the input field
        categoryInputss.value = "";
    }
    var postTask ={
      tag_id: aideUser.id,
      title: $("#taskTitle").val(),
      content: $("#taskList").val(),
    }
    
    $.ajax({
      type: 'POST',
      url: `${url}/tasks`,
      data: postTask,
      // processData: false,
      // contentData: false,
      success: function (postNewTask){
        console.log(postNewTask);
        alert('You have successfully created a Task');
      },
      error: function(postNewTaskError){
        console.log(postNewTaskError);
      }
    });
    console.log(postTask);

  }

  //modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
  }
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

   //checkbox
   var checkBox = document.getElementById("checkBox")
  //  var task = document.getElementById("TaskInput")
   var ban = document.getElementById("ban")
   var checkHide = document.getElementById('checkHide')
     function doneTask(){ 
      if(checkBox.checked === true){
       ban.style.textDecoration = "line-through"
      } else {
       ban.style.textDecoration = "none"
      }
     }

     function checkBoxHide(){
      //  if (checkBox.checked === "")
      //  ban.style.display = "contents"
       if(checkHide.checked === true){
       ban.style.display = "none"
           } else {
               ban.style.display = "block"
            }
     }

   