import '../styles/styles.css';
import Header from '../components/Header';
import Intro from '../components/Intro';
import HomepageContainer from '../components/HomepageContainer';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';


const info = [
    {
      title: '¿Quiénes son?',
      description: 'Grupo de personas con iniciativa y ganas de colaborar para la realización de las diferentes actividades y proyectos.'
    },
    {
      title: '¿Existe un limite de edad?',
      description: 'No,todo el mundo es bienvenido.Actuamente, nuestros voluntarios parten de los 18 años hasta los 60.',
    },
    {
      title: '¿Quieres ser voluntario?',
      description: 'Si esta interesado en ser voluntario pulse el siguiente botón.',
      link: '/form-voluntario',
      button: 'Participa con nosotros',
    },
  ];

function Volunteers () {
    return (
        <div className="App">
            <Header />
            <Intro 
                title="Voluntarios"
                description="Gracias a la colaboración de nuestros voluntarios los proyectos y actividades son posibles de realizar."
                image={'volunteers'}
            />

            <HomepageContainer info={info} />
            <Footer />
        </div>
         );
    }
export default Volunteers;