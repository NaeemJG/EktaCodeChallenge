//Please put your answers here

// 1.

// The code is filtering through array allQuestions on the current Object.
// It first checks to make sure all subThreadNames match the current question subThreadName. Then it checks if the mrLevel is the same for the currentQuestion's mrLevel.
// Then it checks to see if atleast one answer is equal to no.
// A better way to write this would be to: 

return !this.allQuestions.filter(q =>
    q.subThreadName == this.currentQuestion.subThreadName && q.mrLevel == this.currentQuestion.mrLevel
  ).some(q => q.currentAnswer == "No")

// 2.

// This code is mapping through the array allQuestions taking each item "q" creating a new array and copying it to an empty object. Assigning it to the variable oldAssessement.

// 3. 

// This code is mapping through the allQuestions array and storing all data or "any" to the object question. Returning an object of all the questions using the spread operator.

// 4. 

// You can loop through the object and use the property name to test whether it's equal to null. Then use the delete keyword to remove that property from the object.

//5. 

// I would use input binding which is essentially when you use inputs to pass data. I was use a property in the header component in file 1 and name it [header]="headerMessage" and pass in the property "headerMessage".
// In file two I would use an "@Input() header;" to expect the data to be passed as a variable. Import the input operator.  Now I can access this string in the div in file 2 using {{header}} string interpreter. 