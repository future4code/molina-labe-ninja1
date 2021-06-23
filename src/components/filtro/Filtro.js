import React, { Component } from 'react'
import { Container, ContainerText, InputContainer } from './styled'

export class Filtro extends Component {

  handleFieldChange = event => {     
    this.setState({[event.target.name]:event.target.value})  
  }

  FiltrarEOrdenarLista = () => {
    return this.props.produtos
        .filter((produto) => this.props.titleFilter ? produto.title.includes(this.props.titleFilter) : true)
        .filter((produto)=> this.props.categoryFilter ? produto.category.includes(this.props.categoryFilter) : true)
        .filter((produto) => this.props.minFilter ? produto.price> this.props.minFilter : true)
        .filter((produto) => this.props.maxFilter ? produto.price< this.props.maxFilter : true)
        .sort((a, b) => this.state.sort === 'CRESCENTE' ? a.price- b.price: b.price- a.price)
  }

  render() {
    return (
        <div>
            <Container>
                <h3>Filtros</h3>
                  <InputContainer>
                    Valor mínimo:
                    <input
                      name='minFilter'
                      type="number"
                      value={this.props.minFilter}
                      onChange={this.props.handleFieldChange}
                    />
                  </InputContainer>
                  <InputContainer>
                    Valor máximo:
                    <input
                      name='maxFilter'
                      type="number"
                      value={this.props.maxFilter}
                      onChange={this.props.handleFieldChange}
                    />
                  </InputContainer>
                  <InputContainer>
                    Busca por título:
                    <input
                      name='nameFilter'
                      type="text"
                      value={this.props.nameFilter}
                      onChange={this.props.handleFieldChange}
                    />
                  </InputContainer>
            </Container>
        </div>
    )
  }
}