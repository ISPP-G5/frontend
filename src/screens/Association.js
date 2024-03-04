import '../styles/styles.css';
import activities from '../logo/activities.bmp';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ActivitiesStructure from '../components/ActivitiesStrcuture';

const info = [
    {title: 'Nosotros', description: 'Pequeña desc explicativa', link: '/nosotros'},
    {title: 'Historia', description: 'Pequeña desc', link: '/historia'},
    {title: 'Mision, Visión y Valores', description: 'Pequeña desc', link: '/mision-vision-valores'},
    {title: 'Dónde estamos', description: 'Pequeña desc', link: '/'},
    {title: 'Entidades Colaboradoras', description: 'Pequeña desc', link: '/'}
];

function Association() {
    return(
        <div className="App">
            <ActivitiesStructure 
                title="ASOCIACION"
                description="Nuestra identidad está marcada por la educación no formal que consideramos fundamental en nuestra zona de actuación y la implantamos de manera dinámica y abierta con el fin de adaptarnos a las nuevas necesidades que nuestros beneficiarios presentan y que descubrimos a través de los estudios de la zona y la observación directa."
                image={activities}
                info={info}
            />
            <Footer/>
        </div>
    );
}

export default Association;