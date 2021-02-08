import React from 'react'
import {PartContainer} from './PartitionElements'
import {Paragraph, Subtitle, MidSubtitle} from '../../../GlobalVariables'


const CardPartition = ({skill, desc, percentage}) => {
    return (
        <PartContainer>
            <Subtitle dark>{skill}</Subtitle>
            <MidSubtitle>{desc}</MidSubtitle>
            <Paragraph>{percentage}</Paragraph>
        </PartContainer>
    )
}

export default CardPartition
