let express = require('express');

let app = express();

// if (process.env.NODE_ENV === 'test') {
//     require('dotenv').config();
// }
// else if (process.env.NODE_ENV === 'production') {
//     require('dotenv').config();
//     console.log('here')
// }

let config=require('dotenv').config()

console.log(process.env.port);
console.log(process.env.node_env);
app.listen(5711, async (err) => {
    if (!err) {
        console.log('server is running on ' + process.env.port);
    }
});