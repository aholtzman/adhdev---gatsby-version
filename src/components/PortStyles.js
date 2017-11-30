import styled from 'styled-components'

export const Title = styled.h1`
  color: #202020;
`

export const Url = styled.a`
  text-decoration: none;
  color: #404040;
`

export const Image = styled.img`
  height: 200px;
  border: 1px solid grey;

  @media (max-width: 700px) {
    width: 290px;
  }
`

export const Desc = styled.p`
  font-size: 18px;
`

export const ItemWrap = styled.div`
  margin: 20px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 350px;
  background-color: white;

  @media (max-width: 700px) {
    width: 290px;
  }
`

export const Role = styled.h3`
  color: #202020;
`

export const TextWrap = styled.div`
  padding: 15px;
  padding-bottom: 20px;
  text-align: center;
  width: 350px;

  @media (max-width: 700px) {
    width: 290px;
  }
`
