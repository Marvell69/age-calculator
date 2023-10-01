// Get references to HTML elements
const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const calculateButton = document.getElementById('calculate');
const resultElement = document.getElementById('result');

// Event listener for the Calculate button
calculateButton.addEventListener('click', calculateAge);

function calculateAge() {
    // Get user inputs
    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);

    // Check for valid inputs
    if (isNaN(day) || isNaN(month) || isNaN(year) || day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > new Date().getFullYear()) {
        resultElement.innerHTML = "Invalid date. Please enter a valid date.";
    } else {
        const currentDate = new Date();
        const birthDate = new Date(year, month - 1, day);
        
        // Calculate age
        const ageInMilliseconds = currentDate - birthDate;
        const ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
        
        // Calculate remaining months and days
        const remainingMilliseconds = ageInMilliseconds - (ageInYears * 365.25 * 24 * 60 * 60 * 1000);
        const remainingMonths = Math.floor(remainingMilliseconds / (30.44 * 24 * 60 * 60 * 1000));
        const remainingDays = Math.floor((remainingMilliseconds % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
        
        // Display the result
        resultElement.innerHTML = `Your age is ${ageInYears} years, ${remainingMonths} months, and ${remainingDays} days.`;
    }
}

    

















// function calcAge() `{
// const dayinput = document.querySelector("#day");
// const monthinput = document.querySelector("#month");
// const yearinput = document.querySelector("#year");
// const resultinput = document.querySelector("#result");
// const resultyearinput = document.querySelector(".result-year");
// const resultmonthinput = document.querySelector(".result-month");
// const resultdayinput = document.querySelector(".result-day");

// const day = dayinput.value;
// const month = monthinput.value;
// const year = yearinput.value;
// const result = resultinput.value;

// Function to calculate the age
// function calcAge() {
    
//     const dayinput = document.getElementById('day').value;
//     const day = new Date(dayinput);
//     // const birthday = new Date(dobyear, dobmonth-1, dobdate);

//     const monthinput = document.getElementById('month').value;
//     const month = new month -= monthinput
//     const yearinput = document.getElementById('year').value;

//     if (isNaN(day)) {
//         // error1.style.displpay-'block'
//       document.getElementById('result').innerHTML = 'Please enter a valid information.';
//     } else {
      
//       const currentDate = new Date();
  
      
//       const ageInMilliseconds = currentDate - day;
//       const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
//       const ageInMonths = ageInYears * 12;
//       const ageInDays = ageInMilliseconds / (1000 * 60 * 60 * 24);
  
//       // Display the age
//       document.getElementById('result').innerHTML = `
//         Age: ${Math.floor(ageInYears)} years, ${Math.floor(ageInMonths)} months, ${Math.floor(ageInDays)} days
//       `;
//     }

//     if (isNaN(month)) {
        
//     }
//   }
  




// // date.max = new Date().toISOString().split('T')[0];

// // function calcAge() {
// //   var today = new Date();
// //   var birthDate = new Date(date.value);

// //   var years;
// //       if (today.getMonth() > birthDate.getMonth() || (today.getMonth() == birthDate.getMonth() && today.getDate() >= birthDate.getDate())) {
// //         years = today.getFullYear() - birthDate.getFullYear();
// //       }
// //       else {
// //         years = today.getFullYear() - birthDate.getFullYear() - 1;
// //       }

// //       var months;
// //       if (today.getDate() >= birthDate.getDate()) {
// //         months = today.getMonth() - birthDate.getMonth();
// //       }
// //       else if (today.getDate() < birthDate.getDate()) {
// //         months = today.getMonth() - birthDate.getMonth() - 1;
// //       }

// //       var days;
// //       var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// //       if (today.getDate() >= birthDate.getDate()) {
// //         days = today.getDate() - birthDate.getDate();
// //       } else {
// //         days = today.getDate() - birthDate.getDate() + monthDays[birthDate.getMonth()];
// //       }

// //       result.innerHTML = `<p class="birthdate">You were born on ${birthDate.toDateString()}.</p>`;
// //       result.innerHTML += `<p class="age">You are ${years} years, ${months} months and ${days} days old.</p>`;
// //       if (months == 0 && days == 0) {
// //         result.innerHTML += `<p class="wishing">Happy Birthday!🎂🎈🎈</p>`;
// //       }
    
// //     calculate.addEventListener('click', calcAge);
// //     document.addEventListener('keypress', (e) => {
// //         if (e.keyCode == 13) {
// //           calculate.click();
// //         }
// //       });
// //       date.focus();
// //   }