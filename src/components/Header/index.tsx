import Subscribe from 'components/Subscribe'
import * as S from './styles'
import Link from 'next/link'
import { useState } from 'react'
import Button from 'components/Button'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/client'
import Swal from 'sweetalert2'

const Header = () => {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [values, setValues] = useState({})
  const { push } = useRouter()

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    setIsLoading(true)
    event.preventDefault()
    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: '/'
    })
    if (result?.url) {
      setIsLoading(false)
      return push('/members')
    }
    setIsLoading(false)
    Swal.fire({
      icon: 'error',
      text: 'Usuário ou senha inválidos',
      confirmButtonText: 'Fechar'
    })
  }
  return (
    <S.Wrapper>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-6"></div>
          <div className="col-md-6 col-sm-6 col-xs-6 text-right">
            <S.Menu>
              <li>
                <Link href="/sobre">
                  <a>Sobre</a>
                </Link>
              </li>
              <li
                style={{
                  background: '#9a1515'
                }}
              >
                <p
                  onClick={() => setOpen(!open)}
                  style={{
                    cursor: 'pointer'
                  }}
                >
                  Login
                </p>
                <div
                  style={{ display: open ? 'block' : 'none', minWidth: 212 }}
                >
                  <form onSubmit={handleSubmit}>
                    <input
                      type="email"
                      required
                      name="email"
                      placeholder="Email"
                      onChange={(v) => handleInput('email', v.target.value)}
                    ></input>
                    <input
                      type="password"
                      required
                      name="password"
                      placeholder="Password"
                      onChange={(v) => handleInput('password', v.target.value)}
                    ></input>
                    <Button text="Entrar" type="submit" isLoading={isLoading} />
                  </form>
                </div>
              </li>
              <li>Contato</li>
            </S.Menu>
          </div>
        </div>
        <div className="row" style={{ marginTop: 60 }}>
          <div className="col-md-12 col-sm-12">
            <h2>Skull Club</h2>
            <Subscribe buttonText="ASSINAR" />
          </div>
        </div>
      </div>
    </S.Wrapper>
  )
}

export default Header
