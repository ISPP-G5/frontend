import Header from '../components/Header';
import '../styles/styles.css';
import React from 'react';
import google from '../logo/google.svg';
import {Link} from 'react-router-dom';
import { useState } from 'react';





function Register() {
  const [isFamilyChecked, setIsFamilyChecked] = useState(false);
  const [isVolunteerChecked, setIsVolunteerChecked] = useState(false);

  const handleFamilyChange = () => {
    setIsFamilyChecked(!isFamilyChecked);
    setIsVolunteerChecked(false);
  };

  const handleVolunteerChange = () => {
    setIsVolunteerChecked(!isVolunteerChecked);
    setIsFamilyChecked(false);
  };

  const labelStyle = {
    width: '60%', // Use percentage for width
    height: '2rem', // Use rem for height
    marginLeft: '-25%', // Use percentage for marginLeft
    top: '5rem', // Use rem for top
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontWeight: '505',
    fontSize: '1.25rem', // Use rem for font-size
    lineHeight: '1.75rem', // Use rem for line-height
    color: '#7C838A',
    textAlign: 'left',
  };

  const separatorLeftStyle = {
    borderBottom: '1px solid black',
    width: '40%',
    display: 'inline-block',
    marginLeft: '2%', // Use percentage for marginLeft
    marginBottom: '-5rem', // Use rem for marginBottom
  };

  const separatorRightStyle = {
    borderBottom: '1px solid black',
    width: '40%',
    display: 'inline-block',
    marginLeft: '12.5%', // Use percentage for marginLeft
    marginTop: '-6rem', // Use rem for marginTop
  };

  return (
    <div className="App">
      <Header />

      <div className='main'>
        <div className='flex-container-register'>
          <div className= 'h2-register'> Regístrese</div>
          <a style={labelStyle}>Correo electrónico</a>
          <input
            type='text'
            placeholder='Escriba su correo electrónico'
            style={{ borderRadius: '1rem' }} // Use rem for border-radius
          />

          <a style={labelStyle}>Contraseña</a>
          <input
            type='text'
            placeholder='Escriba su contraseña'
            style={{ borderRadius: '1rem' }} // Use rem for border-radius
          />

          <a style={labelStyle}>Confirme su contraseña</a>
          <input
            type='text'
            placeholder='Repita su contraseña'
            style={{ borderRadius: '1rem' }} // Use rem for border-radius
          />

          <div className="checkbox-group">
            <input
              type="checkbox"
              id="selectCheckboxFamily"
              className="hidden-checkbox"
              checked={isFamilyChecked}
              onChange={handleFamilyChange}
            />
            <label htmlFor="selectCheckboxFamily" className="checkbox-label">
              <span className="custom-checkbox"></span> Registrarse como familiar
            </label>
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              id="selectCheckboxVolunteer"
              className="hidden-checkbox"
              checked={isVolunteerChecked}
              onChange={handleVolunteerChange}
            />
            <label htmlFor="selectCheckboxVolunteer" className="checkbox-label">
              <span className="custom-checkbox"></span> Registrarse como voluntario
            </label>
          </div>

          <button className='button' style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Crear cuenta</button>

          <div className='text' style={{ textIndent: '10%', marginTop: '1.5rem' }}>
            o
          </div>

          <button className='button-google' style={{ marginLeft: '6%', marginTop: '1.5rem' }}>Registrarse con google
            <Link to="https://myaccount.google.com/">
              <img src={google} alt="Logo" className="header-logo" />
            </Link>
          </button>

          <div className='text' style={{ fontFamily: 'Poppins', fontSize: '1rem', fontWeight: 400, color: 'gray' }}>
            ¿Ya tiene una cuenta? <span style={{ color: '#6FC0DB' }}>Inicie sesión aquí</span>.
          </div>

        </div>
      </div>
    </div>
  );
}


export default Register;