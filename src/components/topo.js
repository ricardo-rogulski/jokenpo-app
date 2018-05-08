import React, { Component } from 'react';
import { View, Image } from 'react-native';

//Faz aqui por causa da lentidao de buscar, que para toda a aplicacao.
const imagem = require('../../imgs/jokenpo.png');

class Topo extends Component {
  render() {
    return (
      <View>
        <Image source={imagem} />
      </View>
    );
  }
}

export default Topo;
