import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native';


export default class Login extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            documentJSON: [],   //Aquí se guardan los usuarios recuperados de la bbdd
            userName: "",   //Variable para guardar lo introducido por teclado
            contrasenya: "",
            usuarioCorrecto: false
          };
        //Esto es necesario para poder usar las funciones.
          this.comprobarUsuario = this.comprobarUsuario.bind(this);
          this.usuarioCorrecto = this.usuarioCorrecto.bind(this);
          this.cambioAInicio =  this.cambioAInicio.bind(this);
        }




      //Cambiar "UNSAFE_componentWillMount" por obtinLlistatTodos()
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

      this.usuarioCorrecto();
      
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

      this.cambioAInicio();
      
  }




  //Método para que devuelva a la página de REGISTRO
  cambioARegistro(){
      //Lógica para cambiar de pantalla a registro
      alert("Hay que implementar el método");
  }



  


  cambioAInicio(){
      //Si la variable usuarioCorrecto es TRUE, cambiamos a la pantalla de INICIO
      if(this.usuarioCorrecto == true){
          //Cambia a pantalla INICIO
          alert("Has cambiado a la pantalla de Inicio");
      }else{
          alert("Usuario incorrecto");
      }
  }


  guardarUsuario=(user)=>{
      this.setState({userName: user})
  }

  guardarContrasenya=(pass)=>{
    this.setState({contrasenya: pass})
}







    render() {
        return (
            <View style={styles.register}>


             <Text style={styles.title}>Datos de la cuenta</Text>

            <TextInput style={styles.textInput} placeholder="Usuario" 
            underlineColorAndroid={'transparent'}
            onChangeText={this.guardarUsuario}/>

        
            <TextInput style={styles.textInput} placeholder="Contraseña" 
           secureTextEntry={true} underlineColorAndroid={'transparent'}
           onChangeText={this.guardarContrasenya}/>

            <TouchableOpacity style={styles.button} onPress={this.comprobarUsuario}>
                <Text style={styles.buttontext}>Iniciar Sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={this.cambioARegistro}>
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