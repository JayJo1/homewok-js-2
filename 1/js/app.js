function validateEmail() {
    var email = document.getElementById("email-input").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var resultMessage = document.getElementById("result-message");
  
    if (emailRegex.test(email)) {
      resultMessage.textContent = "Добро пожаловать!";
    } else {
      resultMessage.textContent = "Извините, возникла ошибка. Проверьте правильность ввода email.";
    }
  }
  
  