import FONTS from 'config/fonts'
import styled from 'styled-components'
import { IButtonProps } from './types'

export const Wrapper = styled.button<IButtonProps>`
  font-family: ${FONTS.cinzel};
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: normal;
  min-width: 212px;
  color: #fff;
  border-radius: 3px;
  box-shadow: inset 0 0 2px 0 rgb(255 255 255 / 25%);
  background-image: radial-gradient(circle at 0 0, #7c300f, #77240a);
  display: inline-block;
  border: none;
  cursor: pointer;
  padding: 12px 50px 13px;
  &:hover {
    background: #9a1515;
  }

  ${(props) =>
    props.fullWidth &&
    `
    width: 100%;
    display:block;
  `}
  ${(props) =>
    props.primary &&
    `

  `}
  ${(props) =>
    props.secondary &&
    `

  `}

  &:hover {
    ${(props) =>
      props.primary &&
      `

    `}
    ${(props) =>
      props.secondary &&
      `

    `}
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    display: block;
  }
`
export default Wrapper
