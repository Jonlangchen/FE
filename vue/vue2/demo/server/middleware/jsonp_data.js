let express = require('express');
let app = express();

app.get('/get_data', (req, res) => {
    // let _d = [1, 2, 3];
    console.log(req.query.func);
    let callback = req.query.func;
    let _d = callback + "({'name':'张三'})"
    res.send( _d )
})

app.listen(3002, () => {
    console.log('3002端口启动中....')
})