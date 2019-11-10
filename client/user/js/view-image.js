function view(event){

	let parent = document.getElementById('image-galery');

	parent.removeChild(parent.childNodes[0]);

	console.log(event);
	var src_imgage = event.src;
	console.log(src_imgage);
	var nodeImage =  document.createElement("img");
	nodeImage.src = src_imgage;
	document.getElementById('model-galeery').style.display = 'block';
	document.getElementById('image-galery').appendChild(nodeImage);
}

function hide(){
	document.getElementById('model-galeery').style.display = 'none'
}