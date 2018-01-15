function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}



var starters = ["Eric", "Edward", "Edgar", "Ethan", "Elmer"];

var bench = ["Peter", "Paul", "Palmer"];

var empty = [];



function subPlayer(count) {

    // var subOut = starters.splice(getRandomIntInclusive(0, starters.length - 1), 1).toString();

    // var subIn = bench.splice(getRandomIntInclusive(0, bench.length - 1), 1).toString();

    // starters.splice(getRandomIntInclusive(0, starters.length -1), 0, subIn);
    // bench.splice(getRandomIntInclusive(0, bench.length -1), 0, subOut);

    if (count < 5) {
        var randomNumber = getRandomIntInclusive(0, starters.length - 1);

        empty.push(starters[randomNumber]);

        starters.splice(randomNumber, 1);

        var randBenchNumber = getRandomIntInclusive(0, bench.length - 1);

        empty.push(bench[randBenchNumber]);

        bench.splice(randBenchNumber, 1);


        bench.push(empty[0]);

        starters.push(empty[1]);

        empty = [];


        console.log("=================================================");
        console.log('=================================================');
        console.log()
        console.log("starters: ");
        console.log(starters);
        console.log();
        console.log("================================================");
        console.log("================================================");
        console.log("bench: ");
        console.log(bench);
        console.log();
        console.log("=================================================");
        console.log("=================================================");
        console.log("empty: ");
        console.log(empty);

        count++
        subPlayer(count);


    }

    else{
    	console.log("thats it!");
    }



    

    
}

// console.log(subIn);

subPlayer(1);