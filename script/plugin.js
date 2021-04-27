var input = document.getElementById("input");
var code = document.getElementById("code");
var key = document.getElementById("key");
var answerChk = false;
var answerChk1 = false;
var answerChk2 = false;
var answerChk3 = false;
var answerChk4 = false;

function enterkey() {
  if (window.event.keyCode == 13 && !answerChk) {
    AnswerSubmitted();
  } else if (window.event.keyCode == 13 && answerChk && !answerChk1) {
    answerChk = false;
    AnswerSubmitted1();
  } else if (window.event.keyCode == 13 && answerChk1 && !answerChk2) {
    answerChk1 = false;
    AnswerSubmitted2();
  } else if (window.event.keyCode == 13 && answerChk2 && !answerChk3) {
    answerChk2 = false;
    AnswerSubmitted3();
  } else if (window.event.keyCode == 13 && answerChk3 && !answerChk4) {
    answerChk3 = false;
    AnswerSubmitted4();
  } else if (window.event.keyCode == 13 && answerChk4) {
    answerChk4 = false;
    AnswerSubmitted5();
  }
}

function AnswerSubmitted() {
  if (input.value == "rem" || input.value == "REM") {
    title.innerHTML = "Stage 2. 신";
    key.innerHTML = "key : is";
    story1.innerHTML =
      "내가 문을 열었던가?<br>기억하는 한 해석한 글자를 입으로 내뱉었을 뿐인데, 여긴 전혀 다른 공간이다.<br>여전히 어두운 건 마찬가지다. 왜인지 주변이 어그러지는 것 같기도 하고.";
    code.innerHTML = "AJDHCPCBPG";
    story2.innerHTML =
      "또 알 수 없는 단어다. 이번에도 지나왔던 문처럼 해석하면 되려나.";
    answerChk = true;
  } else {
    alert("the code: code error!");
  }
}

function AnswerSubmitted1() {
  answerChk = true;
  if (input.value == "lightsaber" || input.value == "LIGHTSABER") {
    title.innerHTML = "Stage 3. 의무감";
    key.innerHTML = "key : coming";
    story1.innerHTML =
      "역시나. 이번에도 다른 공간이다.<br>내가 무슨 단어를 말했는지조차 기억이 나지 않는 이곳을 어떻게 설명해야 할까?<br>애초에 나는 왜 나가기 위해 노력하고 있을까?";
    code.innerHTML = "JVQEIANVCWBGYI";
    story2.innerHTML = "해석해야 한다.";
    answerChk1 = true;
  } else {
    alert("the code: code error!");
  }
}

function AnswerSubmitted2() {
  answerChk1 = true;
  if (input.value == "whatdoyoumean" || input.value == "WHATDOYOUMEAN") {
    title.innerHTML = "Stage 4. 꿈";
    key.innerHTML = "key : head";
    story1.innerHTML =
      "You can solve this problem because you already know! You can solve this problem because you already know! You can solve this problem because you already know! You can solve this problem because you already know! You can solve this problem because you already know! You can solve this problem because you already know! You can solve this problem because you already know! You can solve this problem because you already know!";
    code.innerHTML = "NCKOYX";
    story2.innerHTML = "해석해야 한다.";
    answerChk2 = true;
  } else {
    alert("the code: code error!");
  }
}

function AnswerSubmitted3() {
  answerChk2 = true;
  if (input.value == "iknow" || input.value == "IKNOW") {
    title.innerHTML = "Stage 5. 속";
    key.innerHTML = "key : blue";
    story1.innerHTML =
      "바다의 바닥까지 들어가야 바닥을 아는 그 바닥에 적혀 있는 바다의 바닥을 본 바다지만 바다의 속까지 들어가 봐야만 알 수 있는 바다의 바닥과 바다의 속과 바닥으로 인해 존재하는 바닷가와 바닥의 관계 또는 바다";
    code.innerHTML = "QPMASTQEXARA";
    story2.innerHTML = "해석해야 한다.";
    answerChk3 = true;
  } else {
    alert("the code: code error!");
  }
}

function AnswerSubmitted4() {
  answerChk3 = true;
  if (input.value == "openyoureyes" || input.value == "OPENYOUREYES") {
    title.innerHTML = "Stage 6. 엔딩 페이지";
    key.innerHTML = "key : end";
    story1.innerHTML =
      "문을 열었다. 그리고 난 뭘 했지?<br>문을 열기만 하지는 않았을 텐데.<br>불빛을 따라갔다. 그리고 난 뭘 했지?<br>바다를 봤던 것도 같고 그들을 만났던 것도 같고 언젠가 한번 보았던 풍경을 날았던 것도 같고";
    code.innerHTML = "CGTSORPBBPWS";
    story2.innerHTML = "마지막이다.";
    answerChk4 = true;
  } else {
    alert("the code: code error!");
  }
}

function AnswerSubmitted5() {
  answerChk4 = true;
  if (input.value == "firstletter" || input.value == "FIRSTLETTER") {
    title.innerHTML = "축하합니다.";
    key.innerHTML = " the code.의 모든 스테이지를 완료하셨습니다.";
    story1.innerHTML =
      "Stage 1. 당연한 밤<br>Stage 2. 신<br>Stage 3. 의무감만이<br>Stage 4. 꿈을 꿀까요<br>Stage 5. 속까지 들어가 봐야만 압니다<br>Stage 6. 엔딩 페이지";
    code.innerHTML = "";
    story2.innerHTML = "";
  } else {
    alert("the code: code error!");
  }
}
