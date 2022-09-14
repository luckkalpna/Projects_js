
// Hour
// If hour is between 6am to 12pm: Good Morning!
// If hour is between 12p, to 6pm: Good Afternoon!
// Otherwise: Good Evening!

/*
let hour = 12;

If (hour >= 6 && hour < 12)
    console.log('Good Morning');

    else if (hour >= 12 && hour < 18)
    console.log('Good Afternoon');
    
    else
    console.log('Good Evening');
    */

    // Switch Case

    let role = 'adress'; // It is depend on (role)

    switch (role) {
        case 'name':
        console.log('My self Anjana');
        break;
        
        case 'Class':
        console.log('I am read in 12th standard');
        break;

        case 'age':
        console.log('I am 17 year old');
        break;

        default:
        console.log('Not defined');
    }

    // ########### For loop ############
    /*
    for (let i = 0; i <= 6; i++){
        if(i % 3 !== 0)
        console.log("Hello World!", i);
    }
    */

    // ########### While loop ###########
    /*
    let i = 1;
    while(i <= 6){
        console.log('Hello World!', i);
        i++;
    }
    */

    // ########## do-while loop ##########
    /*
    let i = 10;
    do{
        if('i % 0') console.log('Hello World', i);
        i++;
    }while (i <= 5);
    */

    // ########### Infinity loop #########
    /*
    let i = 0;
    while(i < 5){
        console.log(i);
        // i++;
    }
    while(true){

    }

    let x = 0;
    do{
        x++;
    }while(i < 5);

    for(i = 0; i < 10;)
    */

    // ########### for-in loop ##############
    /*
    const person ={
        name: 'Ajay',
        age: 25,
    };
    
    for (let key in person){
        console.log(key, person[key]);
    }
    */

    // ########### for-of loop #############
    /*
    const colors = ['red', 'blue', 'black']
    
    for(let color of colors ){
        console.log(color);
    }
    */

    // ############ Break and Continue #############

    let i = 0;
    while(i <= 10){
        if(i === 5) break;
        if(i % 2){
            i++;
            continue;
        }
        console.log(i);
    }