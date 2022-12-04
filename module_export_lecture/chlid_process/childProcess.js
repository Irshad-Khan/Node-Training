const execute = require('./childProcess').exec;

execute('ls', (err, stdout) => {
    if(err) {
        return err;
    }

    console.log(stdout);
});



