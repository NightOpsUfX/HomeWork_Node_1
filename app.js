const fs = require('fs');
const path = require('path');

function sortFiles  (folderName) {
    const boysFolder = path.join(__dirname, 'boys');
    const girlsFolder = path.join(__dirname, 'girls');
    let sortableFolder = path.join(__dirname, folderName)

    fs.readdir(sortableFolder, (err, files) => {
        if(err) {
            console.log(err);
            return
        }

        files.forEach(file => {
            let pathToSortableFile = path.join(sortableFolder, file);
            fs.readFile(pathToSortableFile, (error, data) => {
                if(error) {
                    console.log(error);
                    return
                }

                let fileValue = JSON.parse(data);
                if(folderName === 'boys' && fileValue.gender === 'female') {
                    let newFileDestination = path.join(girlsFolder, file);
                    fs.rename(pathToSortableFile, newFileDestination, err => {
                        console.log(err);
                    })
                }

                else if(folderName === 'girls' && fileValue.gender === 'male') {
                    let newFileDestination = path.join(boysFolder, file);
                    fs.rename(pathToSortableFile, newFileDestination, err => {
                        console.log(err);
                    })
                }
            })
        })
    })
}
// enter 'boys' or 'girls' in the function parameters to sort the corresponding folder
sortFiles('girls')













