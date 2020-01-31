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
<Text style={styles.header}>Bienvenido{this.props.navigation.getParam('i')}</Text>

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
          <Button title={"Modificar"} onPress={() => this.props.navigation.navigate("ModificarElemento", {i:item})}
          />
        </View>
          
        )}      



      <Button title="Agregar"/>
        </View>





);
  };
}
  

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


