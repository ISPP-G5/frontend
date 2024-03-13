import React, { useState } from 'react';
import '../styles/styles.css';
import AdminLayout from '../components/AdminLayout';
import axios from 'axios';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;


const AdminProfilesUpdate = () => {


    const [id, setId] = useState(parseInt(localStorage.getItem('userId'),10));
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [id_number, setId_number] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const [pass2, setPass2] = useState("");

    const [email, setEmail] = useState("");

   const updateAdmin = async () => {
    if(pass2!==password){
        window.alert("¡Las contraseñas no coinciden!");
    }else{
        const update = await axios.put(`${API_ENDPOINT}user/${id}/`,{
            name: name,
            surname: surname,
            id_number: id_number,
            phone : phone,
            role: "ADMIN",
            password: password,
            email: email,
            avatar: "https://static.vecteezy.com/system/resources/previews/015/665/684/non_2x/man-with-the-inscription-admin-icon-outline-style-vector.jpg",
        });
        console.log('update',update);
        const {data} = update;
        if (data.message){
            window.alert(data.message);
        }else{
            window.alert("Usuario actualizado con éxito.")
        }
    }
   }
  

    return (
      <div className='App'>
         
            <AdminLayout>
                <div className='update-container' style={{marginLeft:'12.5%'}}>
                <div style={{alignSelf:'center'}}> 
                  <img src="https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg" alt={"imagen"} style={{ 
                      maxWidth: '90%', 
                      maxHeight: '90%', 
                      borderRadius: '100%',
                    }}  />
                </div>
                
                    <div className='bold-text'>Nombre</div>
                        <input value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        type='text' 
                        placeholder='Nombre'></input>

                    <div className='bold-text'>Apellido</div>
                        <input value={surname} 
                        onChange={(e) => setSurname(e.target.value)} 
                        type='text' 
                        placeholder='Primer Apellido'></input>

                    <div className='bold-text'>Identificación</div>
                        <input value={id_number} 
                        onChange={(e) => setId_number(e.target.value)} 
                        type='text' 
                        placeholder='DNI/NIE/Pasaporte'></input>

                    <div className='bold-text'>Email</div>
                        <input value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        type='email' 
                        placeholder='Email'></input>

                    <div className='bold-text'>Teléfono</div>
                        <input value={phone}
                        onChange={(e) => setPhone(e.target.value)} 
                        type='tel' 
                        placeholder='Número de teléfono'></input>

                    <div className='bold-text'>Contraseña</div>
                        <input value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        type='password' 
                        placeholder='Contraseña'></input>
                    
                    <div className='bold-text'>Repetir contraseña</div>
                        <input value={pass2}
                        onChange={(e) => setPass2(e.target.value)}
                        type='password' 
                        placeholder='Contraseña'></input>

                    <button onClick={updateAdmin} className='button' style={{textAlign:'center', alignSelf:'center', margin:'4%'}}>
                            Actualizar perfil
                    </button>
              </div>
              </AdminLayout>
        </div>
        
    )
  
  };
  
  export default AdminProfilesUpdate;