function existingUser() {
  var email = document.getElementById("email").value;
        addEventListener("click", function(event){
    event.preventDefault()
        });
                console.log(email);
  var password = document.getElementById("password").value;
              console.log(password);
        
    if (password ===""){
            error = true;
            document.getElementById("passworderror").textContent = "Password Required";
        }
    
        if (email ===""){
          
          document.getElementById("emailerror").textContent = "Email Required";
          return false;
          }else if (!EmailIsLegal(email)){
            document.getElementById("emailerror").textContent = "Please Input Your Correct Email";
              return false;
                }
                function EmailIsLegal(email){
                    return email.includes("@") && email.includes(".");
        }
            
        if (password ===""){
          error = true;
          document.getElementById("passworderror").textContent = "Password Required";
    
        } 
    //     if (login = []){
    //         var existingUsers = {
    //           "email": email,
    //           "password": password,
    //       }
    //       login.push(existingUsers);
    //       login = JSON.stringify(login);
    //         localStorage.setItem("todoUsers", login);
    //       alert("Thank you for coming back");
          
      
    // } else {
    //     alert("This User Does Not Exist!!")
    //     } 
  var existingTodoUser ={
    email: $("#email").val(),
    password: $("#password").val(),
  }
  
  $.ajax({
    type: "POST",
    url: 'http://todo.reworkstaging.name.ng/v1/users/login',
    data: existingTodoUser,
    // processData: false,
    // contentData: false,
    success: function (getUser){
      if (getUser.code == 404){
        alert(getUser.msg);
      
      } else {
        alert('Thank you for coming back');
        localStorage.setItem("AiDe User", JSON.stringify(getUser));
      window.location.href= "todohtml.html"
      } 
    },
    error: function(getUserError){
      console.log(getUserError);
      alert('Invalid');
    }
  });
  console.log(existingTodoUser);
    }

    // $.ajax({
    //   type: 'POST',
    //   url: 'http://todo.reworkstaging.name.ng/v1/users/',
    //   data: createUser,
    //   // processData: false,
    //   // contentData: false,
    //   success: function (postUser){
    //     if (postUser.error == 304){
    //       alert("User Already Exist‼");
    //     } else {
    //       alert('You have successfully created an account');
    //       location.href= "todoLogIn.html"
    //     }
    //   },
    //   error: function(postUserError){
    //     console.log(postUserError);
    //     alert('User Not Registered‼')
    //   }
    // });
    // console.log(createUser);

    function createCategory() {
      var categoryInput = document.getElementById("categoryInput");
      var categoryList = document.getElementById("categoryList");
      
    
      // Check if the input is not empty
      if (categoryInput.value.trim() !== "") {
          // Create a new list item
          
          var listItem = document.createElement("li");
          listItem.textContent = categoryInput.value;
          
          
          // Add an edit button to the list
          var editButton = document.createElement("button");
          editButton.textContent = "Edit";
          editButton.onclick = function () {
              categoryList.editChild(listItem);
          };
  
          // Add a delete button to the list item
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
          title: $("#categoryList").val(),
          color: $("#colour").val(),
        }
        
        $.ajax({
          type: 'POST',
          url: 'http://todo.reworkstaging.name.ng/v1/tags/',
          data: postCategory,
          // processData: false,
          // contentData: false,
          success: function (postNewCategory){
            console.log(postNewCategory);
            alert('You have successfully created a Category');
          },
          error: function(postNewCategoryError){
            console.log(postNewCategoryError);
            alert("Category Already Exist");
          }
        });
        console.log(postCategory);
  
      // })
      
    // });
  
     
  // }
    }
