import React from "react";
import {Card} from 'react-bootstrap'
import { CardBody, CardText , Container,Row,Col} from 'reactstrap';
import { LinkContainer } from "react-router-bootstrap";
class Page_csharp_content extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        Page_java_content: []
    };
}
render() {
        return (
           
  <div style={{margin: '1%'}}>
   <h2>Tecnologias Web Frontend e Backend</h2>
  <Container>
  <Row>
    <Col>
      <Card className="text-center" style={{ width: '100%',  justifyContent: 'center', alignItems: 'center' }}>
        <LinkContainer to ="/csharp">
          <Card.Img  style={{padding:'3%', margin:'1%' }} variant="top" src="https://danieljscheufler.files.wordpress.com/2016/05/2p4i.png?w=256&h=256" />
        </LinkContainer> 
        <LinkContainer to ="/csharp">
        <Card.Text>
          Clique para mais detalhes sobre C#
        </Card.Text>
        </LinkContainer> 
        <Card.Footer style={{width: '100%'}} className="text-muted" >Desenvolvido por Microsoft</Card.Footer>
        
      </Card>
    </Col>
    <Col>
        <Card className="text-center" style={{ width: '100%',  justifyContent: 'center', alignItems: 'center' }}>
      <LinkContainer to ="/java">
      <Card.Img  style={{padding:'3%', margin:'1%' }} variant="top" src="https://logospng.org/download/java/logo-java-256.png" />
        </LinkContainer> 
        <LinkContainer to ="/java">
        <Card.Text>
          Clique para mais detalhes sobre Java
        </Card.Text>
        </LinkContainer> 
        <Card.Footer style={{width: '100%'}} className="text-muted" >Desenvolvido por Sun Microsystem, comprado por Oracle</Card.Footer>
      </Card>
      </Col>
      <Col>
        <Card className="text-center" style={{ width: '100%',   justifyContent: 'center', alignItems: 'center' }}>
      <LinkContainer to ="/js">
        <Card.Img  style={{padding:'3%', margin:'1%' }} variant="top" src="https://glot.io/static/img/javascript.svg?etag=h3EUB0Ek" />
        </LinkContainer> 
        <LinkContainer to ="/js">
        <Card.Text>
          Clique para mais detalhes sobre JavaScript
        </Card.Text>
        </LinkContainer> 
        <Card.Footer style={{width: '100%'}} className="text-muted" >Criado por Brendan Eich</Card.Footer>
      </Card>
      </Col>
      <Col>
        <Card className="text-center" style={{ width: '100%',   justifyContent: 'center', alignItems: 'center' }}>
      <LinkContainer to ="/php">
     <Card.Img  style={{padding:'3%', margin:'1%' }} variant="top" src="https://cdn.iconscout.com/icon/free/png-256/php-99-1175127.png"  />
        </LinkContainer> 
        <LinkContainer to ="/php">
        <Card.Text>
          Clique para mais detalhes sobre PHP
        </Card.Text>
        </LinkContainer> 
        <Card.Footer style={{width: '100%'}} className="text-muted" >Criada por Rasmus Lerdorf</Card.Footer>
      </Card>
      </Col>
  </Row>
</Container>




  </div>
       
        );
    }
}

function Page_csharp_content() {
  return (
  <div className="page-csharp">
    <Page_csharp_content/>
 </div>
  );
}

export default Page_csharp_content;
