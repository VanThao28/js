function validate(){
    var name = document.myform.use.value;
    var password = document.myform.password.value;
    var status = false;
    if(name.length == 0){
        document.getElementById('use-loc').innerHTML = " <i class='fas fa-times'></i>";
        status = false;
    }
    else if(name.length < 5){
        document.getElementById('use-loc').innerHTML = "</br><i class='fas fa-times'> email phải trên 5 ký tự</i>";
        status = false;
    }
    else{
        document.getElementById('use-loc').innerHTML = " <i class='fas fa-check'></i>";
        status = true;
    }
    if(password.length == 0 ){
        document.getElementById('password-loc').innerHTML = " <i class='fas fa-times'></i>";
        status = false;
    }
    else if(password.length < 6 ){
        document.getElementById('password-loc').innerHTML = "</br><i class='fas fa-times'> password phải trên 6 ký tự</i>";
        status = false;
    }
    else{
        document.getElementById('password-loc').innerHTML = " <i class='fas fa-check'></i>";
        status = true;
    }
    return status;
}
