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
           
  <div style={{width:'80%', margin: '2%'}}>
  
  <Card className="text-center" style={{ width: '100%',  margin: '2em, 2em', justifyContent: 'center', alignItems: 'center' }}>
      <Card.Header style={{width: '100%'}} >Desenvolvido por Microsoft</Card.Header>
      <Card.Img  style={{ width: '15%',margin:'1%' }} variant="top" src="https://danieljscheufler.files.wordpress.com/2016/05/2p4i.png?w=256&h=256" />
      
      <Card.Text>
         É uma linguagem de programação, multiparadigma, de tipagem forte, desenvolvida pela Microsoft como parte da plataforma .NET. A sua sintaxe orientada a objetos foi baseada no C++ mas inclui muitas influências de outras linguagens de programação, como Object Pascal e, principalmente, Java
      </Card.Text>
      
    </Card>
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
