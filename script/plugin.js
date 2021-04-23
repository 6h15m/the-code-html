var input = document.getElementById("input");
var code = document.getElementById("code");
var key = document.getElementById("key");
var answerChk = false;

function enterkey() {
  if (window.event.keyCode == 13) {
    AnswerSubmitted();
  }
}

https: function AnswerSubmitted() {
  if (input.value == "rem" || input.value == "REM") {
    title.innerHTML = "Stage 2. 신";
    key.innerHTML = "key : is";
    story1.innerHTML =
      "내가 문을 열었던가?<br>기억하는 한 해석한 글자를 입으로 내뱉었을 뿐인데, 여긴 전혀 다른 공간이다.<br>여전히 어두운 건 마찬가지다. 왜인지 주변이 어그러지는 것 같기도 하고.";
    code.innerHTML = "AJDHCPCBPG";
    story2.innerHTML =
      "또 알 수 없는 단어다. 이번에도 지나왔던 문처럼 해석하면 되려나.";
    answerChk = true;
    updateStory();
  } else {
    alert("the code: code error!");
  }
}

https: function AnswerSubmitted1() {
  if (input.value == "lightsaber" || input.value == "LIGHTSABER") {
    title.innerHTML = "Stage 3. 의무감";
    key.innerHTML = "key : coming";
    story1.innerHTML =
      "역시나. 이번에도 다른 공간이다.<br>내가 무슨 단어를 말했는지조차 기억이 나지 않는 이곳을 어떻게 설명해야 할까?<br>애초에 나는 왜 나가기 위해 노력하고 있을까?";
    code.innerHTML = "JVQEIANVCWBGYI";
    story2.innerHTML = "해석해야 한다.";
    AnswerSubmitted1();
  } else if (answerChk == false) {
    alert("the code: code ㅇㄹㄹㅎㄴㄹㅎㅁerror!");
  }
}
