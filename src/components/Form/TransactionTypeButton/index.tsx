import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import {
    Container,
    Icon,
    Title
} from './styles'

const icons = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle'
}

interface IProps extends TouchableOpacityProps {
    title: string
    type: 'up' | 'down'
    isActive: boolean
}

export const TransactionTypeButton = ({
    title,
    type,
    isActive,
    ...restProps
}: IProps) => {
    return (
        <Container
            isActive={isActive}
            type={type}
            {...restProps}
        >
            <Icon
                name={icons[type]}
                type={type}
            />
            <Title>{title}</Title>

        </Container>
    )
}