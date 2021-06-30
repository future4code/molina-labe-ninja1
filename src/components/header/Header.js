import React, { Component } from 'react'
import { Logo, IMGLogo, ButtonContainer, Container  } from './styled'
import labeninjas1 from '../img/labeninjas1.png' 
//import  Button  from '../diversos/Button'

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export class Header extends Component {
  render() {
    return (
        <div>
            <Container>
              <Logo>
                  <IMGLogo 
                    src={labeninjas1}
                    onClick={this.props.goToHome}
                    >
                  </IMGLogo>  
              </Logo>
              <ButtonContainer>
                <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                  <Button
                  onClick={this.props.goToHome}
                  >Home</Button>
                  <Button
                  onClick={this.props.goToCustomer}                
                  >Contratante</Button>
                  <Button
                  onClick={this.props.goToProvider} 
                  >Fornecedor</Button>
                </ButtonGroup>
              </ButtonContainer>
              
            </Container>
        </div>
    )
  }
}
