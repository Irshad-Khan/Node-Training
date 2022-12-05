const fs = require('fs');

// fs.readdir('./', (err, content) => {
//     if (err) return err;

//     console.log(content);
// });

fs.readFile('content.html', 'UTF8', (err, content) => {
    //  if (err) return err;

    console.log(content);
});