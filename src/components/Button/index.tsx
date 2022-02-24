import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
};

//Tudo que nao for isOutlined eu jogo dentro de um props
export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <Container>
      <button 
        className={`button ${isOutlined ? 'outlined' : ''}`} 
        {...props} 
      />
    </Container>
  );
}