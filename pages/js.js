import React from "react";
import {Card} from 'react-bootstrap'
import { CardBody, CardText , Container,Row,Col} from 'reactstrap';
class Page_js_content extends React.Component {
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
      <Card.Header style={{width: '100%'}} >Criado por Brendan Eich</Card.Header>
      <Card.Img  style={{ width: '15%', margin:'1%' }} variant="top" src="https://glot.io/static/img/javascript.svg?etag=h3EUB0Ek" />
      
     <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
        JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web
      </Card.Text>
      </Card.Body>
    </Card>
  </div>
       
        );
    }
}

function Page_js_content() {
  return (
  <div className="page-js">
    <Page_js_content/>
 </div>
  );
}

export default Page_js_content;
