import React from 'react'
import { FlatList } from 'react-native'
import { HighlightCard } from '../../components/HighlightCard'
import { TransactionCard, CardProps } from '../../components/TransactionCard'
import { useAuth } from '../../hooks/auth'

import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    LogoutButton,
    Icon,
    HighlightCardList,
    Transactions,
    Title,
    TransactionsList,
} from './styles'

export interface DataProps extends CardProps {
    id: string
}

export const Dashboard = () => {
    const { signOut, user } = useAuth()

    const handleSignOut = async () => {
        await signOut()
    }

    const transactions: DataProps[] = [
        {
            id: '1',
            type: 'positive',
            title: "Desenvolvimento de site",
            amount: "R$6.000,00",
            date: "04/12/2021",
            category: {
                name: 'Vendas',
                icon: 'dollar-sign'
            }
        },
        {
            id: '2',
            type: 'negative',
            title: "Desenvolvimento de site",
            amount: "R$6.000,00",
            date: "04/12/2021",
            category: {
                name: 'Alimentação',
                icon: 'coffee'
            }
        },
        {
            id: '3',
            type: 'positive',
            title: "Desenvolvimento de site",
            amount: "R$6.000,00",
            date: "04/12/2021",
            category: {
                name: 'Vendas',
                icon: 'dollar-sign'
            }
        },
        {
            id: '4',
            type: 'negative',
            title: "Desenvolvimento de site",
            amount: "R$6.000,00",
            date: "04/12/2021",
            category: {
                name: 'Casa',
                icon: 'shopping-bag'
            }
        }
    ]

    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo
                            source={{ uri: 'https://avatars.githubusercontent.com/u/35121576?v=4' }}
                        />
                        <User>
                            <UserGreeting>Olá</UserGreeting>
                            <UserName>{user.name}</UserName>
                        </User>
                    </UserInfo>
                    <LogoutButton
                        onPress={handleSignOut}
                    >
                        <Icon name="power" />
                    </LogoutButton>
                </UserWrapper>

            </Header>
            <HighlightCardList>
                <HighlightCard
                    type="up"
                    title="Entradas"
                    amount="R$ 10.000,00"
                    lastTransaction="Ultima transação dia 13 de abril"
                />
                <HighlightCard
                    type="down"
                    title="Saidas"
                    amount="R$ 1.000,00"
                    lastTransaction="Ultima transação dia 13 de abril"
                />
                <HighlightCard
                    type="total"
                    title="Total"
                    amount="R$ 9.000,00"
                    lastTransaction="Ultima transação dia 13 de abril"
                />
            </HighlightCardList>
            <Transactions>
                <Title>Listagem</Title>
                <TransactionsList
                    data={transactions}
                    keyExtractor={(item: any) => item.id}
                    renderItem={({ item }) => (
                        <TransactionCard data={item as any} />
                    )}
                />
            </Transactions>

        </Container>
    )
}