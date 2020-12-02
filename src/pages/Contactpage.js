import React from 'react';
import Hero from '../components/Hero';

function Contactpage(props) {
    return (
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
        </div>
    );
}

export default Contactpage;