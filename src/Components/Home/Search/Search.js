import { Link } from 'react-router-dom';
import './search.css'
import { FaFacebookSquare } from 'react-icons/fa';
import { RiInstagramLine } from 'react-icons/ri';

export const Search = () => {
    return <>
        <div className='main-container'>
            <div className='opacity'></div>
            <p className='text'>ՈՐՏԵ՞Ղ ԵՔ ՑԱՆԿԱՆՈՒՄ ՀԱՆԳՍՏԱՆԱԼ</p>
            <div className='glass'> 
                <input
                    className='search'
                    placeholder='Որոնում (Մարզեր)...'
                />
                <button className='src-btn'>Փնտրել</button>
            </div>
            <p className='subtext'>Հանգստի կատարյալ տարբերակի քո՛ կողմնացույցը</p>
            <div className='media'>
                <Link to='/' className='social-icon-link instagram'>
                    <RiInstagramLine
                        style={{ color: '#fff' }}
                    />
                </Link>
                <Link to='/' className='social-icon-link facebook'>
                    <FaFacebookSquare
                        style={{ color: '#fff' }}
                    />
                </Link>
            </div>
        </div>
    </>
}