function getRandomInt()
{
	var randomNumber = Math.floor(Math.random()*10);
	if (randomNumber >=1 && randomNumber<=6){ 
	return randomNumber;
	}
	else 
	return 1;
}
console.log(getRandomInt());