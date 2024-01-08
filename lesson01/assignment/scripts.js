// Code that requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){

  // Find the example form, and handle its submit event
  const exampleForm = document.querySelector('#example-form')

  exampleForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [0, 1, 2, 3, 5, 8]

    const inputField = document.querySelector('#example-form .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // If the user's input was a number, push it into the array and continue
    if(!isNaN(userNumber)){
      data.push(userNumber)

      // Use reduce to sum all the numbers in the data array
      const sum = data.reduce((accumulator, currentElement) => accumulator + currentElement);

      // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
      document.querySelector('#example-form .output').innerHTML = sum
    }

    // Clear the form field so the user can try again
    inputField.value = ''
  })
})


// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function(){

  // Find the example form, and handle its submit event
  const exampleForm2 = document.querySelector('#example-form2')

 // Find the example form2, and handle its submit event
  exampleForm2.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data2 = [0, 1, 2, 3, 5, 8]

    const inputField = document.querySelector('#example-form2 .input2')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)
      

    //Use the map function to add the users imputed number to each element in the array

  
   

    const map = (x) => {
      const map = data2.map(x => x + userNumber);
      const maps = map.join(', ');
      document.querySelector('#example-form2 .output2').innerHTML = maps
    }
//calling the function
    map(data2);
   
   // Turning the array into a string to display on the page


 

    // Clear the form field so the user can try again
    inputField.value = ''
  })
})



// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function(){

  // Find the example form, and handle its submit event
  const exampleForm3 = document.querySelector('#example-form3')

 // Find the example form2, and handle its submit event
  exampleForm3.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data3 = [0, 1, 2, 3, 5, 8]

    const inputField = document.querySelector('#example-form3 .input3')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    //Use the filter function to filter out the numbers that are less than the users imputed number
    //Then turn the array into a string to display on the page
    const filter = (x) =>{
      let fil = data3.filter(x => x < userNumber);
      let filters = fil.join(', ');
      document.querySelector('#example-form3 .output3').innerHTML = filters
    }
    filter(data3);

    // Clear the form field so the user can try again
    inputField.value = ''
  })
})


// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function(){

  // Find the example form, and handle its submit event
  const exampleForm4 = document.querySelector('#example-form4')

 // Find the example form2, and handle its submit event
  exampleForm4.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data4 = [0, 1, 2, 3, 5, 8]

    const inputField = document.querySelector('#example-form4 .input4')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // use the find function to find the first number that is greater than the users imputed number

    const find = (x) =>{
     const findin = data4.find( x =>  x > userNumber);
     const finding = findin.toString()
     document.querySelector('#example-form4 .output4').innerHTML = finding
    }

    find(data4);
    

    

    // Clear the form field so the user can try again
    inputField.value = ''
  })
})

// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function(){

  // Find the example form, and handle its submit event
  const exampleForm5 = document.querySelector('#example-form5')

 // Find the example form2, and handle its submit event
  exampleForm5.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data5 = [0, 1, 2, 3, 5, 8]

    const inputField = document.querySelector('#example-form5 .input5')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    //Use the map function to multiple the users imputed number to each element in the array

  

    const map = (x) => {
      let answer = data5.map(x => x * userNumber);
      const maps = answer.join(', ');
      document.querySelector('#example-form5 .output5').innerHTML = maps
    }
    
    map(data5);

    inputField.value = ''
  })
})