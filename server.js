const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
    res.send({
        message: 'Hello Express!'
    });
});

app.get('/api/customers', (req, res) => {

    res.send([
        {
            id: 1,
            image: 'https://placeimg.com/64/64/1',
            name: '홍길동1',
            birthday: '750819',
            gender: '남자',
            job: '회사원'
        }, {
            id: 2,
            image: 'https://placeimg.com/64/64/2',
            name: '홍길동2',
            birthday: '750819',
            gender: '남자',
            job: '프로그래머'
        }, {
            id: 3,
            image: 'https://placeimg.com/64/64/3',
            name: '홍길동3',
            birthday: '750819',
            gender: '남자',
            job: '웹디자인'
    }]);

});

app.listen(port, () => console.log(`Listening on port ${port}`));