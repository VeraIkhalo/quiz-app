const quizData = [
   { Question : "How old is Cyril?",
      a:"10",
	  b:"17",
	  c:"26",
	  d:"110",
	  correct:"c"},
	  
  {  Question:"What is the most used programming language?",
      a:"Java",
	  b: "JavaScript",
	  c: "Python",
	  d: "C",
	  correct:"b" },
   
   { Question:"Who is the president of US?",
      a:"Joe Biden",
	  b: "Barrack Obama",
	  c: "Donald Trump",
	  d: "Buhari",
	  correct:"c" },
	  
	   { Question:"Who is the president of Nigeria?",
      a:"Atiku Abubakar",
	  b: "Tafawa Balewa",
	  c: "Olusegun Obasanjo",
	  d: "Muhammadu Buhari",
	  correct:"d" },
	  
	   { Question:"How many centimetres make one metre?",
      a:"100",
	  b: "1000",
	  c: "10000",
	  d: "10",
	  correct:"a" }     ];
	  
	  const answerEls = document.querySelectorAll(".answer");
	  const quiz = document.getElementById("quiz");
	  const questionEl= document.getElementById("question");
	  const aText= document.getElementById("a_text");
	  const bText= document.getElementById("b_text");
	  const cTtext= document.getElementById("c_text");
	  const dText= document.getElementById("d_text");
	  const submitBtn =document.getElementById("submit");
	 	

	 let currentQuiz = 0;
	 let score = 0;
	 
     loadQuiz();

		
		function loadQuiz(){
			deselectAnswers();
		const currentQuizData = quizData[currentQuiz];
		
  
		questionEl.innerText = currentQuizData.Question;
		aText.innerHTML = currentQuizData.a;
		bText.innerHTML= currentQuizData.b;
		cTtext.innerHTML = currentQuizData.c;
		dText.innerHTML = currentQuizData.d;
		}
		
 
 function getSelected() {
	 let answer =undefined;

  answerEls.forEach((answerEl) => {
 if(answerEl.checked){
   answer = answerEl.id;
 }
});
return answer;
}

   function deselectAnswers() {
	answerEls.forEach((answerEl) => {   
   answerEl.checked =false;
   });
   }


		
	  
	  
submitBtn.addEventListener("click", ()=>{
 const answer =getSelected();
 
 if(answer){
 if(answer === quizData[currentQuiz].correct){
    score++;
 }
 
 currentQuiz++;
 
 if(currentQuiz < quizData.length){
  loadQuiz();
 }
 else{ 
 quiz.innerHTML = `<h2> You answered correctly at ${score}/${quizData.length} questions.</h2> <button onClick="location.reload()">Reload</button>`;
	  }
 }

});	  
	  
	  
	  
	  
	  
	  
	  