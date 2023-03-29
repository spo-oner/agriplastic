document.addEventListener("DOMContentLoaded", function() {
    var questions = document.getElementsByClassName("question");
    for (var i = 0; i < questions.length; i++) {
      questions[i].addEventListener("click", function() {
        var answer = this.nextElementSibling;
        if (answer.classList.contains("answer")) {
          answer.classList.toggle("show");
          this.classList.toggle("watched"); // добавляем/удаляем класс "active" для question
        }
      });
    }
  });