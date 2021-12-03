import 'styled-components'
import theme from './theme'

/**
 * Configurações para sobrescrita do default theme do styles component
 * para tipagens com typescript e auxilio no intellisense
 */
declare module 'styled-components' {
    type ThemeType = typeof theme

    export interface DefaultTheme extends ThemeType { }
}