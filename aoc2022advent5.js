let crateStack = `[Q] [J]                         [H]
[G] [S] [Q]     [Z]             [P]
[P] [F] [M]     [F]     [F]     [S]
[R] [R] [P] [F] [V]     [D]     [L]
[L] [W] [W] [D] [W] [S] [V]     [G]
[C] [H] [H] [T] [D] [L] [M] [B] [B]
[T] [Q] [B] [S] [L] [C] [B] [J] [N]
[F] [N] [F] [V] [Q] [Z] [Z] [T] [Q]`;

 let instructions = `move 1 from 8 to 1
 move 1 from 6 to 1
 move 3 from 7 to 4
 move 3 from 2 to 9
 move 11 from 9 to 3
 move 1 from 6 to 9
 move 15 from 3 to 9
 move 5 from 2 to 3
 move 3 from 7 to 5
 move 6 from 9 to 3
 move 6 from 1 to 6
 move 2 from 3 to 7
 move 5 from 4 to 5
 move 7 from 9 to 4
 move 2 from 9 to 5
 move 10 from 4 to 2
 move 6 from 5 to 4
 move 2 from 7 to 6
 move 10 from 2 to 3
 move 21 from 3 to 5
 move 1 from 3 to 6
 move 3 from 6 to 9
 move 1 from 8 to 9
 move 5 from 4 to 5
 move 4 from 9 to 3
 move 17 from 5 to 1
 move 1 from 6 to 2
 move 16 from 5 to 1
 move 3 from 3 to 6
 move 6 from 6 to 4
 move 1 from 2 to 4
 move 4 from 1 to 2
 move 2 from 6 to 2
 move 28 from 1 to 3
 move 1 from 9 to 7
 move 1 from 8 to 7
 move 1 from 5 to 4
 move 1 from 2 to 6
 move 1 from 3 to 1
 move 3 from 2 to 5
 move 1 from 6 to 3
 move 4 from 4 to 7
 move 5 from 5 to 2
 move 1 from 5 to 6
 move 6 from 1 to 3
 move 1 from 6 to 2
 move 26 from 3 to 6
 move 2 from 7 to 9
 move 4 from 7 to 3
 move 19 from 6 to 3
 move 6 from 2 to 4
 move 5 from 3 to 2
 move 1 from 9 to 7
 move 26 from 3 to 8
 move 6 from 4 to 3
 move 1 from 3 to 8
 move 1 from 6 to 7
 move 6 from 3 to 6
 move 6 from 6 to 4
 move 1 from 9 to 2
 move 2 from 4 to 9
 move 22 from 8 to 2
 move 2 from 6 to 5
 move 1 from 9 to 1
 move 1 from 6 to 5
 move 1 from 7 to 5
 move 3 from 6 to 7
 move 2 from 6 to 1
 move 1 from 1 to 5
 move 3 from 5 to 9
 move 4 from 8 to 4
 move 2 from 1 to 4
 move 18 from 2 to 1
 move 2 from 7 to 8
 move 3 from 9 to 5
 move 8 from 1 to 9
 move 5 from 9 to 3
 move 1 from 9 to 8
 move 2 from 9 to 4
 move 2 from 7 to 8
 move 5 from 5 to 7
 move 1 from 9 to 3
 move 4 from 8 to 4
 move 1 from 7 to 8
 move 4 from 4 to 3
 move 2 from 8 to 3
 move 1 from 8 to 9
 move 2 from 1 to 8
 move 3 from 4 to 5
 move 1 from 8 to 4
 move 1 from 9 to 3
 move 1 from 8 to 5
 move 8 from 1 to 8
 move 11 from 2 to 9
 move 12 from 3 to 5
 move 1 from 3 to 9
 move 1 from 8 to 5
 move 11 from 9 to 3
 move 4 from 5 to 9
 move 3 from 8 to 7
 move 3 from 7 to 8
 move 1 from 5 to 8
 move 7 from 4 to 3
 move 1 from 4 to 5
 move 1 from 2 to 8
 move 3 from 7 to 6
 move 3 from 4 to 8
 move 1 from 7 to 9
 move 2 from 4 to 7
 move 5 from 8 to 1
 move 3 from 6 to 5
 move 2 from 4 to 2
 move 1 from 9 to 4
 move 1 from 8 to 6
 move 1 from 2 to 9
 move 1 from 8 to 5
 move 3 from 8 to 4
 move 3 from 4 to 2
 move 4 from 3 to 9
 move 17 from 5 to 9
 move 9 from 9 to 6
 move 1 from 9 to 3
 move 5 from 6 to 3
 move 3 from 6 to 3
 move 8 from 9 to 5
 move 2 from 8 to 5
 move 1 from 4 to 8
 move 1 from 5 to 3
 move 1 from 8 to 5
 move 3 from 2 to 6
 move 3 from 1 to 4
 move 7 from 5 to 1
 move 1 from 2 to 6
 move 13 from 3 to 6
 move 2 from 7 to 8
 move 13 from 6 to 5
 move 3 from 5 to 7
 move 6 from 5 to 6
 move 1 from 7 to 6
 move 2 from 7 to 3
 move 1 from 6 to 8
 move 13 from 3 to 5
 move 9 from 5 to 9
 move 7 from 5 to 7
 move 17 from 9 to 2
 move 3 from 4 to 7
 move 9 from 2 to 9
 move 10 from 9 to 3
 move 8 from 7 to 8
 move 2 from 5 to 3
 move 4 from 2 to 6
 move 11 from 3 to 9
 move 9 from 6 to 5
 move 5 from 9 to 8
 move 1 from 3 to 1
 move 3 from 9 to 1
 move 2 from 5 to 2
 move 1 from 7 to 9
 move 2 from 9 to 4
 move 2 from 9 to 8
 move 13 from 1 to 8
 move 3 from 8 to 5
 move 27 from 8 to 1
 move 10 from 5 to 9
 move 1 from 7 to 2
 move 2 from 4 to 3
 move 10 from 9 to 6
 move 1 from 8 to 7
 move 15 from 1 to 9
 move 13 from 9 to 5
 move 15 from 5 to 7
 move 5 from 1 to 3
 move 8 from 7 to 1
 move 7 from 7 to 1
 move 16 from 1 to 8
 move 4 from 3 to 9
 move 4 from 1 to 7
 move 4 from 9 to 6
 move 5 from 2 to 7
 move 15 from 8 to 6
 move 1 from 9 to 1
 move 3 from 3 to 4
 move 1 from 9 to 7
 move 1 from 2 to 7
 move 1 from 2 to 7
 move 1 from 8 to 1
 move 3 from 4 to 8
 move 3 from 8 to 1
 move 8 from 6 to 8
 move 7 from 1 to 4
 move 11 from 6 to 8
 move 14 from 6 to 5
 move 13 from 8 to 7
 move 4 from 7 to 5
 move 15 from 7 to 4
 move 6 from 5 to 4
 move 2 from 5 to 9
 move 1 from 5 to 2
 move 3 from 8 to 5
 move 19 from 4 to 7
 move 10 from 5 to 8
 move 2 from 6 to 8
 move 1 from 4 to 8
 move 2 from 7 to 9
 move 9 from 7 to 4
 move 6 from 4 to 6
 move 11 from 4 to 8
 move 2 from 5 to 4
 move 5 from 6 to 4
 move 1 from 6 to 7
 move 3 from 9 to 5
 move 3 from 8 to 5
 move 3 from 7 to 6
 move 11 from 8 to 7
 move 1 from 9 to 5
 move 1 from 6 to 8
 move 1 from 2 to 1
 move 5 from 4 to 9
 move 2 from 4 to 1
 move 2 from 1 to 4
 move 1 from 1 to 9
 move 4 from 5 to 1
 move 1 from 4 to 6
 move 17 from 7 to 5
 move 9 from 8 to 7
 move 6 from 9 to 7
 move 3 from 1 to 9
 move 12 from 7 to 9
 move 12 from 9 to 5
 move 5 from 7 to 9
 move 17 from 5 to 3
 move 7 from 3 to 1
 move 5 from 1 to 5
 move 5 from 9 to 2
 move 4 from 3 to 5
 move 1 from 4 to 8
 move 5 from 2 to 1
 move 22 from 5 to 9
 move 3 from 7 to 6
 move 6 from 6 to 9
 move 2 from 5 to 4
 move 1 from 6 to 3
 move 2 from 4 to 1
 move 3 from 8 to 2
 move 1 from 3 to 4
 move 24 from 9 to 1
 move 4 from 3 to 9
 move 2 from 2 to 9
 move 2 from 3 to 1
 move 1 from 8 to 6
 move 1 from 6 to 9
 move 1 from 8 to 9
 move 2 from 7 to 4
 move 1 from 8 to 3
 move 1 from 4 to 7
 move 3 from 9 to 8
 move 1 from 2 to 1
 move 9 from 9 to 3
 move 1 from 8 to 7
 move 1 from 4 to 3
 move 2 from 9 to 7
 move 1 from 9 to 3
 move 2 from 8 to 4
 move 12 from 3 to 8
 move 2 from 1 to 7
 move 1 from 4 to 3
 move 30 from 1 to 5
 move 6 from 5 to 7
 move 12 from 7 to 2
 move 1 from 3 to 4
 move 2 from 1 to 3
 move 1 from 4 to 9
 move 10 from 5 to 7
 move 10 from 2 to 6
 move 8 from 8 to 3
 move 3 from 1 to 3
 move 5 from 6 to 3
 move 2 from 8 to 5
 move 1 from 9 to 2
 move 2 from 8 to 6
 move 4 from 7 to 2
 move 3 from 2 to 7
 move 2 from 7 to 5
 move 1 from 4 to 9
 move 11 from 3 to 1
 move 7 from 6 to 9
 move 3 from 2 to 3
 move 10 from 1 to 7
 move 14 from 7 to 5
 move 3 from 7 to 6
 move 5 from 9 to 7
 move 29 from 5 to 7
 move 6 from 3 to 9
 move 2 from 9 to 7
 move 15 from 7 to 5
 move 11 from 5 to 6
 move 5 from 9 to 5
 move 10 from 5 to 8
 move 1 from 2 to 4
 move 1 from 8 to 2
 move 2 from 4 to 3
 move 2 from 5 to 9
 move 8 from 8 to 9
 move 11 from 9 to 3
 move 1 from 1 to 8
 move 18 from 7 to 3
 move 1 from 9 to 3
 move 28 from 3 to 5
 move 12 from 6 to 7
 move 1 from 2 to 9
 move 15 from 7 to 2
 move 1 from 8 to 1
 move 10 from 2 to 9
 move 10 from 5 to 3
 move 2 from 2 to 3
 move 18 from 3 to 4
 move 6 from 9 to 4
 move 1 from 1 to 7
 move 1 from 6 to 4
 move 1 from 8 to 2
 move 1 from 9 to 4
 move 2 from 9 to 4
 move 19 from 4 to 3
 move 1 from 7 to 9
 move 1 from 9 to 7
 move 1 from 6 to 8
 move 3 from 2 to 8
 move 2 from 9 to 5
 move 15 from 3 to 1
 move 7 from 5 to 1
 move 3 from 4 to 9
 move 1 from 7 to 2
 move 3 from 3 to 1
 move 6 from 5 to 2
 move 3 from 3 to 9
 move 4 from 9 to 2
 move 5 from 5 to 3
 move 1 from 3 to 5
 move 3 from 5 to 7
 move 3 from 8 to 5
 move 1 from 7 to 5
 move 4 from 5 to 1
 move 4 from 4 to 2
 move 2 from 7 to 8
 move 12 from 1 to 6
 move 1 from 8 to 6
 move 6 from 2 to 3
 move 9 from 3 to 8
 move 1 from 3 to 4
 move 3 from 6 to 1
 move 2 from 9 to 2
 move 1 from 4 to 5
 move 2 from 8 to 3
 move 10 from 2 to 1
 move 2 from 4 to 7
 move 12 from 1 to 4
 move 1 from 5 to 1
 move 7 from 4 to 9
 move 2 from 3 to 2
 move 6 from 9 to 2
 move 1 from 9 to 1
 move 1 from 7 to 8
 move 5 from 6 to 7
 move 3 from 6 to 1
 move 6 from 2 to 3
 move 2 from 4 to 3
 move 1 from 6 to 8
 move 1 from 6 to 7
 move 8 from 3 to 9
 move 2 from 4 to 5
 move 3 from 2 to 4
 move 10 from 8 to 2
 move 22 from 1 to 9
 move 9 from 2 to 4
 move 1 from 1 to 3
 move 1 from 3 to 2
 move 3 from 2 to 4
 move 2 from 7 to 1
 move 14 from 4 to 2
 move 2 from 1 to 8
 move 2 from 4 to 5
 move 4 from 7 to 8
 move 24 from 9 to 6
 move 3 from 5 to 9
 move 1 from 9 to 8
 move 1 from 5 to 2
 move 1 from 6 to 7
 move 6 from 9 to 1
 move 1 from 7 to 3
 move 5 from 8 to 6
 move 9 from 6 to 3
 move 4 from 1 to 4
 move 2 from 1 to 2
 move 11 from 6 to 3
 move 13 from 3 to 2
 move 2 from 9 to 8
 move 8 from 3 to 8
 move 2 from 8 to 5
 move 1 from 7 to 5
 move 3 from 6 to 3
 move 11 from 8 to 5
 move 13 from 2 to 4
 move 10 from 5 to 2
 move 2 from 3 to 4
 move 2 from 5 to 7
 move 15 from 4 to 9
 move 2 from 7 to 4
 move 2 from 4 to 2
 move 2 from 4 to 9
 move 2 from 4 to 2
 move 1 from 3 to 8
 move 1 from 8 to 1
 move 1 from 1 to 2
 move 1 from 6 to 3
 move 7 from 2 to 4
 move 1 from 5 to 3
 move 7 from 9 to 1
 move 7 from 1 to 2
 move 4 from 6 to 9
 move 12 from 9 to 7
 move 6 from 7 to 5
 move 1 from 3 to 5
 move 7 from 4 to 7
 move 3 from 7 to 8
 move 3 from 8 to 6
 move 18 from 2 to 9
 move 7 from 2 to 3
 move 15 from 9 to 4
 move 3 from 3 to 9
 move 1 from 3 to 1
 move 3 from 5 to 4
 move 1 from 1 to 2
 move 1 from 9 to 2
 move 2 from 6 to 2
 move 5 from 7 to 6
 move 5 from 2 to 7
 move 3 from 3 to 4
 move 5 from 5 to 3
 move 6 from 7 to 4
 move 9 from 4 to 2
 move 18 from 4 to 9
 move 6 from 2 to 1
 move 1 from 1 to 9
 move 4 from 7 to 4
 move 7 from 2 to 4
 move 1 from 2 to 8
 move 1 from 4 to 2
 move 4 from 3 to 4
 move 16 from 9 to 5
 move 9 from 9 to 8
 move 1 from 9 to 7
 move 4 from 1 to 2
 move 2 from 5 to 4
 move 10 from 5 to 4
 move 4 from 2 to 1
 move 5 from 1 to 2
 move 1 from 8 to 5
 move 1 from 6 to 5
 move 4 from 8 to 5
 move 2 from 6 to 9
 move 3 from 6 to 2
 move 2 from 9 to 1
 move 1 from 7 to 6
 move 1 from 3 to 8
 move 9 from 5 to 9
 move 4 from 8 to 1
 move 2 from 8 to 2
 move 1 from 5 to 7
 move 9 from 9 to 8
 move 1 from 7 to 5
 move 9 from 8 to 2
 move 6 from 1 to 6
 move 6 from 2 to 6
 move 10 from 2 to 5
 move 5 from 2 to 1
 move 1 from 3 to 5
 move 8 from 5 to 4
 move 5 from 1 to 3
 move 10 from 6 to 8
 move 3 from 6 to 9
 move 4 from 3 to 1
 move 5 from 8 to 2
 move 4 from 5 to 9
 move 1 from 3 to 7
 move 1 from 7 to 3
 move 1 from 8 to 6
 move 1 from 6 to 1
 move 15 from 4 to 8
 move 5 from 9 to 2
 move 1 from 9 to 1
 move 1 from 1 to 3
 move 6 from 4 to 8
 move 12 from 8 to 7
 move 1 from 3 to 5
 move 3 from 1 to 9
 move 13 from 4 to 9
 move 5 from 7 to 2
 move 1 from 5 to 4
 move 8 from 9 to 5
 move 6 from 2 to 5
 move 2 from 5 to 6`



