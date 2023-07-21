import styled from 'styled-components'

const Home = (props) => {
  return (
    <Container>
      <Section>
        <h5><a>In a rush to hire? -</a></h5>
        <p>&nbsp; Quickly find talented pros using Upwork, ensuring your business stays on track.</p>
      </Section>
      <Layout>
        <div className="left">left</div>
        <div className="center">center</div>
        <div className="right">rigth</div>
      </Layout>
    </Container>
  )
}

const Container = styled.div`
padding: 52px;
max-width: 100%;
`

const Content = styled.div`
max-width: 1128px;
margin-left: auto;
margin-right: auto;
`

const Section = styled.section`
min-height: 50px;
padding: 16px;
box-sizing: content-box;
display: flex;
text-align: center;
justify-content: center;
text-decoration: underline;
h5{
  color: #0a66c2;
  font-size: 14px;
  a{
    font-weight: 700;
  }
}
p{
  font-size: 14px;
  color: #434649;
  font-weight: 600;
}
@media (max-width: 768px) {
  flex-direction: column;
  padding: 0 5px;
}
`

const Layout = styled.div`
display: grid;
grid-template-areas: "leftside main rightside";
grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
column-gap: 25px;
row-gap: 25px;
/* grid-template-rows: auto; */
margin: 25px 0;
@media (max-width: 768px) {
  display: flex;
  flex-direction: column;
  padding: 0 5px;
}
`

export default Home