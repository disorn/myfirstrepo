function generateRandomNumber()
{
    return Math.floor(Math.random() * 100 + 1);
}

function checkGuess(guess, generateRandomNumber)
{
	// Do not change these two lines
	
	var statusCode = -1;
	var statusMessage = "YOUR STATUS MESSAGE GOES HERE";

	if (guess == generateRandomNumber) 
	{
		statusCode = 0
		statusMessage = "Correct!";
	} else if (guess<generateRandomNumber) 
	{
		statusCode = 1
		statusMessage = "Incorrect! Hint: MAS!";
	} else if (guess>generateRandomNumber)
	{
		statusCode = 2
		statusMessage = "Incorrect! Hint: MENOS!";
	} else
	{
		statusCode = 3
		
	}
sDFFDSASDDSSADFSDV 

	// Do not change this line
	return { "statusCode": statusCode, "statusMessage": statusMessage };
}