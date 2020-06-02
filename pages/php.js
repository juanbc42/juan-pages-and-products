import React from "react";
import {Card} from 'react-bootstrap'
import { CardBody, CardText , Container,Row,Col} from 'reactstrap';
class Page_php_content extends React.Component {
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
      <Card.Header style={{width: '100%'}} >Criada por Rasmus Lerdorf</Card.Header>
      <Card.Img  style={{ width: '15%',margin:'1%' }} variant="top" src="https://cdn.iconscout.com/icon/free/png-256/php-99-1175127.png" />
      
      <Card.Text>
        PHP é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor, capazes de gerar conteúdo dinâmico na World Wide Web. 
      </Card.Text>
      
    </Card>
  </div>
       
        );
    }
}

function Page_php_content() {
  return (
  <div className="page-php">
    <Page_php_content/>
 </div>
  );
}

export default Page_php_content;
