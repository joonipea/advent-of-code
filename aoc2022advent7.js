/* 
Advent of Code 2022: Day 7

Gist: Parse a set of commands to get the system file structure.
    Part 1:
    Find all of the directories with a total size of at most 100000. 
    What is the sum of the total sizes of those directories?

    Part 2:
    Find the smallest directory that, if deleted, would free up enough space on the filesystem to run an update. 
    What is the total size of that directory?

Full instructions: https://adventofcode.com/2022/day/7

*/

let input = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`

// add a count to values to make them unique (for duplicate folder names)
Object.defineProperties(Array.prototype, {
    count: {
        value: function(value) {
            return this.filter(x => x==value).length;
        }
    }
});

let inputArray = input.split("\n")

let systemSchema = {
    folders:{
    },
    files: {
        file: {
            fileName: '',
            fileSize: 0,
        },
    },
}



let fileSizes = []
let folderList = []
let smallSum = 0
let longFolderlist = []
let getFoldersArray = []

// Parse the files and folders from string
const getFileFolders = (str) => {
    let regexp = /[a-z]+\n\$ ls/g;
    let matches = str.match(regexp)
    let folderNames = ["/"]
    for (let match of matches){
        const currentCount = folderList.count(`${match.split("\n")[0]}`)
        folderNames.push(match.split("\n")[0])
        longFolderlist.push(`${match.split("\n")[0]}-${currentCount}`)
        folderList.push(match.split("\n")[0])
    }

    return folderNames
}

// Get the contents of a folder
const getFolderContents = (str, folder, index) => {
        let regex1 = folder
        let regex2 = new RegExp("\\n\\$\\sls\\n((\\n|.)*?)(\\$|$)",'g')
        let regexstring = [regex1,regex2].join().replace("/g,/","").replace('/g',"").replace("/","").replace(",","").replace("\\/","")
        let regex = new RegExp(regexstring,'g')
        let matchArray = [...str.matchAll(regex)]
        getFoldersArray.push(folder)
        if (matchArray[index]){
            return matchArray[index][1]
        }else{
            return "empty"
        }
}

// Get the files in a folder
const getFiles = (folder) => {
        let fileFolders = folder.folderContents.split("\n")
        let files = []
        fileFolders.forEach((item) => {
            if (/\d+\s[a-z]/g.test(item)){
                files.push(item)
            }
        })
        files.forEach((file, index)=>{
            const fileSchema = {
                fileName: '',
                fileSize: 0,
            }
            folder.files[index] = Object.create(fileSchema)
            folder.files[index].fileName = file.split(" ")[1]
            folder.files[index].fileSize = parseInt(file.split(" ")[0])
        })
        return folder.files

}

// Get the folders in a folder
const getFolders = (folder) => {
    let fileFolders = folder.folderContents.split("\n")
    let folders = []
    for (let item of fileFolders){
        if (item.includes("dir")){
            folders.push(item)
        }
    }
    for (let file of folders){
        const index = folders.indexOf(file)
        const folderSchema = {
            folderName: '',
            files: {},
            folders: {},
            folderSize: 0
        }
        folder.folders[index] = Object.create(folderSchema)
        folder.folders[index].folderSize = 0
    
        let folderName = file.split(" ")[1]
    
        const nameCount = getFoldersArray.count(folderName)

        folder.folders[index].folderName = folderName
    
        let folderContents = getFolderContents(input, folderName, nameCount)
        folder.folders[index].folderContents = folderContents
    
        let filesNew = getFiles(folder.folders[index])
        folder.folders[index].files = filesNew
    
        const foldersNew = getFolders(folder.folders[index])
        folder.folders[index].folders = foldersNew

        folder.folders[index].folderSize = sumFileSize(filesNew) + sumFolderSize(foldersNew)
        fileSizes.push(folder.folders[index].folderSize)
    }
        
    return folder.folders
}

// Sum the file sizes
const sumFileSize = (files) => {
        let sum = 0
        if(Object.keys(files).length > 0){
            for (const [key, value] of Object.entries(files)){
                sum += value.fileSize
            }
        }
        return sum
}

// Sum the folder sizes
const sumFolderSize = (folders) => {
        let sum = 0
        if(Object.keys(folders).length > 0){
            for (const [key, value] of Object.entries(folders)){
                sum += value.folderSize
            }
        }
        return sum
}

// Map the system and out put the object starting at the root
const mapSystem = (str) => {
    let systemObj = Object.create(systemSchema)
    let folderNames = getFileFolders(str)
    for (const folderName of folderNames){
        let index = folderNames.indexOf(folderName)
        if ( index === 0 ){
            const folderSchema = {
                folderName: '',
                files: {},
                folders: {},
                folderSize: 0
            }
            let folderContents = getFolderContents(input, folderName, 0)
            systemObj.folders[index] = Object.create(folderSchema)
            systemObj.folders[index].folderName = folderName
            systemObj.folders[index].folderContents = folderContents
            
            let filesNew = getFiles(systemObj.folders[index])
            systemObj.folders[index].files = filesNew

            systemObj.folders[index].folderSize += sumFileSize(filesNew)

            let foldersNew = getFolders(systemObj.folders[index])
            systemObj.folders[index].folders = foldersNew

            let folderSize = sumFolderSize(foldersNew)
            systemObj.folders[index].folderSize += folderSize
        }  
    }
    return systemObj.folders[0]
}

const systemObj = mapSystem(input)

// Print the system object
console.log(systemObj)

// Print the the sum of the total sizes of directories under 100000
console.log({"Answer 1": fileSizes.filter(x=>x<100000).reduce((partialSum, a) => partialSum + a, 0)})


// Part 2
const diskSpace = 70000000
const updateReq = 30000000
const startingAvailable = diskSpace - systemObj.folderSize
const spaceNeeded = updateReq - startingAvailable

const smallestPart = fileSizes.filter(x=>x>=spaceNeeded).reduce((a,b)=>Math.min(a,b))

console.log({"Answer 2":smallestPart})

