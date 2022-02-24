import styled from 'styled-components'

export const Container = styled.header`
  /* background: var(--red); */
  background: #000;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: #FFF;

    transition: 0.2s;

    &:hover {
      cursor: pointer;
      filter: brightness(0.9);
    }
  }

  button {
    font-size: 1rem;
    color: #FFF;
    background: var(--red);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;
  
    &:hover {
      filter: brightness(0.9);
    }
  }
`;