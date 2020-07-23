var Usernamecon = false;
var Emailcom = false;
var Passwordcon = false;
var Cpasswordcon = false;
var mobilecon = false;
var conditioncon = false;
document.getElementById('Username').addEventListener('blur', () => {
    let r = /^[a-zA-Z]\w{1,}$/i;
    let result = document.getElementById('Username').value;
    if (r.test(result)) {
        document.getElementById('Username').classList.remove('is-invalid');
        document.getElementById('Username').classList.add('is-valid');
        Usernamecon = true;
    }
    else {
        document.getElementById('Username').classList.add('is-invalid');
        Usernamecon = false;
    }

});
document.getElementById('Email').addEventListener('blur', () => {
    let r = /^\S+@[a-zA-Z]{0,8}\.[a-zA-Z]{2,}$/;
    let result = document.getElementById('Email').value;
    if (r.test(result)) {

        document.getElementById('Email').classList.remove('is-invalid');
        Emailcom = true;
    }
    else {

        document.getElementById('Email').classList.add('is-invalid');
        Emailcom = false;
    }

});
var Passwordtext = document.getElementById('Password');
Passwordtext.addEventListener('blur', () => {
    let weak = /^[a-zA-z]{0,6}$/;
    let medium = /^[a-zA-z0-9@]{6,8}$/;
    let strong = /^[a-zA-Z0-9#!@$_*%/()^]{8,}$/;
    let result = Passwordtext.value;
    if (weak.test(result)) {
        document.getElementById('Password').classList.add('is-invalid');
        document.getElementById('passwordid').innerHTML = "Weak Password";
        Passwordcon = false;
    }
    else if (medium.test(result)) {

        document.getElementById('Password').classList.add('is-invalid');
        document.getElementById('passwordid').innerHTML = "Medium Password";
        Passwordcon = false;
    }
    else if (strong.test(result)) {

        Passwordcon = true;
        document.getElementById('Password').classList.remove('is-invalid');
        document.getElementById('Password').classList.add('is-valid');
    }

});
document.getElementById('cpassword').addEventListener('blur', () => {
    let cpassword = document.getElementById('cpassword').value;
    let result = Passwordtext.value
    if (cpassword != result) {
        document.getElementById('cpasswordid').innerHTML = "Password did not Match";
        document.getElementById('cpassword').classList.add('is-invalid');
        Cpasswordcon = false;
    }
    else {
        document.getElementById('cpassword').classList.add('is-valid');
        document.getElementById('cpassword').classList.remove('is-invalid');
        Cpasswordcon = true;
    }

});
document.getElementById('Mnumber').addEventListener('blur', () => {
    let r = /^[0-9]{10}$/;
    let result = document.getElementById('Mnumber').value;
    if (!r.test(result)) {
        document.getElementById('Mnumber').classList.add('is-invalid');
        mobilecon = false;
    }
    else {

        document.getElementById('Mnumber').classList.remove('is-invalid');
        document.getElementById('Mnumber').classList.add('is-valid');
        mobilecon = true;
    }
});
document.getElementById('gridCheck').addEventListener('click', () => {
    conditioncon = true;

});
document.getElementById('formsubmit').addEventListener('click', e => {
    e.preventDefault();
    if (Usernamecon && Passwordcon && Emailcom && Cpasswordcon && conditioncon) {
        document.getElementById('successbar').style.display = 'block';
        document.getElementById('dangerbar').style.display = 'none';
    }
    else {
        document.getElementById('dangerbar').style.display = 'block';
        document.getElementById('successbar').style.display = 'none';
    }
});