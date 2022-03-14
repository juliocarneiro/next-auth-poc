import * as S from './styles'
import { IButtonProps } from './types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export const Button = (props: IButtonProps) => (
  <S.Wrapper {...props}>
    {props.isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : props.text}
  </S.Wrapper>
)

export default Button
