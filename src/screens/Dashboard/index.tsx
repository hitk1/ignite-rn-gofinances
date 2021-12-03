import React from 'react'
import { HighlightCard } from '../../components/HighlightCard'

import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighlightCardList,
} from './styles'

export const Dashboard = () => {
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
                            <UserName>Luis Paulo</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power" />
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
        </Container>
    )
}