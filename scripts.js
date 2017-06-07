//alert('hello');

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';

var dinosaur = 'triceratops';

var dinosaurUpperCase = dinosaur.toUpperCase();

if (text.toUpperCase().indexOf('VELOCIRAPTOR') >= 0) {
	var textCorrected = text.replace('Velociraptor', dinosaurUpperCase);
}

console.log(textCorrected);

var halfLength = textCorrected.length/2;

console.log(textCorrected.slice(0, halfLength));