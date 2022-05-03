let theTotal = total(1,2,3,4,5,6,7,8,9,10);

function total(...theNumbers){
	let sum = 0
	for(let aNumber in theNumbers){
		sum += theNumbers[aNumber]*1;//Want to know why aNumber is multiplied by 1? Remove it and find out. :)
	}
	
	return sum
}

document.querySelector('#total').innerHTML = theTotal;