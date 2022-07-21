import Prog1 from '../images/Prog1.png';
import Prog2 from '../images/Prog2.png';
import Prog3 from '../images/Prog3.png';
import Prog4 from '../images/Prog4.png';

export default function ProgressBar({progressbar}) {
  return (
    <div style={{margin: '25px 0'}}>
      {
        progressbar === 1 ? 
        <img style={{width: '18rem'}} src={Prog1} alt="progress 1" /> : 
        progressbar === 2 ?
        <img style={{width: '18rem'}} src={Prog2} alt="progress 2" /> :
        progressbar === 3 ?
        <img style={{width: '18rem'}} src={Prog3} alt="progress 3" /> :
        progressbar === 4 ?
        <img style={{width: '18rem'}} src={Prog4} alt="progress 4" /> : 
        <></>
      }
    </div>
  )
}