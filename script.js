const listUser = [
    {
        user: "minhvu123",
        password: "321"
    },
    {
        user: "hanalhu123",
        password: "1234567"
    }
];

const buttonLogin = document.querySelector(".login__button");
if(buttonLogin){
    console.log(buttonLogin);
    const userInput = document.getElementById("login-user");
    const passwordInput = document.getElementById("login-pass");
    buttonLogin.addEventListener("click",(event) => {
        event.preventDefault();
        const checkLogin = listUser.find((item) => {
            return item.user == userInput.value && item.password == passwordInput.value;
        });
        if(checkLogin){
            window.location.href = "home.html";
        }
        else{
            alert("Tài khoản mật khẩu không đúng");
        }
    });
}



