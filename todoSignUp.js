function user() {
    var fullname = document.getElementById("name").value;
    addEventListener("click", function(event){
      event.preventDefault()
    });
    
                console.log(fullname);

  var email = document.getElementById("email").value;
                console.log(email)
  var password = document.getElementById("password").value;
              console.log(password);
        
    if (fullname ==="") {
                error = true;
            document.getElementById("nameerror").textContent = "Name Required";   
          }
    if (password ===""){
            error = true;
            document.getElementById("passworderror").textContent = "Password Required";
        }
    
        if (email ===""){
          // error = true;
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
    
        } else {
            signup = []
              var newUsers = {
                "name": fullname,
                "email": email,
                "password": password,
            }
            signup.push(newUsers)
            signup = JSON.stringify(signup)
              localStorage.setItem("AiDe TodoSignUps", signup)
            // alert("You have successfully created an account");
            
        // }
        // $(document).ready(function(){
        //   $('#userItem').on('submit', function(event){
        //     event.preventDefault();
        //     // var createUser = $('form').serializeArray();
            var createUser ={
              name: $("#name").val(),
              email: $("#email").val(),
              password: $("#password").val(),
            }
            
            $.ajax({
              type: "POST",
              url: 'http://todo.reworkstaging.name.ng/v1/users/',
              data: createUser,
              // processData: false,
              // contentData: false,
              success: function (postUser) {
                alert("You have successfully created an account");
                console.log(postUser);
                location.href= "todoLogIn.html"
              },
              error: function(postUserError){
                if (postUserError.error === 304){
                  alert(postUserError.msg);
                }
                alert("Registration Not Successful! Check Your Connection or Contact Your Internet Service Provider.");
                console.log(postUserError);
              }
            });
            console.log(createUser);
          // })
          
        // });  
    }
  }

    // $(document).ready(function(){
    //   $('#userItem').on('submit', function(event){
    //     event.preventDefault();
    //     var loginUser = $('form').serializeArray();
        
    //     $.ajax({
    //       type: 'POST',
    //       url: 'http://todo.reworkstaging.name.ng/v1/users/login/',
    //       data: loginUser,
    //       // processData: false,
    //       // contentData: false,
    //       success: function (loginUser){
    //         console.log(loginUser);
    //         // alert('Registration Successful');
    //       },
    //       error: function(loginUserError){
    //         console.log(loginUserError);
    //         // alert('Registration Not Completed!');
    //       }
    //     });
    //     console.log(loginUser);
    //   })      
    // }); 