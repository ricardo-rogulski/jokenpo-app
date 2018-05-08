import { AppRegistry, View, Text, Button, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import Topo from './src/components/topo';
import Icone from './src/components/icone';


class app3 extends Component {
  constructor(props) {
    super(props);
    this.state = { escolhaUsuario: '', escolhaComputador: '' };
  }

  jokenpo(selecaoUsuario) {
    const numAleatorio = Math.floor(Math.random() * 3);
    let selecaoComputador = '';

    switch (numAleatorio) {
      case 0: selecaoComputador = 'pedra'; break;
      case 1: selecaoComputador = 'papel'; break;
      case 2: selecaoComputador = 'tesoura'; break;
      default: selecaoComputador = '';
    }

    let resultado = '';

    if (selecaoComputador === 'pedra') {
      if (selecaoUsuario === 'pedra') {
        resultado = 'Empate';
      }
      if (selecaoUsuario === 'papel') {
        resultado = 'Você ganhou!';
      }
      if (selecaoUsuario === 'tesoura') {
        resultado = 'Você perdeu';
      }
    }

    if (selecaoComputador === 'papel') {
      if (selecaoUsuario === 'papel') {
        resultado = 'Empate';
      }
      if (selecaoUsuario === 'tesoura') {
        resultado = 'Você ganhou!';
      }
      if (selecaoUsuario === 'pedra') {
        resultado = 'Você perdeu';
      }
    }

    if (selecaoComputador === 'tesoura') {
      if (selecaoUsuario === 'tesoura') {
        resultado = 'Empate';
      }
      if (selecaoUsuario === 'pedra') {
        resultado = 'Você ganhou!';
      }
      if (selecaoUsuario === 'papel') {
        resultado = 'Você perdeu';
      }
    }

    this.setState({ escolhaUsuario: selecaoUsuario,
                    escolhaComputador: selecaoComputador,
                    resultado });
  }

  render() {
      return (
        <View>
          <Topo />
          <View style={styles.painelAcoes}>
            <View style={styles.btnEscolha}>
              <Button title="pedra" onPress={() => { this.jokenpo('pedra'); }} />
            </View>
            <View style={styles.btnEscolha}>
              <Button title="papel" onPress={() => { this.jokenpo('papel'); }} />
            </View>
            <View style={styles.btnEscolha}>
              <Button title="tesoura" onPress={() => { this.jokenpo('tesoura'); }} />
            </View>
          </View>

          <View style={styles.palco}>
            <Text style={styles.txtResultado}>{ this.state.resultado }</Text>
            <Icone escolha={this.state.escolhaComputador} jogador='Computador' />
            <Icone escolha={this.state.escolhaUsuario} jogador='Você' />
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  palco: {
    alignItems: 'center',
    marginTop: 20
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  }
});

AppRegistry.registerComponent('app3', () => app3);
