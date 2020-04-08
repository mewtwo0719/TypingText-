var title = document.getElementById('title');
var text = document.getElementById('text');

var titleText = title.textContent;
var textText = text.textContent;
title.innerHTML = " ";
text.innerHTML = " ";

var i = 0;
setInterval(function () {
	if(i >= titleText.length){
		clearInterval();
	}else
	title.innerHTML += titleText[i];
	i++;
}, 100);

setTimeout(function(){

var j = 0;
setInterval(function () {
	if(i >= textText.length){
		clearInterval();
	}else
	text.innerHTML += textText[j];
	j++;
}, 100);

}, (100*titleText.length+2));





