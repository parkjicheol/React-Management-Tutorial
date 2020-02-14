import React from 'react';
import logo from './logo.svg';
import Customer from './components/Customer';
import './App.css';

const customers = [{
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
}]

class App extends React.Component {

    render() {
        return (
            <div>
                {
                    customers.map(c => {
                        return (
                            <Customer 
                                id={c.id}
                                image={c.image}
                                name={c.name}
                                birthday={c.birthday}
                                gender={c.gender}
                                job={c.job}
                            />
                        );
                    })
                }
            </div>
        );
    }

}

export default App;
