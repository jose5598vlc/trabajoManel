import React from 'react';
import {
    StyleSheet,
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

  //Obtenemos los productos del json
  ComponentDidMount(){

    fetch("http://localhost/3000/elementos")
    .then((response)=> response.json())
    .then((json) => {this.setState({elementos: json})})
    .catch((error) => console.log(error))


  }

render(){
  return(
    <View style = {{backgroundColor: "blue"}}>

i= parametro nombre con el que hemos entrado en login
      <Text style={styles.header}>Bienvenido{this.props.navigation.getParam('i')}</Text>

      //Salen los elementos de la lista
      <FlatList
        data={this.state.elementos}
        renderItem={({item}) => (
          <View style={{borderColor: "blue", borderWidth: 4, marginBottom: 10, backgroundColor: "#59cbbd", marginRight: 15, marginLeft: 15, flex:1 }}>
          <View style={{flexDirection:"colum"}}>
            
            <Text>{item.nombre}</Text>
          </View>
          <Text>{item.nombre}</Text>
          //Este boton lo implementamos para cuando añadimos el nombre se borren los datos. COn el alert hacemos que salga una
          //alerta con os datos del objeto que se va a Eliminar
          <Button title={"Eliminar"} onPress={() =>{Alert.alert("Borro: "+item.id);

          //Se mete en la bbdd para borrar ese elemento
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
          //Con este boton lo que hacemos es que nos lleve a la pagina de modificar elementos
          <Button title={"Modificar"} onPress={() => this.props.navigation.navigate("ModificarElemento", {i:item})
          
        }
          />
        </View>
          
        )}      



      <Button title="Agregar"/>
        </View>





);
  };
}
  
//Estilos del header
  const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
    }
}
  )


