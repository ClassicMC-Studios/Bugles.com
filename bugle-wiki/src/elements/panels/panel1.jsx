import logo from './logo.svg';
import './w3.css'
function InfoBar(){
    return(
        <div className='w3-container w3-right w3-border w3-border-black w3-margin'>
            <p className='w3-border-bottom w3-border-black'><b>Bugle</b></p>
            <img src={logo} alt="sus" width={90}/>
            <p><b>Instrument Type</b><br/>•Wind-Brass-Aerophone•</p>
            <p className='w3-green w3-margin-0'>Related Instruments</p>
            <p className='w3-left'>Trumpet,Cornet</p>
            <p></p>
        </div>
    );
};
export default InfoBar;