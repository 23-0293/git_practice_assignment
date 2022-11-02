function checkprime(num)
{
	for(let i=2; i*i<num; i++)
	{
		if(num%i==0)
		{
			return false;
		}
	}
	return true;
}
console.log(checkprime(13));
