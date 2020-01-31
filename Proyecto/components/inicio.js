import React from 'react';
import {

    Text,
    View,
    Button,
    FlatList,
    pre,
    StatusBar,
} from 'react-native';


export default class Inicio extends Component {

  constructor(props){
    super(props)
    this.state={elementos: undefined}
  }

  //Obtener productos
  ComponentDidMount(){
    fetch("http://localhost/3001/elementos")
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
          <Button title={"Eliminar"} onPress={() =>{console.log("Borro: "+item.id);
          fetch('http://localhost/3001/elementos/' + item.id, { method: 'DELETE',})
          .then(res => res.text())
          .then(res => console.log(res))
          }}
          />
          </View>
          
        )}
        />

        <Button title="Añademe"/>
        </View>
);
  };
}

