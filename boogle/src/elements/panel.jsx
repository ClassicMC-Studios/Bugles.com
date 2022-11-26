import logo from './panels/logo.svg';
import './panels/w3.css';
import './panels/bc.css';
function InfoBar(){
    return(
        <div className='w3-container w3-right w3-border w3-border-black w3-margin' style={{width:"20.5%"}}>
            <p className='w3-border-bottom w3-border-black'><b className='bc-text-link'>Bugle</b></p>
            <img src={logo} alt="sus" width={90}/>
            <p><b>Instrument Type</b><br/>•Wind Brass Aerophone</p>
            <p className='bc-green w3-margin-0'>Related Instruments</p>
            <p>Trumpet Cornet</p>
            <p></p>
        </div>
    );
};
export default InfoBar;