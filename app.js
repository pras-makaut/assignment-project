

const csv = require('csv-parser')
const fs = require('fs')
let Books = [];



fs.createReadStream('Books.csv')
  .pipe(csv([]))
  .on('data', (data) => {
      const result = {
          title : data._0,
          isbn : data._1,
          author : data._2,
          description : data._3
      }
      Books.push(result)
  })
.on('end', () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readline.question('inter input - ', no => {
        const expr = no;
        switch (no) {
            case '1':
                console.log(Books);
                break;
            case '2':
                Books.sort(function(a, b) {
                    var nameA = a.title; 
                    var nameB = b.title; 
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                });
                console.log(Books);
            case '3':
                const readline = require('readline').createInterface({
                    input: process.stdin,
                    output: process.stdout
                });
                readline.question('inter input - ', authoremail => {
                    var f=0;
                    let ans=[]
                    for(let i=0;i<Books.length;i++){
                        //console.log(Books[i].isbn)
                        if(Books[i].author === authoremail){
                            f=1;
                            ans.push(Books[i])
                        }
                    }
                    if(f===1){
                        console.table(ans)
                        readline.close();
                    }
                })

            case '4':
                const read = require('readline').createInterface({
                    input: process.stdin,
                    output: process.stdout
                });
                read.question('inter input - ', isbnno => {
                    var f=0;
                    for(let i=0;i<Books.length;i++){
                        //console.log(Books[i].isbn)
                        if(Books[i].isbn === isbnno){
                            f=1;
                            console.table("This Books is present ")
                            read.close();
                            break;
                        }
                    }
                    if(f===0){
                        console.table("This Books is not present ")
                        read.close();
                    }
                })
        }
        //readline.close();
    });
    
});


let Magzines = [];

fs.createReadStream('Magzines.csv')
  .pipe(csv([]))
  .on('data', (data) => {
      const result = {
          title : data._0,
          isbn : data._1,
          author : data._2,
          publish_date : data._3
      }
      Magzines.push(result)
    
  })
.on('end', () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readline.question('inter input - ', no => {
        const expr = no;
        switch (no) {
            case '1':
                console.log(Magzines);
                break;
            case '2':
                Magzines.sort(function(a, b) {
                    var nameA = a.title; 
                    var nameB = b.title; 
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                });
                console.log(Magzines);
            case '3':
                const readline = require('readline').createInterface({
                    input: process.stdin,
                    output: process.stdout
                });
                readline.question('inter input - ', authoremail => {
                    var f=0;
                    let ans=[]
                    for(let i=0;i<Magzines.length;i++){
                        //console.log(Magzines[i].isbn)
                        if(Magzines[i].author === authoremail){
                            f=1;
                            ans.push(Magzines[i])
                        }
                    }
                    if(f===1){
                        console.table(ans)
                        readline.close();
                    }
                })

            case '4':
                const read = require('readline').createInterface({
                    input: process.stdin,
                    output: process.stdout
                });
                read.question('inter input - ', isbnno => {
                    var f=0;
                    for(let i=0;i<Magzines.length;i++){
                        //console.log(Magzines[i].isbn)
                        if(Magzines[i].isbn === isbnno){
                            f=1;
                            console.table("This Magzines is present ")
                            read.close();
                            break;
                        }
                    }
                    if(f===0){
                        console.table("This Magzines is not present ")
                        read.close();
                    }
                })
        }
        //readline.close();
    });
    
    
});







