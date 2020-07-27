import React from 'react';

import './styles/App.css';
import './styles/common.css';

import PersonCard from './components/PersonCard'
import SkillsList from "./components/SkillsList";
import IconTitle from "./components/IconTitle";
import ContactsList from "./components/ContactsList";
import ExperienceList from './components/ExperienceList';

import {ReactComponent as CapIcon} from './assets/icons/cap.svg'
import {ReactComponent as CrownIcon} from './assets/icons/crown.svg'
import {ReactComponent as PersonCardIcon} from './assets/icons/personCard.svg'
import {ReactComponent as BagIcon} from './assets/icons/bag.svg'
import About from "./components/About";

export default function App() {
  return (
    <div className="App container">
      <div className="LeftCol" style={{"display":"flex", "flexDirection":"column"}}>
        <div className="layer layer--accent">
          <PersonCard/>
        </div>
        <div className={'layer layer--primary'} style={{"flex":"1 0 auto"}}>
          <IconTitle title="Информация" icon={<CapIcon/>} style={{"marginTop":"0px"}}/>
          <About/>
          <IconTitle title="Скилы" icon={<CrownIcon/>} />
          <SkillsList/>
          <IconTitle title="контакты" icon={<PersonCardIcon/>}/>
          <ContactsList/>
        </div>
      </div>
      <div className="layer RightCol">
        <IconTitle title="Опыт работы" icon={<BagIcon/>} style={{"marginTop":"0px"}}/>
        <ExperienceList/>
      </div>
    </div>
  );
}
