let questions = document.querySelectorAll(".textFaqGroup");

questions.forEach((question) => {
	question.addEventListener('click', () => {
		question.parentNode.classList.toggle('active')
	})
 })