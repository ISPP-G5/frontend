import { Link} from 'react-router-dom';
import '../styles/styles.css';
import logo from '../logo/macn-logo.png';
import HeaderAdmin from '../components/HeaderAdmin';
import MenuAdmin from '../components/MenuAdmin';

const families = [
    {
      name: 'Family 1',
      info: 'Some information',
      kids: [
        { name: 'Kid 1', class: 'Class 1', evaluation: 'Good' },
      ],
    },
    {
      name: 'Family 2',
      info: 'Some information',
      kids: [
        { name: 'Kid 1', class: 'Class 1', evaluation: 'Good' },
        { name: 'Kid 2', class: 'Class 2', evaluation: 'Good' },
      ],
    },
    {
      name: 'Family 3',
      info: 'Some information',
      kids: [
        { name: 'Kid 1', class: 'Class 1', evaluation: 'Good' },
        { name: 'Kid 2', class: 'Class 2', evaluation: 'Good' },
        { name: 'Kid 3', class: 'Class 3', evaluation: 'Good' },
      ],
    },
  ];

function AdminFamily() {
  return (
    <div className='App'>
        <HeaderAdmin />
        <div className='admin-main'>
            <MenuAdmin />
            <div className='vertical-line'></div>  
            <div className='admin-container'>
                <div className='pantallas'>
                    <a href='/AdminFamily' className='selected-pantalla'>Nuestras familias</a>
                    <a href='/AdminFamilyRequests'>Solicitudes</a>
                </div>
                {families.map((family, index) => (
                <div className='card-info' key={index}>
                    <div className='family-info'>
                        <p>Name: {family.name}</p>
                        <p>Information: {family.info}</p>
                        <p>Number of kids: {family.kids.length}</p>
                    </div>
                    <div className='vertical-line'></div>
                    <div className='kids-info'>
                        {family.kids.map((kid, kidIndex) => (
                            <div className='kid' key={kidIndex}>
                                <p>Kid's Name: {kid.name}</p>
                                <p>Class: {kid.class}</p>
                                <p>Evaluation: {kid.evaluation}</p>
                            </div>
                        ))}
                    </div>
                </div>
                ))}
            </div>
        </div>        
    </div>
  );
}

export default AdminFamily;