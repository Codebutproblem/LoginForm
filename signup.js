const listUser = [
    {
        user: "minhvu123",
        email: "abc123@gmail.com",
        password: "321"
    },
    {
        user: "hanalhu123",
        email: "hahah123@gmail.com",
        password: "1234567"
    }
];

const registerButton = document.querySelector(".login__button");
if(registerButton){
    const userInput = document.getElementById("login-user");
    const passwordInput = document.getElementById("login-pass");
    const confirmPasswordInput = document.getElementById("login-confirmpass");
    const emailInput = document.getElementById("login-email");
    registerButton.addEventListener("click",(event)=>{
        event.preventDefault();
        const checkExist= listUser.find((item) => {
            return item.user == userInput.value && item.email == emailInput.value;
        });
        if(checkExist){
            alert("Tên người dùng đã tồn tại");
            return;
        }
        if(passwordInput.value != confirmPasswordInput.value){
            alert("Xác nhận tài khoản sai");
            return;
        }
        listUser.push({
            user: userInput.value,
            password: passwordInput.value
        });
        console.log(listUser);
        alert("Đăng ký tài khoản thành công");
    });
}