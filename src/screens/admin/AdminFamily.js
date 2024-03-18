import '../../styles/styles.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LayoutProfiles from '../../components/LayoutProfiles';
import Pantallas from '../../components/Pantallas';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT

const pantallas = [
  {
    pantalla: 'Nuestras familias',
    link: '/admin/familias',
    selected: true,
  },
  {
    pantalla: 'Solicitudes',
    link: '/admin/familias/solicitudes',
    selected: false,
  }
];

function AdminFamily() {

  const [families, setFamilies] = useState([]);
  const [kids, setKids] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [evaluations, setEvaluations] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_ENDPOINT}family/`)
      .then((response) => {
        console.log('families:', response.data);
        setFamilies(response.data);
      })
      .catch((error) => {
        console.error('Error fetching families:', error);
      });
    axios
      .get(`${API_ENDPOINT}student/`)
      .then((response) => {
        console.log('students:', response.data);
        setKids(response.data);
      })
      .catch((error) => {
        console.error('Error fetching students:', error);
      });
    axios
      .get(`${API_ENDPOINT}lesson/`)
      .then((response) => {
        console.log('lessons:', response.data);
        setLessons(response.data);
      })
      .catch((error) => {
        console.error('Error fetching lessons:', error);
      });
    axios
      .get(`${API_ENDPOINT}student-evaluation/`)
      .then((response) => {
        console.log('evaluations:', response.data);
        setEvaluations(response.data);
      })
      .catch((error) => {
        console.error('Error fetching evaluations:', error);
      });
  }, []);
  
  return (
    <LayoutProfiles profile={'admin'} selected={'Familias'}>

      <Pantallas pantallas={pantallas}/>

      {families.map((family, index) => (
        <div className='card-info' key={index}>
          <div className='family-info'>
            <p>Nombre familia: {family.name}</p>
            {/*family.info && <p>Information: {family.info}</p>*/}
            <p>Número de niños: {kids.filter(kid => kid.family === family.id).length}</p>
          </div>
          <div className='vertical-line'></div>
          <div className='kids-info'>
            {kids.filter(kid => kid.family === family.id).map((kid, kidIndex) => {
              const kidLesson = lessons.find(lesson => lesson.students.includes(kid.id));
              const kidEvaluation = evaluations.find(evaluation => evaluation.student === kid.id);
              return (
                <div className='kid' key={kidIndex}>
                  <p>Nombre de niño: {kid.name} {kid.surname}</p>
                  <p>Fecha de nacimiento: {kid.birthdate} </p>
                  <p>Curso: {kid.current_education_year} </p>
                  <p>Clase: {kidLesson ? kidLesson.name : 'Not enrolled in any class'}</p>
                  <p>Evaluacion: {kidEvaluation ? kidEvaluation.grade : 'No evaluation'}</p>
                  {kid.status === 'EXPIRED' && <p style={{ color: 'red' }}>EXPIRED</p>}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </LayoutProfiles>
  );
}

export default AdminFamily;