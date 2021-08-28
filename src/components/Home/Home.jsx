import React from 'react';
import Cards from '../Cards/Cards';
import Form from '../Form/Form';

const Home = ()=> {

    return (
        <div>
            <h1 class="blockquote text-center">Appointments App</h1>
            <div class="container">
                <div class="row">
                    <div class="col">
                    <Form />
                    </div>
                    <div class="col">
                    <Cards />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home;