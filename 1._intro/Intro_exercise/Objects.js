// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

var myObj = {"message": "Hello, earthling! I bring peace."};

var value = myObj.message; // myObj["message"];
console.log(value);

// Log the message 

// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 

var obj = {"firstname": "Rasmus",
           "age": 100 
        };

console.log(obj);

// --------------------------------------
// Exercise 3 - Add a property 

var stackOverflow = {"isAllowed": true}; // stackOverflow.isAllowed = true;


// make a rule called isAllowed and let the value be true

// --------------------------------------
// Exercise 4 - Remove a property 

var thisSong = {"description": "The best song in the world."}

thisSong.description = "test";

console.log(thisSong);


delete thisSong; // delete thisSong.description // thisSong["about"] = "Just a tribute";

thisSong = {"about": "Just a tribute"}

console.log(thisSong);

// remove the property "description" and add a property called "about" that should say "Just a tribute." 

// --------------------------------------