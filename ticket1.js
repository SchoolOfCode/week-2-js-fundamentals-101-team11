//80% said understanding what their spending budget in £ is worth in € ✅
//Conversation rate calculator ✅
//Create a Function that converts £ to €
//Want to take in Pounds and multiply by the conversion rate of Euro, We can google this(1.21)✅
//Pound * Conversion = Euros✅
//Return the conversion rate to be able to give to the customer
// function functionName(parameters){block of code} (syntax for us to remember)
//We need a prompt so the user can input the number of Euros they would like to convert
//We need to create and connect the html so a user can input 
//We need to test our product


//First verison, here we have checked the function works.
//function poundToEuros(){ //creates the function, names the function and puts the parameters of pounds in
   // let pounds = prompt("Just put pounds in and we will work out the conversion rate for you."); //allow user input
    //let euro = pounds * 1.21; //conversion rate calculator
    //return euro
//}
function poundToEuros(event){
    //Here we have created a variable called pounds that collects the users input from the html
   //with the id of "euroMachine".
   //.value instead of .html because .value collects input data
    let pounds = document.getElementById("euroMachine").value;
   //This is a variable called euro that multiplies what is inputted in the pounds variable and *1.21
        let euro = pounds * 1.21; 
        //this creates a visual alert for people to see the output
            alert(euro);
        }





