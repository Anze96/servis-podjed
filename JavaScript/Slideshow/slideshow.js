var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {	//dobi notr 1 al pa -1
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slajd");
	var dots = document.getElementsByClassName("kvadratek");

	if (n > slides.length) {slideIndex = 1}	//ko pridemo iz gumbom next do zadnjega slida, da za�ne ponovno na prvem, na 1
	if (n < 1) {slideIndex = slides.length}	//�e gremo pa nazaj iz gumbom prev, pa da pridemo na za�etek, gre pa potem od konca spet naprej

	/* da dolo�i prej�nemu slajdu display: none; zato da ga ne prika�e */
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	/* da zbri�e prej�nemu dotu-u " active" napis v imenu class-a */
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIndex-1].style.display = "block";	/* more bit -1 ker je to tabela in tabela se za�ne pr 0, pa v tem primeru do 3, ker so 4 slajdi */
	dots[slideIndex-1].className += " active";	/* more bit -1 ker je to tabela in tabela se za�ne pr 0, pa v tem primeru do 3, ker so 4 slajdi */
}