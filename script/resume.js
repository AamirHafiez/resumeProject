// SCROLL DOWN FOR NAV BAR AND GOTO TOP BUTTON
function scrollDown(target){
	var curr = 0;
	function scroll(){
		window.scrollBy(0, 50);
		if(curr >= target){
			clearInterval(id);
			return;
		}
		curr = curr + 50;
	}
	var id = setInterval(scroll, 10);
}

function scrollUp(target){
	var curr = 4353;
	function scroll(){
		window.scrollBy(0, -50);
		if(curr <= target){
			clearInterval(id);
			return;
		}
		curr = curr - 50;
	}
	var id = setInterval(scroll, 10);
}

var scrollBut = document.querySelectorAll('.scroll-down');
for(var i = 0; i < scrollBut.length; i++){
	scrollBut[i].addEventListener('click', function(){
		var ch = this.getAttribute('data-value');
		if(ch === '1'){
			scrollDown(700);
		}
		else if(ch === '2'){
			scrollDown(1121);
		}
		else if(ch === '3'){
			scrollDown(1900);
		}
		else if(ch === '4'){
			scrollDown(2900);
		}
		else if(ch === '5'){
			scrollDown(4353);
		}
		else if(ch == '6'){
			scrollUp(0);
		}
	});
}
