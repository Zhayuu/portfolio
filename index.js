function validateForm(){

    var firstName = document.getElementById("firstName");
    if(firstName.value.length < 2){
        alert("Sorry: The first name should be a minimum length of two (2) characters");
        firstName.focus();
        return false;
    } else {
        var reg = new RegExp("^[A-Za-z]+$");
        if (!reg.test(firstName.value)){
            alert("Sorry: The first name should only use alpha characters(A-Z and a-z)");
            return false;
        }
    }
    var lastName = document.getElementById("lastName");
    if(lastName.value.length < 2){
        alert("Sorry: The last name should be a minimum length of two (2) characters");
        lastName.focus();
        return false;
    } else {
        var reg2 = new RegExp("^[A-Za-z]+$");
        if (!reg2.test(lastName.value)){
            alert("Sorry: The last name should only use alpha characters(A-Z and a-z)");
            return false;
        }
    }
    return true;
}