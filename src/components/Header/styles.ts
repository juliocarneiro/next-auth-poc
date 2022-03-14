import { FONTS } from 'config/fonts'
import styled from 'styled-components'
import bg from 'assets/img/bg.png'

export const Menu = styled.nav`
  @media only screen and (max-width: 768px) {
    display: none;
  }
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  li:not(:last-child) {
    margin-right: 20px;
  }
  li {
    font-family: ${FONTS.philosopher};
    padding: 10px 25px;
    position: relative;
    p {
      font-family: ${FONTS.philosopher};
      font-size: 14px;
      margin: 0;
    }
    > div {
      position: absolute;
      top: 40px;
      left: 0;
      background: rgb(154, 21, 21);
      padding: 20px;
      border-radius: 3px;
      z-index: 1;
      input {
        margin: 0;
        padding: 0;
        width: 100%;
        margin-bottom: 10px;
        padding: 10px;
        resize: none;
        border: 0;
        border-radius: 3px;
        color: black;
      }
    }
  }
`

export const Wrapper = styled.header`
  height: 100vh;
  padding: 20px 0;
  background: url(${bg.src}) center center;
  background-size: cover;
  @media only screen and (min-width: 768px) {
    .row {
      display: flex;
      align-items: center;
    }
  }
  h2 {
    font-family: ${FONTS.cinzel};
    margin: 0;
    font-size: 54px;
  }
  p {
    margin: 10px 0 0 0;
    font-family: ${FONTS.cinzel};
    font-size: 22px;
  }
`

export default Wrapper
