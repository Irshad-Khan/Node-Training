const fs = require('fs')
if (!fs.existsSync('views')) {
    fs.mkdir('views', (err) => {
        if (err) return err;

        fs.writeFile('views/new.html', 'new file data', (err) => {
            if (err) return err;

            console.log('file created');
        });
    });
}