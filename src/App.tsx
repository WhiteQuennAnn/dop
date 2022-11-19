import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "./components/Button";


type getPropsType = {

    "userId": number
    "id": number
    "title": string
    "body": string
}

function App() {
    const [get, setGet] = useState<Array<getPropsType>>([])

    const getRequestHandler = () => {
        setGet([])
    }
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setGet(json))
    }, [])
    return (
        <div className="App">
            <Button callBack={getRequestHandler} nickName={'CleanPage'}/>

            <p></p>
            <ul>
                {get.map((el) => {
                        return (

                            <li>
                                <span>{el.id} - </span>
                                <span>{el.userId} - </span>
                                <span>{el.title}</span>
                                <span>{el.body}</span>
                            </li>
                        )
                    }
                )}
            </ul>
        </div>
    );
}

// userId: 1, id: 1, title: 'quidem molestiae enim'
export default App;
