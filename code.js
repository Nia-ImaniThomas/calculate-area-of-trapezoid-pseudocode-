/*Test Scenario 1: 
If sideA is 4
and sideB is 7, and 
height is 5
then the area we exspect is 27.5*/

/*Test Scenario 2: 
If sideA is 3
and sideB is 5, and 
height is 8
then the area we exspect is 32*/

//step 1: Get our inputs (sideA and sideB and height)

let sideAInput = prompt("What is the lenght of side A?") //TODO: use prompt ()
let sideBInput = prompt("What is the length of side B?") //TODO: use prompt ()
let heightInput = prompt("What is height of the trapezoid?") //TODO: use prompt ()

let sideA = parseFloat(sideAInput)
let sideB = parseFloat(sideBInput)
let height = parseFloat(heightInput)

/*
TODO: Write an IF statement which checks if
    sideA
    sideB
    height
    are NaN, and if so, let the user know they 
    need to refresh the page and give us real 
    numbers. . . 

    otherwise (else), run the code as normal.

*/

console.log(sideA, sideA === 3)
console.log(sideB,  sideB === 5)
console.log(height, height === 8)

//step 2: Sum the sides!
let sum = sideA + sideB

//Step 3: Average the sum of the 2 side!
let average = sum / 2

//Step 4: Multiply the average of the sides by the height!
let area = average * height

//Step 5: Output (Research), doc.write(), console.log(), and alert()
document.write(`
   <details>
        <summary>
            If the length of side A is <mark>${sideA}</mark>,
            and the length of side B is <mark>${sideB}</mark>,
            and the height is <mark>${height}</mark>,
            then the area of the trapezoid is. . . 

            <h3>${area}</h3>
        </summary>
   </details>
If the length of side A is ${sideA},
    and the lenght is side B ${sideB},
    then the height is ${height}.

`)
