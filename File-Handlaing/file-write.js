const fs = require('fs');

fs.writeFile('data.html', `\n new file \n`, 'utf8', (err) => {
    if (err) return err;

    console.log('file created');
});

fs.appendFile('data.html', `\n new data \n`, 'utf8', (err) => {
    if (err) return err;

    console.log('file created');
});
