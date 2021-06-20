import styled from 'styled-components'

const Wrapper = styled.main.attrs(props => ({
  role: !props.as ? 'main' : undefined,
  id: !props.as ? 'main-content' : undefined,
}))`
  position: relative;
  border-radius: 5px;
  width: 80%;
  max-width: 1080px;
  word-wrap: break-word;
  background-color: #ECECED;
  margin: 0px auto 30px auto;
  top: 30px;
  padding: 50px;
  box-shadow: 0 0 0 0, 0 6px 12px #0000001a;

  @media (max-width: 1020px) {
    width: 100%;
    padding: 25px;
  }
`

export default Wrapper
