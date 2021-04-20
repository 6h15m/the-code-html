var input = document.getElementById("input");
var story = document.getElementById("story");

function AnswerSubmitted() {
  if (input.value == "the code.") {
    story.innerHTML = "내가 문을 열었던가? 기억하는 한";
  } else {
    alert("the code: code error!");
  }
}
