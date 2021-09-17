let matrix = []; // Մատրիցի ստեղծում
let rows = 100; // Տողերի քանակ
let columns = 100; // Սյուների քանակ

for (let y = 0; y < rows; y++) {
matrix[y] = []; // Մատրիցի նոր տողի ստեղծում
for (let x = 0; x < columns; x++) {
let a = Math.floor(Math.random()*100);
if (a >= 0 && a < 20) {
matrix[y][x] = 0; // Մատրիցի 20 տոկոսը կլինի 0
} 
if (a >= 20 && a < 40) {
matrix[y][x] = 1; // Մատրիցի 20 տոկոսը կլինի 1
} 
else if (a >= 40 && a < 50) {
matrix[y][x] = 2; // Մատրիցի 10 տոկոսը կլինի 2
} 
else if (a >= 50 && a < 70) {
matrix[y][x] = 3; // Մատրիցի 20 տոկոսը կլինի 3
} 
else if(a >= 70 && a < 90) {
matrix[y][x] = 4; // Մատրիցի 20 տոկոսը կլինի 4
} 
else if(a >= 90 && a < 100) {
matrix[y][x] = 5; // Մատրիցի 10 տոկոսը կլինի 5
} 
}
}
var side = 20;

let eatArr = [];
let grassArr = [];
let gishArr=[];
let kerparArr=[];
let kerparrArr=[];
function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


    //     let grass = new Grass(1,4);
    //  let emptyCell = grass.chooseCell(0);
    //  console.log(emptyCell)
    // for (let y = 0; y < matrix.length; ++y) {
    //     for (let x = 0; x < matrix.length; ++x) {
    //         if (matrix[y][x] == 1) {
    //             let gr = new Grass(x, y);
    //             grassArr.push(gr);
    //         }

    //     }


    // }

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var eatgrass = new Eatgrass(x, y);
                eatArr.push(eatgrass);
            } else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
            }
            else if (matrix[y][x] == 3) {
                var gish = new Gish(x, y);
                gishArr.push(gish);
        }
        else if (matrix[y][x] == 4) {
            var kerpar = new Kerpar(x, y);
            kerparArr.push(kerpar);
    }

    else if (matrix[y][x] == 5) {
            var kerparr = new Kerparr(x, y);
            kerparrArr.push(kerparr);
    }

    }




}
}


function draw() {

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("orange");
                rect(x * side, y * side, side, side);
            }
             else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
             else if (matrix[y][x] == 5) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
        }
        
    }
    for (let i in grassArr) {
            grassArr[i].mul();
        }
    for (var i in eatArr) {
        eatArr[i].eat();
    }
    for (var i in gishArr) {
        gishArr[i].eat();
    }
    for (var i in kerparArr) {
        kerparArr[i].eat();
    }
    for (var i in kerparrArr) {
        kerparrArr[i].eat();
    }
}


