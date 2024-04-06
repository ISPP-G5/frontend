import '../../styles/styles.css';

import ShowType from '../../components/ShowAuths';
import  { useFetchMyAuths, useFetchNameStudent, useFetchNameLessonEvent } from '../../components/useFetchData'; 
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;


const pantallas = [
  {
    pantalla: 'Autorizaciones hechas',
    link: '/familia/autorizaciones',
    selected: true,
  },
  {
    pantalla: 'Eventos disponibles',
    link: '/familia/autorizaciones/pendientes',
    selected: false,
  },
];

function FamilyAuths() {
  const userId = parseInt(localStorage.getItem('userId'), 10);
  const userAuths = useFetchMyAuths(API_ENDPOINT, userId);
  const nomStudent= useFetchNameStudent(API_ENDPOINT, userAuths);
  const nomEvent= useFetchNameLessonEvent(API_ENDPOINT, userAuths);
  return (
    <ShowType 
      data={userAuths}
      type="Auths" 
      pantallas={pantallas}
      nomStudent = {nomStudent}
      nomEvent = {nomEvent}
      request={false}
    />
    
  );
}

export default FamilyAuths;
