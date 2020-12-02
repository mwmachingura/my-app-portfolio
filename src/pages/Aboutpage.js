import React from 'react';
import Hero from '../components/Hero';


import Content from '../components/Content';

function Aboutpage(props) {
    return (
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <Content>
                <p>During my internship year, I worked in both technical and application support as a first level officer, handling tickets ranging from 20
                to a 100, delegating which I can handle and which should be escalated. I worked in a team of 50 individuals,
                collaborating with them and the vendors that provided the systems that were in use in the organization, helping
                my co-workers and the support team of vendors (in different countries and time zones) to achieve maintenance
                and implementation of software and hardware.</p>
                <p>I also worked on new branches of the business being opened and
                relocations, managing the IT infrastructure needs. I was part of monitoring the systems that were crucial for
                business, with remote solutions for monitoring being implemented, collaborating with ISPs to create VPNs and
                provide connectivity where needed. Working in a financial institution has also taught me how to handle working
                irregular hours like from midnight to mid-morning, or from early afternoon to the early hours of the morning.</p>
                <p>Within your organization’s ranks, I know that I will provide all these attributes and more, and with my experience
                in application and technical support, I can help streamline the workflow that can be automated or simplified,
                increasing the efficiency of the team how reliable some processes can be.</p>
            </Content>
        </div>
    );
}

export default Aboutpage;