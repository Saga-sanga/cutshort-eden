import EdenLogo from '../EdenLogo.png';
import ProgressBar from './ProgressBar';
import NameForm from './NameForm';
import Workspace from './Workspace';
import { useState } from 'react';
import UseCase from './UseCase';
import Launch from './Launch';

const textContent = [
  {
    header: "Welcome! First things first...",
    subText: "You can always change them later."
  },
  {
    header: "Let's set up a home for all your work",
    subText: "You can always create another workspace later."
  },
  {
    header: "How are you planning to use Eden?",
    subText: "We'll streamline your setup experience accordingly."
  },
  {
    header: "Congratulations, ",
    subText: "You have completed onboarding, you can start using Eden!"
  },
];

export default function Card() {
  // const [progressbar, setProgressBar] = useState(1);
  const [page, setPage] = useState(1);
  const [dispName, setDispName] = useState('Allan'); 

  function focusElement(event) {
    // event.target.focus();
    document.querySelector(".use-case-div").focus();
    console.log(event.target);
  }

  const onButtonClick = () => { 
    setPage(page + 1);
    console.log("click!");
  };

  const textChange = (event) => {
    setDispName(event.target.value);
  }

  return (
    <div className="card-container">
      <span className="heading-style">
        <img src={EdenLogo} alt="logo" /> 
        <h2 style={{marginLeft: '4px'}}>Eden</h2>
      </span>

      <ProgressBar progressbar={page}/>

      <div className="card-container">
        {/* <TitleText textContent={textContent[page - 1]}/> */}

        {
          page === 1 ?
          <NameForm 
            onButtonClick={onButtonClick} 
            textContent={textContent[page - 1]} 
            textChange={textChange}
          /> :
          page === 2 ? 
          <Workspace 
            onButtonClick={onButtonClick}
            textContent={textContent[page - 1]}
          /> : 
          page === 3 ? 
          <UseCase 
            focusElement={focusElement}
            onButtonClick={onButtonClick} 
            textContent={textContent[page - 1]}
          /> :
          page === 4 ? 
          <Launch 
            textContent={textContent[page - 1]}
            dispName={dispName}
          /> :
          <></>
        }
        
      </div>

    </div>
  );
}