import { Link } from "react-router-dom"
import './subpages.css'

export const Careers = () => {
    return <>
        <div className='layout'>
            <div className="heading">
                <h1>
                    Կարիերան մեզ հետ
                </h1>
            </div>
            <div className="content">
                <p><span style={{ fontWeight: 'bold' }}>Rest Compass</span>-ի  թիմին միանալու և առկա աշխատատեղերի վերաբերյալ տեղեկացված լինելու համար հետևեք մեր կայքին և սոցիալական էջերին։ </p>
                <div className="content">

                </div>
                <button id="home">
                    <Link to='/'>Գլխավոր</Link>
                </button>
            </div>


        </div>
    </>
}  