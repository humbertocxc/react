import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid var(--button-border);
    background: #e7e9ee;

    font-weight: normal;
    font-size: 1rem;

    &:hover {
      border: 0;
    }

    &:focus {
      outline: 0;
    }
    
    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

const colors = {
  green: '#33cc95',
  red: '#e52e4d',
}

interface RadioBoxProps{
  isActive: boolean;
  activeColor: 'green' | 'red';
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: ${(props) => props.isActive
  ? '0'
  : '1px solid var(--button-border)'};
  border-radius: 0.25rem;

  background: ${(props) => props.isActive
  ? transparentize(0.9, colors[props.activeColor])
  : 'transparent'};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.95);
    background: ${(props) => transparentize(0.95, colors[props.activeColor])};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;