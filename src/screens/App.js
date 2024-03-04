import Donation from './Donation';
import Suggestions from './Suggestions';
import  Register from './Register';
import LogIn from './LogIn';
import Activities from './Activities'
import Camps from './Camps';
import CoexistenceRoom from './CoexistenceRoom';
import FamilyWorkshop from './FamilyWorkshops';
import OpenRoom from './OpenRoom';
import SummerClub from './SummerClub';
import Transparency from './Transparency';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import '../styles/styles.css';
import AdminProfileUpdate from './AdminProfileUpdate';
import AdminProfile from './AdminProfile';
import HomePage from './HomePage';
import VolunteerForm from './VolunteerForm';
import AVoluntarios from './AdminVoluntarios';
import AEducadores from './AdminEducadores';
import AdminFamily from './AdminFamily';
import AdminFamilyRequests from './AdminFamilyRequests';
import AEducadoresAdd from './AdminEducadoresAdd';
import VoluntariosAdd from './AdminVolunteersAdd';
import AboutUs from './AboutUs';
import History from './History';
import MisionOverviewValues from './MisionOverviewValues';
import Association from './Association';
import AdminFamily from './AdminFamily';
import AdminFamilyRequests from './AdminFamilyRequests';
import ColaboratorEntities from './ColaboratorEntities';
import WhereWeAre from './WhereWeAre';



import Volunteers from './Volunteers';
import Agenda from './Agenda';
import AdminEventos from './AdminEventos';
import AdminClases from './AdminClases';
import AdminProyectos from './AdminProyectos';
import AdminCrearProyecto from './AdminCrearProyecto';



function App() {
  return (
    <Router>
      <Routes>
     
            <Route path="/" element={<HomePage />} />
            <Route path="/donaciones" element={<Donation />} />
            <Route path="/voluntarios" element={<Volunteers />} />
            <Route path="/sugerencias" element={<Suggestions />} />
            <Route path="/registrarse" element={<Register />} />
            <Route path="/iniciar-sesion" element={<LogIn />} />
            <Route path="/actividades" element={<Activities />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/aula-abierta" element={<OpenRoom />} />
            <Route path="/campamentos" element={<Camps />} />
            <Route path="/aula-convivencia" element={<CoexistenceRoom />} />
            <Route path="/form-voluntario" element={<VolunteerForm />} />
            <Route path="/talleres-familiares" element={<FamilyWorkshop />} />
            <Route path="/club-verano" element={<SummerClub />} />
            <Route path="/adminProfile" exact={true} element={<AdminProfile />} />
            <Route path="/adminProfileUpdate" exact={true} element={<AdminProfileUpdate />} />

            <Route path="/adminVoluntarios" element={<AVoluntarios />} />
            <Route path="/adminEducadores" element={<AEducadores />} />

            <Route path="/nosotros" element={<AboutUs />} />
            <Route path="/historia" element={<History />} />
            <Route path="/mision-vision-valores" element={<MisionOverviewValues />} />
            <Route path="/asociacion" element={<Association />} />
       
            <Route path="/transparencia" exact={true} element={<Transparency />} />
            <Route path="/adminPerfil" exact={true} element={<AdminProfile />} />
            <Route path="/adminPerfilActualizar" exact={true} element={<AdminProfileUpdate />} />

            <Route path="/adminFamilias" exact={true} element={<AdminFamily />} />
            <Route path="/adminFamiliasSolicitudes" exact={true} element={<AdminFamilyRequests />} />
            <Route path="/adminAñadirEducador" exact={true} element={<AEducadoresAdd />} />
            <Route path="/adminAñadirVoluntario" exact={true} element={<VoluntariosAdd />} />
            <Route path="/entidades-colaboradoras" exact={true} element={<ColaboratorEntities />} />
            <Route path="/donde-estamos" exact={true} element={<WhereWeAre />} />





      


            <Route path="/adminEventos" exact={true} element={<AdminEventos />} />
            <Route path="/adminClases" exact={true} element={<AdminClases />} />
            <Route path="/adminProyectos" exact={true} element={<AdminProyectos />} />
            <Route path="/adminCrearProyecto" exact={true} element={<AdminCrearProyecto />} />

            </Routes>
    </Router>
  );
}

export default App;
