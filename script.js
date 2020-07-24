window.addEventListener('scroll', function(){
	var header = document.querySelector('header');
	header.classList.toggle('sticky', window.scrollY > 0 ) //Nicely Done!

});
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

const init=function(){
	console.log("test");
	document.getElementById('submit').addEventListener('click', submit); //where is your submit() function?

}
