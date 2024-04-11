import React, { useState, useEffect } from 'react';
import LayoutProfiles from '../../components/LayoutProfiles';
import axios from 'axios';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

const AdminSchedules = () => {
  const [schedules, setSchedules] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const schedulesResponse = await axios.get(`${API_ENDPOINT}schedule/`);
        const schedulesData = schedulesResponse.data;

        const schedulesWithLessons = await Promise.all(
          schedulesData.map(async (schedule) => {
            const lessonResponse = await axios.get(`${API_ENDPOINT}lesson/${schedule.lesson}`);
            const lessonData = lessonResponse.data;
            return { ...schedule, lessonData };
          })
        );

        setSchedules(schedulesWithLessons);
      } catch (error) {
        console.error('Error fetching schedules:', error);
      }
    };

    fetchSchedules();
  }, []);

  const handleEditSchedule = (scheduleId) => {
    // Navigate to the edit page with the schedule ID as a parameter
    navigate(`/admin/horarios/editar/${scheduleId}`);
  };

  const handleDeleteSchedule = async (scheduleId) => {
    const confirmed = window.confirm('¿Seguro que quieres borrar?');
    if (confirmed) {
      try {
        await axios.delete(`${API_ENDPOINT}schedule/${scheduleId}`);
        // Filter out the deleted schedule from the state
        setSchedules((prevSchedules) => prevSchedules.filter((schedule) => schedule.id !== scheduleId));
        console.log('Schedule deleted successfully');
      } catch (error) {
        console.error('Error deleting schedule:', error);
      }
    }
  };

  return (
    <LayoutProfiles profile={'admin'} selected={'Horarios'}>
      <button className='button' onClick={() => navigate('/admin/clases')} style={{ alignSelf: 'start', marginLeft: '15%' }}>
        Volver
      </button>
      <div className="card-info-suggestion table">
        <h2>Lista de Horarios</h2>
        <table style={{ borderSpacing: '10px' }}>
          <thead>
            <tr>
            <th style={{ wordWrap: 'break-word', width: '15%' }}>Clase</th>
            <th style={{ overflowWrap: 'break-word', width: '15%' }}>Fecha de inicio de la Clase</th>
            <th style={{ overflowWrap: 'break-word', width: '15%' }}>Fecha de fin de la Clase</th>
            <th style={{ overflowWrap: 'break-word', width: '15%' }}>Día de la semana</th>
            <th style={{ overflowWrap: 'break-word', width: '15%' }}>Hora de inicio</th>
            <th style={{ overflowWrap: 'break-word', width: '15%' }}>Hora de fin</th>
            <th style={{ overflowWrap: 'break-word', width: '15%' }}>Editar</th>
            <th style={{ overflowWrap: 'break-word', width: '15%' }}>Eliminar</th>

            </tr>
          </thead>
          <tbody>
            {schedules.map((schedule) => (
              <tr key={schedule.id}>
                <td style={{ backgroundColor: '#cdf0fe', textAlign: 'left', verticalAlign: 'top', wordWrap: 'break-word' }}>{schedule.lessonData.name}</td>
                <td style={{ backgroundColor: '#cdf0fe', textAlign: 'left', verticalAlign: 'top',wordWrap: 'break-word' }}>{schedule.lessonData.start_date}</td>
                <td style={{ backgroundColor: '#cdf0fe', textAlign: 'left', verticalAlign: 'top',wordWrap: 'break-word' }}>{schedule.lessonData.end_date}</td>
                <td style={{ backgroundColor: '#cdf0fe', textAlign: 'left', verticalAlign: 'top',wordWrap: 'break-word' }}>{schedule.weekday}</td>
                <td style={{ backgroundColor: '#cdf0fe', textAlign: 'left', verticalAlign: 'top' ,wordWrap: 'break-word'}}>{schedule.start_time}</td>
                <td style={{ backgroundColor: '#cdf0fe', textAlign: 'left', verticalAlign: 'top',wordWrap: 'break-word' }}>{schedule.end_time}</td>
                <td>
                  <EditIcon onClick={() => handleEditSchedule(schedule.id)} />
                </td>
                <td>
                  <DeleteIcon onClick={() => handleDeleteSchedule(schedule.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </LayoutProfiles>
  );
  
};

export default AdminSchedules;
