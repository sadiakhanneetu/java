function calculateMoney(inputAmount){
    if(typeof inputAmount !== 'number' || inputAmount < 0 || !Number.isInteger(inputAmount)){
      return "Error: Ticket Amount must be a real number.";
    }
    
    const totalTicketPrice = inputAmount * 120;
    const totalStuffFee = 500 + ( 8 * 50 );
    const availableMoney = totalTicketPrice - totalStuffFee;
    return availableMoney;
  }
  
  const  inputAmount = 10;
  const result = calculateMoney(inputAmount);
  console.log(result);
  
  function checkName (name){
      const firstChar = name[0].toLowerCase();
      const lastChar = name[name.length - 1].toLowerCase();
  
  
      if (lastChar === 'a' || (firstChar !== 'a' && !['a', 'y', 'i', 'e', 'o', 'u', 'w'].includes(lastChar))) {
          return "Good Name";
      } else {
          return "Bad Name";
      }
  }
  
  console.log(checkName("Salman")); 
  console.log(checkName("Jafar")); 
  console.log(checkName("Tonoy")); 
  console.log(checkName("Utsho"));
  
  
  function deleteInvalids(arr) {
      
      if (!Array.isArray(arr)) {
          return "Error: it  is not an array";
      }
      
      
      return arr.filter(item => typeof item === 'number' && !isNaN(item));
  }
  
  
  const inputArray = [NaN, 1, 12, 0, -1, undefined];
  const result = deleteInvalids(inputArray);
  console.log(result); 
  
  function password(obj) {
      if (!obj.hasOwnProperty('name') || !obj.hasOwnProperty('birthYear') || !obj.hasOwnProperty('siteName')) {
          return "address wrong";
      }
      
      if (isNaN(obj.birthYear) || obj.birthYear.toString().length !== 4) {
          return "address wrong";
      }
  
      const websiteInitial = obj.siteName.charAt(0).toUpperCase();
      const username = obj.name.toLowerCase().replace(/\s/g, ''); 
      const birthYear = obj.birthYear;
      
      const generatedPassword = #${username}@${websiteInitial}${birthYear};
      return generatedPassword;
  }
  
  const inputObj = { name: "Kolimuddin", birthYear: 1999, siteName: "Google" };
  console.log(password(inputObj));
  
  function monthlySavings(payments, livingCost) {
      if (!Array.isArray(payments) || typeof livingCost !== 'number') {
          return "not right";
      }
  
      let totalIncome = payments.reduce((acc, payment) => {
          if (payment >= 3000) {
              acc += payment - (0.2 * payment);
          } else {
              acc += payment;
          }
          return acc;
      }, 0) - livingCost;
  
      if (totalIncome <= 0) {
          return "earn more";
      } else {
          return totalIncome;
      }
  }
  
  console.log(monthlySavings([4000, 3500, 2800, 3000], 2000));
  console.log(monthlySavings([2500, 2200, 2700], "2000"));