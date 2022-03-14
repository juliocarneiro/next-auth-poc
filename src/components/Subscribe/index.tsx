import * as S from './styles'
import { GraphQLClient, gql } from 'graphql-request'
import { RequestDocument } from 'graphql-request/dist/types'
import Swal from 'sweetalert2'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
interface SubscribeProps {
  buttonText: string
}

const Subscribe = ({ buttonText }: SubscribeProps) => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const API_GRAPHQL = process.env.NEXT_PUBLIC_GRAPHQL_HOST

  const postNewsletter = async (email: string, e: React.FormEvent) => {
    e.preventDefault()
    const endpoint = `${API_GRAPHQL}` as string
    const graphQLClient = new GraphQLClient(endpoint, {})
    const mutation = gql`
      mutation POST_NEWSLETTER($input: createNewsletterInput) {
        createNewsletter(input: $input) {
          newsletter {
            email
          }
        }
      }
    `
    const variables = {
      input: {
        data: {
          email
        }
      }
    } as unknown as RequestDocument
    setIsLoading(true)
    try {
      const data = await graphQLClient.request(mutation, variables)
      setIsLoading(false)
      Swal.fire({
        icon: 'success',
        text: 'E-mail cadastrado com sucesso!',
        confirmButtonText: 'Fechar'
      })
      return data
    } catch (error) {
      setIsLoading(false)
      Swal.fire({
        icon: 'error',
        text:
          // @ts-ignore
          error.response.errors[0].message === 'Duplicate entry'
            ? 'E-mail ja cadastrado!'
            : // @ts-ignore
              error.response.errors[0].message,
        confirmButtonText: 'Fechar'
      })
    }
  }
  return (
    <S.Wrapper>
      <S.News>
        <div className="">
          <div className="">
            <form onSubmit={(e) => postNewsletter(email, e)}>
              <input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Coloque seu melhor e-mail"
                value={email}
                required
                type="email"
              />
              <button type="submit">
                {isLoading ? (
                  <FontAwesomeIcon icon={faSpinner} spin />
                ) : (
                  buttonText
                )}
              </button>
            </form>
          </div>
        </div>
      </S.News>
    </S.Wrapper>
  )
}

export default Subscribe
