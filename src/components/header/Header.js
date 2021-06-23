import React, { Component } from 'react'
import { Logo, IMGLogo, Container  } from './styled'
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
                <IMGLogo src={labeninjas1}></IMGLogo>  
              </Logo>
              <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                <Button>Home</Button>
                <Button>Contratante</Button>
                <Button>Fornecedor</Button>
              </ButtonGroup>
              
            </Container>
        </div>
    )
  }
}
