import React from 'react'
import { FlatList } from 'react-native'
import { categories } from '../../utils/categories'

import { Button } from '../../components/Form/Button'

import {
    Container,
    Header,
    Title,
    Category,
    Icon,
    Name,
    Separator,
    Footer
} from './styles'

interface Category {
    key: string
    name: string
}

interface IProps {
    category: Category
    setCategory: (category: Category) => void
    closeSelectCategory: () => void
}

export const CategorySelect = ({
    category,
    closeSelectCategory,
    setCategory
}: IProps) => {

    const handleCategorySelect = (item: Category) => {
        setCategory(item)
    }

    return (
        <Container>
            <Header>
                <Title>Categoria</Title>
            </Header>

            <FlatList
                data={categories}
                keyExtractor={(item) => item.key}
                style={{ flex: 1, width: '100%' }}
                renderItem={({ item }) => (
                    <Category
                        onPress={() => handleCategorySelect(item)}
                        isActive={category.key === item.key}
                    >
                        <Icon name={item.icon} />
                        <Name>{item.name}</Name>
                    </Category>
                )}
                ItemSeparatorComponent={() => <Separator />}
            />
            <Footer>
                <Button
                    title="Selecionar"
                    onPress={closeSelectCategory}
                />
            </Footer>
        </Container>
    )
}