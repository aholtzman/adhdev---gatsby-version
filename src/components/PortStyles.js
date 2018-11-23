import styled from 'styled-components'

export const Title = styled.h2`
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
  padding: 5px;
`

export const ItemWrap = styled.div`
  margin: 20px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: white;
  box-shadow: 5px 10px 20px #888888;
  border: thin solid black;
  border-radius: 5px;
`

export const Role = styled.h3`
  color: #202020;
`

export const TextWrap = styled.div`
  padding: 15px;
  padding-bottom: 20px;
  text-align: center;

  @media (max-width: 700px) {
    width: 290px;
  }
`