const splitCrates = (pile) => {
    let crate = {
        rowIndex: {
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: [],
            8: [],
            9: [],
        }
    }
    var crateObj = Object.create(crate)
    let rowsArray = []
    let rows = pile.split("\n").forEach(element => {
       rowsArray.push(element.replace(/(...)./g, "$1,"));
    });
    rows
    rowsArray.forEach((element)=>{
        element.split(",").forEach((char, index)=>{
            if (char !== "   "){
                crateObj.rowIndex[index + 1].push(char)
            }
        })
    })
    return crateObj;
}

var crateMap = splitCrates(crateStack)

console.log(crateMap)

const parseInstructions = (instructs) => {
    let instructionArray = instructs.split("\n");
    let mutCrateMap = splitCrates(crateStack)
    instructionArray.forEach((str) => {
        let instructionSet = str.match(/\d+/g).map(Number);
        let amount = instructionSet[0];
        let home = instructionSet[1];
        let dest = instructionSet[2];
        mutCrateMap.rowIndex[home].map((char, index)=>{
            if (index < amount){
                mutCrateMap.rowIndex[dest].unshift(char);
                delete mutCrateMap.rowIndex[home][index];
            }
        })
        mutCrateMap.rowIndex[home] = mutCrateMap.rowIndex[home].flat()
    })
    return mutCrateMap
}



const parseInstructionsTwo = (instructs) => {
    let instructionArray = instructs.split("\n");
    let mutCrateMap = splitCrates(crateStack)
    instructionArray.forEach((str) => {
        let instructionSet = str.match(/\d+/g).map(Number);
        let amount = instructionSet[0];
        let home = instructionSet[1];
        let dest = instructionSet[2];
        const chunks = mutCrateMap.rowIndex[home].reduce((resultArray, item, index) => {
            const chunkIndex = Math.floor(index/amount);
            if(!resultArray[chunkIndex]) {
                resultArray[chunkIndex] = [];
            }
            resultArray[chunkIndex].push(item);
            return resultArray;
        }, [])
        chunks.map((chunk, index) => {
            if (index === 0){
                mutCrateMap.rowIndex[home].splice(index, chunk.length);
                mutCrateMap.rowIndex[dest].unshift(chunk);
            }
        })
        mutCrateMap.rowIndex[home] = mutCrateMap.rowIndex[home].flat()
        mutCrateMap.rowIndex[dest] = mutCrateMap.rowIndex[dest].flat()
    })
    return mutCrateMap
}
console.log({"problem 1": parseInstructions(instructions)});

console.log({"problem 2": parseInstructionsTwo(instructions)});

