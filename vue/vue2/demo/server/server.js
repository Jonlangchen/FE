let express = require('express');
let app = express();

app.use('/public', express.static('public'));


app.listen(3000, () => {
    console.log('3000端口启动中....')
})