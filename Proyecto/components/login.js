//No recoge los datos del GET, da error de NETWORK. Por lo tanto no podemos comprobar usuarios
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    AsyncStorage,
} from 'react-native';
import {createAppContainer} from 'react-navigation'; // importamos createAppContainer de react navegation 
import {createStackNavegator} from 'react-navigation-stack'; // componente para navegacion
import * as firebase from 'firebase'; // importamos firebase de firebase 


export default class Login extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            documentJSON: [],   //Aquí se guardan los usuarios recuperados de la bbdd
            userName: "", 
            email: "",  //Variable para guardar lo introducido por teclado
            contrasenya: "",
            usuarioCorrecto: false
          };
        //Esto es necesario para poder usar las funciones.
        /*
          this.comprobarUsuario = this.comprobarUsuario.bind(this);
          this.usuarioCorrecto = this.usuarioCorrecto.bind(this);
          this.cambioAInicio =  this.cambioAInicio.bind(this);
          */
         // states de signUp y login
         this.signUp = this.state.signUp.bind(this) 
         this.login = this.state.login.bind(this)
        }








  //Recupera SOLO los usuarios que coincidan con las variables pasadas por parámetros   
  comprobarUsuario() {
    fetch(`http://localhost:3001/usuarios?userName=${this.state.userName}&contrasenya=${this.state.contrasenya}`) 
      .then((respuesta) => {
        if (respuesta.ok) {
          return respuesta.json();
        } else {
          console.log("Error en la conexion con http://localhost:3001/usuarios/")
          alert("Error en la conexion con http://localhost:3001/usuarios/")
        }
      })
      .then(respostaJson => {
        this.setState({ documentJSON: respostaJson })
      })
      .catch(error => {
        console.log("Error de conexion: " + error);
        
      });
/*
      this.usuarioCorrecto();
      this.cambioAInicio();
      */
      
  }

  


//Cambia el estado de la variable si el array de usuarios contiene datos.
  usuarioCorrecto(){
      if(this.state.documentJSON == []){
          this.setState({usuarioCorrecto: false});
          alert("Ej JSON está vacio");
      }else{
          this.setState({usuarioCorrecto:  true});
          alert("Ej JSON está lleno");
      }

      
      
  }



/*
  //Método para que devuelva a la página de REGISTRO
  cambioARegistro(){
      //Lógica para cambiar de pantalla a registro
      alert("Hay que implementar el método");
  }

*/

  
/*

  cambioAInicio(){
      //Si la variable usuarioCorrecto es TRUE, cambiamos a la pantalla de INICIO
      if(this.usuarioCorrecto == true){
          //Cambia a pantalla INICIO
          alert("Has cambiado a la pantalla de Inicio");
      }else{
          alert("Usuario incorrecto");
      }
  }
  */


  guardarUsuario=(user)=>{
      this.setState({userName: user})
  }

  guardarContrasenya=(pass)=>{
    this.setState({contrasenya: pass})
}

// si el usuario y contraseña coinciden con el state, llamamos al metodo usuarioCorrecto y navegamos a inicio
login = async() => {
  if(userInfo.userName === this.state.userName && userInfo.contrasenya === this.state.contrasenya) {
    await AsyncStorage.setItem(this.usuarioCorrecto);
    alert('Usuario logueado');
    this.props.navigation.navigate('Inicio');
  } else {
    alert('Usuario/Contraseña Incorrecto');
  }
}





    render() {
        return (
            <View style={styles.register}>


             <Text style={styles.title}>Datos de la cuenta</Text>

            <TextInput style={styles.textInput} placeholder="Usuario" 
            underlineColorAndroid={'transparent'}
            onChangeText={(userName) => this.setState({userName})}
            value={this.state.userName}/>

        
            <TextInput style={styles.textInput} placeholder="Contraseña" 
           secureTextEntry={true} underlineColorAndroid={'transparent'}
           onChangeText={(contrasenya) => this.setState({contrasenya})}
            value={this.state.contrasenya}/>

            <TouchableOpacity style={styles.button} onPress={this.login} onPress={()=>this.props.navigation.navigate("Inicio")}>
                <Text style={styles.buttontext}>Iniciar Sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={this.signUp} onPress={()=> this.props.navigation.navigate("Register")}>
                <Text style={styles.buttontext}>Registrarse</Text>
            </TouchableOpacity>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    register: {
        alignSelf: 'stretch',
       
    },

    title: {
      fontSize: 28,
      fontFamily: 'Arial',
      textAlign: 'center'
    },
    header: {
        fontSize: 24,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
    },

    textInput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: 'black',
        borderBottomColor: '#f8f8f8',
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 3,
    },
    buttontext: {
        color: '#fff',
        fontWeight: 'bold',
        
    }
})