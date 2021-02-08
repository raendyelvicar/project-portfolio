import React from 'react'
import CardPartition from './Card Partition'

const Card = (props) => {
    const skills = [
        {skill:'Hypertext Markup Language (HTML)', desc:'Jago Banget', percentage:'80%'},
        {skill:'Cascade Style Sheet (CSS)', desc:'Jago Bingits', percentage:'90%'},
        {skill:'Javascript', desc:'B aja', percentage:'60%'},
    ];
    
    const content = skills.map((item) => 
        <CardPartition
            skill={item.skill}
            desc={item.desc}
            percentage={item.percentage}
        />
    );

    return (
        <>
            {content}
        </>
    )
}

export default Card
