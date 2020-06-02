import React from "react";
import {Card} from 'react-bootstrap'
import { CardBody, CardText , Container,Row,Col} from 'reactstrap';
class Page_java_content extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        Page_java_content: []
    };
}
render() {
        return (
           
  <div style={{width:'80%', margin: '2%'}}>
  
  <Card className="text-center" style={{ width: '100%',  margin: '2em, 2em', justifyContent: 'center', alignItems: 'center' }}>
      <Card.Header style={{width: '100%'}} >Desenvolvido por Sun Microsystem, comprado por Oracle</Card.Header>
      <Card.Img  style={{ width: '15%', margin:'1%' }} variant="top" src="https://logospng.org/download/java/logo-java-256.png" />
      
     <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
         É o ambiente computacional, ou plataforma, criada pela empresa estadunidense Sun Microsystems, e vendida para a Oracle depois de alguns anos. A plataforma permite desenvolver programas utilizando a linguagem de programação Java
      </Card.Text>
      </Card.Body>
    </Card>
  </div>
       
        );
    }
}

function Page_java_content() {
  return (
  <div className="page-java">
    <Page_java_content/>
 </div>
  );
}

export default Page_java_content;
