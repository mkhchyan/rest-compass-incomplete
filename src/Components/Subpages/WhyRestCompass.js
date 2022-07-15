import { Link } from "react-router-dom"
import './subpages.css'

export const WhyRestCompass = () => {
    return <>
        <div className='layout'>

            <div className="content">
                <h2>
                    Ինչո՞ւ Rest Compass
                </h2>

                <p><span>Մեկ նախադասությամբ՝ սա հանգստի ընտրության իրական կողմնացույց է։</span><br />
                    Հանգստյան վայր ընտրելիս ամենից ժամանակատարը առաջարկների, պայմանների, հարմարավետության և գների համեմատումն է։ Սա հատկապես բարդ է այն պարագայում, երբ հետաքրքրող սուբյեկտները ներկայացված են տարբեր հարթակներում։</p>

                <p style={{ fontStyle: 'italic' }}> <span className="bold" style={{ fontStyle: 'italic' }}>Rest Compass-</span>ը լուծում է այդ խնդիրը։</p>

                <p><span className="bold">Rest Compass-</span>ում հանդիպում են հանգիստը գնահատողները և այդ հանգստի մասին հոգացող հյուրընկալ ընկերությունները։ Կայքը հնարավորություն է տալիս հեշտությամբ համեմատել և ընտրել Ձեր նախապատվություններին առավել համապատասխան տարբերակը՝ խնայելով Ձեր ժամանակն ու էներգիան։</p>

                <p>Մեր կայքի ընձեռած հնարավորություններին, առավելություններին կարող եք ծանոթանալ
                    <Link to='/advantages'> <span>«Rest Compass-</span>ի առավելություններն են» </Link> բաժնում, իսկ պայմաններին՝ <Link to='/terms'><span> «Rest Compass-</span>ի պայմաններն են»</Link> բաժնում։</p>
            </div>
        </div>
    </>
}