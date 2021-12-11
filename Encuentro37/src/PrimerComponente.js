
import React, { useState } from 'react'
import {Button, Col, Container, Row, FormGroup, Input} from 'reactstrap';
import "./primercomponente.css";

const PrimerComponente = () => {
  const[name, setName]=useState('');
  let setNameClick=(e)=>{setName(e.target.value);}
  const[lastName, setLastName]=useState('');
  let setLastNameClick=(e)=>{setLastName(e.target.value);}
  let onSubmitForm=(e)=>{
    e.preventDefault();
    alert(`Bienvenido ${name} ${lastName}`);
    setName("");
    setLastName("");
  }
    return (
        <div>
        <Container>
          {/* <div className='row-cols-2 row-cols-lg-5 g-2 g-lg-3 row'></div> */}
          <Row form={true} className='row-cols-2 row-cols-lg-5 g-2 g-lg-3'>
            <Col>
              <div class="p-3 border bg-light">Row column</div>
            </Col>
          </Row>
          <Row form={true}>
          <form onSubmit={onSubmitForm}>
            <Col md="12">
              <FormGroup className='mt-2'>
                <Input placeholder="Nombre" value={name} onChange={setNameClick} />
              </FormGroup>
              <FormGroup className='mt-2'>
                <Input placeholder="Apellido" value={lastName} onChange={setLastNameClick}  />
              </FormGroup> 
            </Col>
            <Button className='mt-2' color="primary">Enviar</Button>
          </form>
          </Row>
        </Container>
       </div>
    );
}

export default PrimerComponente;

// <Container>
//          <br/>
//          <Row>
//            <Col md="3" sm="1"></Col>
//            <Col md="6" sm="10" xs="12">
//              <Card>
//                  <CardImgOverlay>
//                  <CardTitle className="txtBlanco">FORMULARIO DE CONTACTO</CardTitle>
//                  <CardText>
//                  </CardText>
//                </CardImgOverlay>
//                <Card>
//                  <CardTitle className="txtSubTitulo">Ingrese sus datos</CardTitle>
                 
//                    <form>
//                    <Col md="12">
//                      <FormGroup>
//                        <Input placeholder="Nombre"  />
//                      </FormGroup>
//                      <FormGroup>
//                        <Input placeholder="Apellido"   />
//                      </FormGroup> 
//                    </Col>
//                    </form>
//                     <button className='btn btn-primary'>Enviar</button>
//                  </Card>
//              </Card>
          
//            </Col>
//            <Col md="3" sm="1"></Col>
//         </Row>
//        </Container>