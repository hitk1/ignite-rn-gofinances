import React, { useState } from 'react'
import { Input } from '../../components/Form/Input'
import { Button } from '../../components/Form/Button'
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton'
import { CategorySelect } from '../../components/Form/CategorySelect'

import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionTypes,
} from './styles'

export const Register = () => {

    const [transactionType, setTransactionType] = useState('')

    const handleSelectTransactionType = (type: 'up' | 'down') => {
        setTransactionType(type)
    }

    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Fields>
                    <Input
                        placeholder="Nome"
                    />

                    <Input
                        placeholder="Valor"
                    />
                    <TransactionTypes>
                        <TransactionTypeButton
                            type="up"
                            title="Income"
                            onPress={() => handleSelectTransactionType('up')}
                            isActive={transactionType === 'up'}
                        />

                        <TransactionTypeButton
                            type="down"
                            title="Outcome"
                            onPress={() => handleSelectTransactionType('down')}
                            isActive={transactionType === 'down'}
                        />
                    </TransactionTypes>
                    <CategorySelect title="Categoria" />
                </Fields>

                <Button title="Enviar" />
            </Form>
        </Container>
    )
}