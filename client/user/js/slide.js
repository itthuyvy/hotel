
var index = 0;
var max = 2;
var min = 0;

var arrayImage = ['../images/bannerq.jpg', '../images/banner1.jpg', '../images/banner.jpg'];

function pre() {
	// body...
	index --;
	console.log(1)
	if(index < min){
		index = 2;
	}
	document.getElementById('banner-wraper').style.backgroundImage = 'url(' + arrayImage[index] +')';
}

function next() {
	// body...
	index ++;
	if(index >max){
		index = 0;
	}
	document.getElementById('banner-wraper').style.backgroundImage = 'url(' + arrayImage[index] +')';
}