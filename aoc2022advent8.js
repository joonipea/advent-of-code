let input = `30373
25512
65332
33549
35390`

const inputArray = input.split("\n")

let inputHash = []

inputArray.forEach((line,index)=>{
    inputHash[index] = line.split("")
})


let visibleTrees = []
let scenicScores = []

const checkAdjacent = (row,col,tree) =>{

    let colArray = []
    inputHash.forEach((line)=>{
        line.forEach((num,index)=>{
            if(index == col){
                colArray.push(num)
            }
        })
    })
    const colTop = colArray.slice(0,row + 1)
    const colBot = colArray.slice(row)
    const rowTop = inputHash[row].slice(0,col + 1)
    const rowBot = inputHash[row].slice(col)
    const colMax = colTop.reduce((a,b)=>Math.max(a,b))
    const rowMax = rowTop.reduce((a,b)=>Math.max(a,b))
    const col1Max = colBot.reduce((a,b)=>Math.max(a,b))
    const row1Max = rowBot.reduce((a,b)=>Math.max(a,b))

    function compareVals(max,split,tree){
        if (parseInt(max) === tree){
            let ints = 0
            for (let item of split){
                if (item == max){
                    ints++
                }
            }
            if (ints == 1){
                return true
            }
        } else if (parseInt(max)<tree){
            return true
        }
        return false
    }

    const free = compareVals(rowMax,rowTop,tree) || compareVals(row1Max,rowBot,tree) || compareVals(colMax,colTop,tree) || compareVals(col1Max,colBot,tree) ? true : false
    
    return free
}

const getScenicScore = (row,col,tree) => {
    let colArray = []
    inputHash.forEach((line)=>{
        line.forEach((num,index)=>{
            if(index == col){
                colArray.push(num)
            }
        })
    })
    const colTop = colArray.slice(0,row + 1).reverse().map(x=>parseInt(x))
    const colBot = colArray.slice(row).map(x=>parseInt(x))
    const rowTop = inputHash[row].slice(0,col + 1).reverse().map(x=>parseInt(x))
    const rowBot = inputHash[row].slice(col).map(x=>parseInt(x))

    function compareVals(split,num) {
        let ints = 0
        let mr = 0
        split.some((item,index)=>{
            if (index > 0){
                ints++
                return item >= num
            }
        })
        return ints
    }
    let s1 = compareVals(rowTop,tree)
    let s2 = compareVals(colTop,tree)
    let s3 = compareVals(colBot,tree)
    let s4 = compareVals(rowBot,tree)
    let score = s1 * s2 * s3 * s4

    return score

}

inputHash.forEach((line,index)=>{
    // push border
    if ( index == 0 ) {
        visibleTrees.push(line)
    }
    else if ( index == inputHash.length - 1 ) {
        visibleTrees.push(line)
    }else{
        line.forEach((tree,i)=>{
            if (i == 0 || i == line.length - 1) {
                visibleTrees.push(tree)
            }else if( checkAdjacent(index,i,parseInt(tree)) ) {

                scenicScores.push(getScenicScore(index,i,parseInt(tree)))
                visibleTrees.push(parseInt(tree))

            }
        })
    }
})
const answer1 = visibleTrees.flat().length
const answer2 = scenicScores.reduce((a,b)=>Math.max(a,b))
console.log({"answer 1": answer1})
console.log({"answer 2": answer2})