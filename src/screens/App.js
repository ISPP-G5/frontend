
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
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import '../styles/styles.css';
import AdminProfileUpdate from './AdminProfileUpdate';
import AdminProfile from './AdminProfile';
import HomePage from './HomePage';
import AdminEvents from './admin/AdminEvents';
import AdminLessons from './admin/AdminLessons';
import AdminProjects from './admin/AdminProyects';
import VolunteerForm from './VolunteerForm';
import AdminFamily from './AdminFamily';
import AdminFamilyRequests from './AdminFamilyRequests';

function App() {
  return (
    <Router>
      <Routes>
     
            <Route path="/" element={<HomePage />} />
            <Route path="/donaciones" element={<Donation />} />
            <Route path="/sugerencias" element={<Suggestions />} />
            <Route path="/registrarse" element={<Register />} />
            <Route path="/iniciar-sesion" element={<LogIn />} />
            <Route path="/actividades" element={<Activities />} />
            <Route path="/aula-abierta" element={<OpenRoom />} />
            <Route path="/campamentos" element={<Camps />} />
            <Route path="/aula-convivencia" element={<CoexistenceRoom />} />
            <Route path="/form-voluntario" element={<VolunteerForm />} />
            <Route path="/talleres-familiares" element={<FamilyWorkshop />} />
            <Route path="/club-verano" element={<SummerClub />} />
            <Route path="/adminProfile" exact={true} element={<AdminProfile />} />
            <Route path="/adminProfileUpdate" exact={true} element={<AdminProfileUpdate />} />
            <Route path="/adminEvents" exact={true} element={<AdminEvents />} />
            <Route path="/adminLessons" exact={true} element={<AdminLessons />} />
            <Route path="/adminProjects" exact={true} element={<AdminProjects />} />
            <Route path="/adminFamily" exact={true} element={<AdminFamily />} />
            <Route path="/adminFamilyRequests" exact={true} element={<AdminFamilyRequests />} />

            </Routes>
    </Router>
  );
}
export default App;