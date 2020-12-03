import React from 'react';

import Table from '../components/Table';
import Hero from '../components/Hero';


function Contactpage(props) {
    return (
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <Table />
        </div>
    );
}

export default Contactpage;