
// Exercise 1

function PrintOdds(count) {
	for (let i = 1; i <= count; i++) {
		if (i % 2 !== 0) {	
			console.log(count);
		}

	if (count < 0) {
		console.log("Invalid input: Count must be a positive number");
		return;
	}
			console.log(i) 
		}
	}
PrintOdds(100);

// Exercise 2

function CheckAge(userName, age) {
	let aboveSixteen = `Congrats ${userName}, you can drive!`;
	let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

	if (age < 16) {
     console.log(`Sorry ${userName}, but you need to wait until you're 16.`);
	}else{
		console.log(aboveSixteen);
	}

	if ( age > 16) {
		console.log (`Congrats ${userName}, you can drive!`);
	}else{ 
		console.log (belowSixteen);
	}

	}
	CheckAge ("joe", 0');




  // Exercise 3

  function identPoint(x, y) {
	if (x === 0 && y === 0) {
	  console.log("The point is at the origin (0, 0).");
	} else if (x === 0) {
	  console.log(`The point (${x}, ${y}) is on the y axis.`);
	} else if (y === 0) {
	  console.log(`The point (${x}, ${y}) is on the x axis.`);
	} else if (x > 0 && y > 0) {
	  console.log(`The point (${x}, ${y}) is in Quadrant 1.`);
	} else if (x < 0 && y > 0) {
	  console.log(`The point (${x}, ${y}) is in Quadrant 2.`);
	} else if (x < 0 && y < 0) {
	  console.log(`The point (${x}, ${y}) is in Quadrant 3.`);
	} else {
	  console.log(`The point (${x}, ${y}) is in Quadrant 4.`);
	}
  }
  
  // exercise 4

  function classifyTriangle(side1, side2, side3) {
	if (
	  side1 + side2 <= side3 ||
	  side1 + side3 <= side2 ||
	  side2 + side3 <= side1
	) {
	  return "Invalid triangle: The sum of any two sides should be greater than the length of the third side.";
	} else if (side1 === side2 && side2 === side3) {
	  return "Equilateral triangle: All side lengths are equal.";
	} else if (side1 === side2 || side1 === side3 || side2 === side3) {
	  return "Isosceles triangle: Two side lengths are equal.";
	} else {
	  return "Scalene triangle: All side lengths are different.";
	}
  }
 
  // exercise 5 

  function dataUsage(planLimit, day, usage) {
	let averageDailyUsage = usage / day;
	let daysRemaining = 30 - day;
	let remainingData = planLimit - usage;
	let averageDailyUsageRemaining = remainingData / daysRemaining;
  
	if (averageDailyUsage > planLimit) {
	  return "You are over the average daily usage limit.";
	} else if (averageDailyUsage < planLimit) {
	  return "You are under the average daily usage limit.";
	} else {
	  return "You are right on track with the average daily usage limit.";
	}
	
	if (remainingData <= 0) {
	  return "You have run out of data for this month.";
	} else {
	  return `You have ${remainingData} MB of data left. You can use an average of ${averageDailyUsageRemaining.toFixed(2)} MB per day for the rest of the month.`;
	}
  }
  
  
	