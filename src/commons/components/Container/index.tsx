import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme: { colors, borders, sizes } }) => css`
    background-color: ${colors.primary};
    border-radius: 0 0 ${borders.lg} ${borders.lg};
    padding: ${sizes.normal};
  `}
`
