import '../styles/styles.css'
import google from '../logo/google.svg'
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';

function Donation() {

    const tableStyle = {
        width: '100%',
        marginTop: '7%',
        marginBottom: '2%',
        paddingLeft: '5%',
        paddingRight: '5%',
    };

    const paragraphStyle = {
        textAlign: 'justify',
        marginTop: '30px',
        marginBotton: '30px',
    }

    const labelStyle = {
        padding: '10px',
        color: '#7C838A',
        textAlign: 'left',
    };

    const inputStyle = {
        width: '100%', // Use 100% width for the input elements
        borderRadius: '1rem',
        margin: '0 auto',
        boxSizing: 'border-box', // Include padding and border in the width calculation
    };

    return (
        <div className="App">
            <Header/>
            
            <div className='main'>
                <table style={tableStyle}>
                    <tr>
                        <td style={{width:'50%'}}>
                            <h1>Donaciones puntuales</h1>
                        </td>
                        <td style={{width:'50%'}}>
                            <h1>Donaciones recurrentes</h1>
                        </td>
                    </tr>
                    <tr>
                        <td style={{borderRight:'3px solid #b7ecff',
                        paddingLeft:'5%',
                        paddingRight:'5%'}}>

                            <div style={paragraphStyle}>
                                Si quiere ayudarnos con algún donativo puntual,
                                puede hacerlo a través de una transferencia
                                bancaria a nuestra cuenta o a través de nuestro
                                código de Bizum.
                                <br/>
                                ¡Ambas opciones son bienvenidas!
                                <ul>
                                    <li>IBAN: ES63 2100 2409 5002 0019 2504</li>
                                    <li>Bizum: ONG: 03857</li>
                                </ul>
                                Para recibir un justificante, por favor rellene
                                los siguientes campos:
                            </div>
                            
                            <div>

                                <div style={labelStyle}>Nombre y apellidos</div>
                                <input
                                type='text'
                                placeholder='Escriba su nombre y apellidos'
                                style={inputStyle}
                                />

                                <div style={labelStyle}>Correo electrónico</div>
                                <input
                                type='text'
                                placeholder='Escriba su correo electrónico'
                                style={inputStyle}
                                />

                            </div>

                            <button className='button' style={{
                                  marginTop: '4%',
                                  fontSize: '1.5rem',
                                  width: '30%' }}>
                                    Enviar
                                </button>

                        </td>
                        <td style={{paddingLeft:'5%',
                        paddingRight:'5%'}}>

                            <div className='flex-container'>
                                <h2>Regístrese</h2>

                                <div>

                                    <div style={labelStyle}>Correo electrónico</div>
                                    <input
                                    type='text'
                                    placeholder='Escriba su correo electrónico'
                                    style={inputStyle}
                                    />

                                    <div style={labelStyle}>Contraseña</div>
                                    <input
                                    type='text'
                                    placeholder='Escriba su contraseña'
                                    style={inputStyle}
                                    />

                                    <div style={labelStyle}>Confirmar contraseña</div>
                                    <input
                                    type='text'
                                    placeholder='Confirme su contraseña'
                                    style={inputStyle}
                                    />

                                </div>

                                <div style={{
                                  display:'flex',
                                  flexDirection:'column',
                                  alignItems:'center',
                                  justyfyContent:'center'}}>

                                    <br/>

                                    <button className='button' style={{
                                      marginTop: '4%',
                                      fontSize: '1.5rem',
                                      width: '60%' }}>
                                        Crear cuenta
                                    </button>

                                    <div style={{
                                      marginTop: '4%',
                                      marginBottom: '4%'}}>
                                        ó
                                    </div>

                                    <button className='button-google' style={{fontWeight:'bold'}}>
                                        <span>Registrarse con Google</span>
                                        <Link to="https://myaccount.google.com/">
                                            <img src={google} alt="Logo" className='button-google-img' />
                                        </Link>
                                    </button>

                                    <div style={{
                                      color: 'gray',
                                      marginTop: '4%',
                                      marginBottom: '4%'}}>
                                        ¿Ya tiene cuenta?
                                        &nbsp;
                                        <Link to="/registrarse" style={{color: '#6FC0DB'}}>
                                            Inicie sesión aquí
                                        </Link>.
                                    </div>
                                    
                                </div>
                                

                            </div>
                        </td>
                    </tr>
                </table>
            </div>

            <Footer/>
        </div>
    );
  }
export default Donation;