import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import {
    Container,
    Title
} from './styles'

interface IProps extends TouchableOpacityProps {
    title: string
}

export const Button = ({ title, ...restProps }: IProps) => {
    return (
        <Container
            {...restProps}
        >
            <Title>{title}</Title>
        </Container>
    )
}