import Prog1 from '../images/Prog1.png';
import Prog2 from '../images/Prog2.png';
import Prog3 from '../images/Prog3.png';
import Prog4 from '../images/Prog4.png';

export default function ProgressBar({progressbar}) {
  return (
    <div style={{margin: '15px 0'}}>
      {
        progressbar === 1 ? 
        <img style={{width: '18rem'}} src={Prog1} alt="progress1" /> : 
        progressbar === 2 ?
        <img style={{width: '18rem'}} src={Prog2} alt="progress2" /> :
        progressbar === 3 ?
        <img style={{width: '18rem'}} src={Prog3} alt="progress3" /> :
        progressbar === 4 ?
        <img style={{width: '18rem'}} src={Prog4} alt="progress4" /> : 
        <></>
      }
    </div>
  )
}