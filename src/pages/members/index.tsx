import React from 'react'
import styled from 'styled-components'
import protectedRoutes from 'utils/protected-routes'
import { GetServerSidePropsContext } from 'next'

const MembersWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
  color: white;
`

interface MembersProps {
  session: {
    expires: string
    id: number
    jwt: string
    user: {
      name: string
      email: string
    }
  }
}

const Members = ({ session }: MembersProps) => {
  return (
    <MembersWrapper>
      <b style={{ fontSize: 42 }}>Olá, {session.user.name}...</b>
      <p className="text-center">
        em breve estaremos na ativa, fique de olho
        <br />
        em seu email e aguarde instrucoes!
      </p>
    </MembersWrapper>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  return {
    props: {
      session
    }
  }
}

export default Members
