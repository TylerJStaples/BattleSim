const inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "input",
        message: "What is the name of team 1?",
        name: "team1"
    },
    {
        type: "input",
        message: "What is the name of team 2?",
        name: "team2",
    }
]).then(function(response){
    inquirer.prompt([
        {
            type: "input",
            message: "How many Infantry does " + response.team1 + " have?",
            name: "team1infantry"
        },
        {
            type: "input",
            message: "What is the quality of " + response.team1 + "'s Infantry?",
            name: "team1infantryquality"
        },
        {
            type: "input",
            message: "How many Archers does " + response.team1 + " have?",
            name: "team1archer"
        },
        {
            type: "input",
            message: "What is the quality of " + response.team1 + "'s Archer?",
            name: "team1archerquality"
        },
        {
            type: "input",
            message: "How many Mages does " + response.team1 + " have?",
            name: "team1mage"
        },
        {
            type: "input",
            message: "What is the quality of " + response.team1 + "'s Mage?",
            name: "team1magequality"
        },
        {
            type: "input",
            message: "How many Calvary does " + response.team1 + " have?",
            name: "team1calvary"
        },
        {
            type: "input",
            message: "What is the quality of " + response.team1 + "'s Calvary?",
            name: "team1calvaryquality"
        },

        //end of team1
        
        {
            type: "input",
            message: "How many Infantry does " + response.team2 + " have?",
            name: "team2infantry"
        },
        {
            type: "input",
            message: "What is the quality of " + response.team2 + "'s Infantry?",
            name: "team2infantryquality"
        },
        {
            type: "input",
            message: "How many Archers does " + response.team2 + " have?",
            name: "team2archer"
        },
        {
            type: "input",
            message: "What is the quality of " + response.team2 + "'s Archer?",
            name: "team2archerquality"
        },
        {
            type: "input",
            message: "How many Mages does " + response.team2 + " have?",
            name: "team2mage"
        },
        {
            type: "input",
            message: "What is the quality of " + response.team2 + "'s Mage?",
            name: "team2magequality"
        },
        {
            type: "input",
            message: "How many Calvary does " + response.team2 + " have?",
            name: "team2calvary"
        },
        {
            type: "input",
            message: "What is the quality of " + response.team2 + "'s Calvary?",
            name: "team2calvaryquality"
        },

        //end of team2
    ]).then(function(numbers){
        let t1infantry = numbers.team1infantry * numbers.team1infantryquality;
        let t1archer = numbers.team1archer * numbers.team1archerquality;
        let t1mage = numbers.team1mage * numbers.team1magequality;
        let t1calvary = numbers.team1calvary * numbers.team1calvaryquality;
        let t1 = t1infantry + t1archer + t1mage + t1calvary;
        console.log("----------");
        console.log(response.team1 + " has " + t1 + " points.");
        let t2infantry = numbers.team2infantry * numbers.team2infantryquality;
        let t2archer = numbers.team2archer * numbers.team2archerquality;
        let t2mage = numbers.team2mage * numbers.team2magequality;
        let t2calvary = numbers.team2calvary * numbers.team2calvaryquality;
        let t2 = t2infantry + t2archer + t2mage + t2calvary;
        console.log(response.team2 + " has " + t2 + " points.");

        inquirer.prompt([
            {
                type: "list",
                message: "Which team(s) are attacking?",
                name: "attack",
                choices: [response.team1, response.team2, "Both"],
            }
        ]).then(function(attack){
            if(attack.attack = response.team1){
                t2 = t2 + (t2 * .1);
                console.log(response.team1 + " is attacking, and therefor " + response.team2 + " will be given a small advantage.");
                console.log("----------")
            }
            else if(attack.attack = response.team2){
                t1 = t1 + (t1 * .1);
                console.log(response.team2 + " is attacking, and therefor " + response.team1 + " will be given a small advantage.");
                console.log("----------");
            }
            else if (attack.attack = "Both"){
                console.log("The two teams meet and no advantage is given to either team.");
                console.log("----------");
            }
            else {
                console.log("Something went wrong :(");
            }

            console.log(response.team1 + " now has " + t1 + " points.");
            console.log(response.team2 + " now has " + t2 + " points.");
        })
    })
});