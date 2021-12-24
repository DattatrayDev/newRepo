console.log("Assignment 3")

        // third assignment 1st task
        //refractor function in one-line

        const printName=name=>"Hi " +name;
        console.log(printName("Dattatray"));

        //third assignment 2nd task
        //rewrite the code using template literal

        const printBill=(name, bill)=>
        {
            return `hi ${name}, please pay: ${bill}`;
        }
        console.log(printBill("Dattatray", 500));


        //third assignment 3rd task
        //modify the code

        const person = {
            name: "Noam Chomsky",
            age: 92
        }
        let {name , age}=person;

        console.log(name);
        console.log(age);