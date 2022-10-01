
import './App.css';
import Navbar  from './Components/Navbar'
import IntroCompo from './Components/IntroCompo';
import ServicesCompo from './Components/ServicesCompo';
import Experince from './Components/Experince';
import WorkSection from './Components/WorkSection';
import ProjectSection from './Components/ProjectSection';
import TestamonialSection from './Components/TestamonialSection';
import ContactSection from './Components/ContactSection';
import FooterSection from './Components/FooterSection';
import {themeContext} from './Context'
import {useContext} from 'react'

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode ;
  return (
    <div 
       style={{
          background:darkMode? 'black' :'',
          color: darkMode? 'white':''
       }}
    >
      <Navbar/>
      <IntroCompo/>
      <ServicesCompo/>
      <Experince/>
      <WorkSection/>
      <ProjectSection/>
      <TestamonialSection/>
      <ContactSection/>
      <FooterSection/>
    </div>
  );
}

export default App;
