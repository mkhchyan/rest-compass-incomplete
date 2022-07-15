import { Link } from 'react-router-dom';
import './QRsection.css'
import Img from './image.jpg'

export const QRsection = () => {
    return <>
        <div className='back'>
            <div className='qr'>
                <div className='qr-more'>
                <h3>Հանգստացեք <br/> RestCompass-ի հետ</h3>
                <button><Link to='/info'>Տեսնել ավելին</Link></button>
                </div>
                <div className='qr-img'>
                    <img src={Img} />
                </div>
            </div>
        </div>
    </>
} 