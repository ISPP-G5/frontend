import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/styles.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;


const UpdateProfile = ({tipo}) => {

    const id = localStorage.getItem('userId');
    const [avatar, setAvatar] = useState("");

    const [valoresList, setValores] = useState([]);

    const navigate = useNavigate();


    useEffect(() => {

      axios.get(`${API_ENDPOINT}user/`)
        .then(response => {
          setValores(response.data.find(x=>x.id==parseInt(id,10)));
            console.log("name", name)
            setAvatar(valoresList.avatar)
        })
        .catch(error => {
          console.error(error);
        });

    }, []);

    //Atributos
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [id_number, setId_number] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [volunteer, setVolunteer] = useState("");
    const [family, setFamily] = useState("");
    const [partner, setPartner] = useState("");
    const [educator, setEducator] = useState("");
    const [education_center, setEducation_center] = useState("");

    //Atributos son correctos
    const [valoresCorrectos, setValoresCorrectos] = useState(false)
    
    const updateAdmin = async () => {
        
        //Id necesario para usuarios no administradores
        setAvatar(valoresList.avatar)
        setFamily(valoresList.family)
        setPartner(valoresList.partner)
        setEducator(valoresList.educator)
        setEducation_center(valoresList.education_center)
        setVolunteer(valoresList.volunteer)

        //Compruebo que se le asigna un valor
        if(role==="" || !role){
            setRole(valoresList.role)
            setValoresCorrectos(true)
        }if(name==="" || !name){
            setName(valoresList.name)
            setValoresCorrectos(true)
        }if(surname==="" || !surname){
            setSurname(valoresList.surname)
            setValoresCorrectos(true)
        }if(id_number==="" || !id_number){
            setId_number(valoresList.id_number)
            setValoresCorrectos(true)
        }if(phone==="" || !phone){
            setPhone(valoresList.phone)
            setValoresCorrectos(true)
        }if(password==="" || !password){
            setPassword(valoresList.password)
            setValoresCorrectos(true)
        }if(email==="" || !email){
            setEmail(valoresList.email)
            setValoresCorrectos(true)
        }if(valoresCorrectos){
            try{
            const update = await axios.put(`${API_ENDPOINT}user/${id}/`,{ //Hago el PUT
                name: name,
                surname: surname,
                id_number: id_number,
                phone : phone,
                password: password,
                email: email,
                role: role,
                avatar: avatar,
                family: family,
                partner: partner,
                volunteer: volunteer,
                education_center: education_center,
                educator: educator,
            });
            const {data} = update;
            if (data.message){
                window.alert(data.message);
            }else{
                toast.success("Usuario actualizado con éxito.");
                navigate(`/${tipo}Perfil/`); //Navego al perfil      

            }} catch (error){
                if (error.response && error.response.status === 400) {
                    toast.error("Datos introducidos incorrectos");
                } else {
                    console.error("Error:", error);
                }
            }

        }
        
   }

   
  

    return (
            <div>

                <div className='update-container' style={{marginLeft:'12.5%'}}>
                <div style={{alignSelf:'center'}}> 
                  <img src={valoresList.avatar} alt={"imagen"} style={{ 
                      maxWidth: '90%', 
                      maxHeight: '90%', 
                      borderRadius: '100%',
                    }}  />
                </div>
                
                    <div className='hd-center'>
                        <img src='https://www.pngall.com/wp-content/uploads/8/Red-Warning.png' style={{width:'3.5%'}}/>
                        <strong>Modificar sólo los datos que requieran cambio</strong>
                        <img src='https://www.pngall.com/wp-content/uploads/8/Red-Warning.png' style={{width:'3.5%'}}/>
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

                    <div className='bold-text'>DNI/NIE/Pasaporte</div>
                        <input value={id_number} 
                        onChange={(e) => setId_number(e.target.value)} 
                        type='text' 
                        placeholder='DNI/NIE/Pasaporte'></input>

                    <div className='bold-text'>Número de teléfono</div>
                        <input value={phone}
                        onChange={(e) => setPhone(e.target.value)} 
                        type='tel' 
                        placeholder='Número de teléfono'></input>

                    <div className='bold-text'>Correo electrónico</div>
                        <input value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        type='email' 
                        placeholder='ejemplo@gmail.com'></input>

                    <div className='bold-text'>Contraseña</div>
                        <input value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        type='password' 
                        placeholder='Contraseña'></input>
                    
                    <ToastContainer/>

                    <button onClick={updateAdmin} className='button' style={{textAlign:'center', alignSelf:'center', margin:'4%'}}>
                            Actualizar perfil
                    </button>
                </div>
            </div>
        
    )
  
  };
  
  export default UpdateProfile;