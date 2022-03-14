import styled from 'styled-components'

export const Wrapper = styled.div``

export const News = styled.div`
  margin-top: 50px;
  color: white;
  @media only screen and (max-width: 768px) {
    margin-bottom: 50px;
  }
  form {
    width: 80%;
    @media only screen and (max-width: 768px) {
      width: 100%;
    }
  }
  input {
    width: 70%;
    outline: none;
    height: 57px;
    background: #ffffff;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    padding: 17px 23px;
    border: 0;
    letter-spacing: 0px;
    color: #838383;
  }
  > div > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0;
  }
  > div > div form:last-child {
    display: flex;
    button {
      background: #9a1515;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
      min-width: 30%;
      border: 0;
      color: white;
      font-weight: bold;
      text-transform: uppercase;
      cursor: pointer;
      @media only screen and (max-width: 768px) {
        min-width: 30%;
      }
    }
  }
`
