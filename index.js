const yourLogin = prompt('Do you want to sign in?');
const hours = new Date().getHours()
let yourPassword = '';
if (yourLogin === null) {
    alert("Canceled");
} else if (yourLogin.length < 4) {
    alert("I don't know any users having name length less than 4 symbols");
} else if (yourLogin.toLowerCase() === 'user' || yourLogin.toLowerCase() === 'admin') {
    yourPassword = prompt('Enter your password');

    if (yourPassword === null) {
        alert('Canceled');
    } else if (yourLogin.toLowerCase() === 'user' && yourPassword === 'UserPass') {
        hours > 5 && hours < 20 ? alert('Good day, dear User!') : alert('Good evening, dear User!');
    }
        else if (yourLogin.toLowerCase() === 'admin' && yourPassword === 'RootPass') {
        
        hours > 5 && hours < 20 ? alert('Good day, dear Admin!') : alert('Good evening, dear Admin!');
        
    } else {
        alert('Wrong password');
                }

} else {
    alert("I don’t know you");
}



