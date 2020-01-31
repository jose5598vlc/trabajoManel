import React from 'react';
import {

    Text,
    View,
    Button,
    FlatList,
    Alert,

} from 'react-native';


export default class Inicio extends Component {

  constructor(props){
    super(props)
    this.state={elementos: undefined}
  }

  //Obtener productos
  ComponentDidMount(){
    fetch("http://localhost/3000/elementos")
    .then((response)=> response.json())
    .then((json) => {this.setState({elementos: json})})
    .catch((error) => console.log(error))
  }

render(){
  return(
    <View style = {{backgroundColor: "blue"}}>
      <Text> "Pantalla Inicio </Text>

      <FlatList
        data={this.state.elementos}
        renderItem={({item}) => (
          <View style={{borderColor: "blue", borderWidth: 4, marginBottom: 10, backgroundColor: "#59cbbd", marginRight: 15, marginLeft: 15, flex:1 }}>
          <View style={{flexDirection:"colum"}}>
            <Text>{item.nombre}</Text>
          </View>
          <Text>{item.descripcion}</Text>
          <Button title={"Eliminar"} onPress={() =>{Alert.alert("Borro: "+item.id);
          fetch('http://localhost/3000/elementos/' + item.id, { method: 'DELETE',})
          .then(res => res.text())
          .then(res => console.log(res))
          }}
          />
        </View>
          
        )}
        />

        data={this.state.elementos}
        renderItem={({item}) => (
          <View style={{borderColor: "blue", borderWidth: 4, marginBottom: 10, backgroundColor: "#59cbbd", marginRight: 15, marginLeft: 15, flex:1 }}>
          <View style={{flexDirection:"colum"}}>
            <Text>{item.descripcion}</Text>
          </View>
          <Text>{item.descripcion}</Text>
          <Button title={"Modificar"} onPress={() =>{Alert.alert("Modifico: "+item.id);
          fetch('http://localhost/3000/elementos/' + item.id, { method: 'PUT',})
          .then(res => res.text())
          .then(res => console.log(res))
          }}
          />
        </View>
          
        )}      



      <Button title="Agregar"/>
        </View>





);
  };
}



/*
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  ListView,
  TouchableHighlight,
  View
} from 'react-native';
export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      lista: [],
      dataSource: '',
    };
  }
añadirItem() {
    if (this.state.text != '') {
      this.state.lista[this.state.lista.length] = this.state.text
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({dataSource: ds.cloneWithRows(this.state.lista)});
      this.setState({text: ''});
    }
  }
eliminarItem(item) {
    for(var i = 0; i<this.state.lista.length; i++) {
        if (this.state.lista[i] == item) {
           delete this.state.lista[i];
           break;
        }
    }
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({dataSource: ds.cloneWithRows(this.state.lista)});
  }
render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.añadirItem()}>
          <Text style={styles.textButton}>Añadir</Text>
        </TouchableHighlight>
      </View>
      {this.state.dataSource != '' && <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) =>
          <View style={styles.listItem}>
            <TouchableHighlight
              style={styles.buttonItem}
              onPress={() => this.eliminarItem(rowData)}>
              <Text style={styles.textButton}>Eliminar</Text>
            </TouchableHighlight>
            <Text style = {styles.textItem}>{rowData}</Text>
          </View>}
      />}
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    flexDirection: 'row',
  },
  input: {
    marginLeft: 10,
    marginTop: 10,
    width:250,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  button: {
    alignItems: 'center',
    width: 70,
    height: 40,
    backgroundColor: '#79D0FF',
    borderRadius: 2,
    marginLeft: 10,
    marginTop: 10
  },
  textButton:{
    marginTop: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 350,
    height: 70,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  buttonItem: {
    alignItems: 'center',
    width: 70,
    height: 40,
    backgroundColor: '#FF7979',
    borderRadius: 2,
    marginLeft: 10,
  },
  textItem: {
    marginLeft: 30,
  }
}); 
*/




