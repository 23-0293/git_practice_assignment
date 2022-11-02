function checkprime(num)
{
  let factor = 0;
	for(let i=2; i*i<num; i++)
	{
		let factor = 0;
		if(num%i==0)
		{
			factor++ ;
		}
	}
	if(factor == 0 ){
		return "Prime"
	}
	return "Not_Prime";
}
console.log(checkprime(13));
