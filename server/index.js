"use strict"
// 1st text box
function formValidate(){
    var f1 = document.forms[0];
    var userName = f1.uName;
    if(userName.value.length == 0){
        alert("Please Enter User Name");
        userName.focus();
        return false;
    }
    //password box
    var password = f1.password;
    if(password.value.length == 0){
        alert("Please Enter Password");
        password.focus();
        return false;
    }
    // validate select section
    var select1 = f1.selectCity;
    if(select1.value == 0){
        alert("Please Select City");
        select1.focus();
        return false;
    }
    //validate checkbox section
    var checkBox = document.getElementsByName("course");
    var flag = false;

    for(var i = 0; i < checkBox.length; i++){
        if(checkBox[i].checked){
            flag = true;
            break;
        }
    }
        if(!flag){
            alert("Please Check Courses");
            checkBox[0].focus;
            return false;
    }
    //validate 2nd select section
    // var select2 = f1.selectCollege;    (target by name)
    var select2 = document.getElementById("sCollege");   //(target by id)
    if(select2.value == "select"){
        alert("Please Select College");
        select2.focus();
        return false;
    }
    //validate gender
    var radioGender = f1.gender;
    var flag = false;
    for(var i = 0; i < radioGender.length; i++){
        if(radioGender[i].checked){
            flag = true;
            break;
        }
    }
        if(!flag){
            alert("Please Select Gender");
            radioGender[0].focus();
            return false;
        }
        // validate toggle-switch checkbox
        var radioSwitch = document.getElementById("toggle-switch");
        var isCheckboxChecked = radioSwitch.checked;

        if(!isCheckboxChecked){
            alert("Please Subscribe!");
            return false;
        }

        // validate textarea
        var textArea = f1.feedback;
        if(textArea.value.length == 0){
            alert("Please write Your Feedback");
            textArea.focus();
            return false;
        }
    return true;
}

                                             // form reset

function formReset(){
    confirm("Are you sure to reset the form?");
}
