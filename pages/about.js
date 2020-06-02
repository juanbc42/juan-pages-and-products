import React from "react";
import {Card} from 'react-bootstrap'
import { CardBody, CardText , Container,Row,Col} from 'reactstrap';
class Page_csharp_content extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        Page_java_content: []
    };
}
render() {
        return (
           
  <Card className="bg-dark text-light">
  <Card.Img src="https://mundojs.com.br/wp-content/uploads/2018/07/particulas-1024x473.png" alt="Card image" />
  <Card.ImgOverlay style={{padding:'12%'}}>
    <Card.Title>Sobre o Dev</Card.Title>
    <Card.Text>
      Esta é uma página onde é apresentado normalmente detalhes adicionais do desenvolvedor ou a equipe desenvolvedora de um certo projeto, neste caso apenas eu, Juan BC, Aluno da Faculdade Pitágoras. 
    </Card.Text>
    
  </Card.ImgOverlay>
</Card>
       
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
