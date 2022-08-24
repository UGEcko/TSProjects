// Im still working on this, and stuff may not work as they should YET.

import * as readline from 'node:readline';
import { stdin, stdout } from 'process';
var fs = require('fs');

function last() {rl.question("Anything else? y/n", function (a: string ) {
    let decide = a.toLowerCase
    if (a == 'y' || 'Y') {
    console.log("Unfortunately, I have no other options...")
    rl.close();
    } 
    else if (a == 'n' || 'N') {
    console.log("Goodbye!")
    rl.close();
    }
    else {
        console.log(`Please type Y or N. You typed ${a}.`)
        last()
    }
    
})
}

const rl = readline.createInterface({
    input: stdin,
    output: stdout
});

rl.question("What do you want this file to be called?", function (answer: string) {
    
    fs.appendFile(`${answer}.txt`, 'Empty.', function () {
      });
    
    rl.question(`What will the contents be of ${answer}.txt?`, function (ans: string) {
        fs.writeFile(`${answer}.txt`,`${ans}`, function () {
            console.log("Saved to file.")
        })
    
    last()
  })
});
