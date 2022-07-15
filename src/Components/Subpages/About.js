import { Link } from "react-router-dom"
import './subpages.css'

export const About = () => {
    return <>
        <div className='layout'>

            <div className="content">
                <h2>
                    Rest Compass-ի մասին
                </h2>

                <p>Բարի գալուստ հանգստի լավագույն տարբերակների ընտրության հարթակ։
                    <br />
                    <span className="bold">Rest Compass</span>-ը ինովացիոն միասնական հարթակ է, որտեղ ներկայացված են Հայաստանի և Արցախի լավագույն հյուրանոցները, ընտանեկան հանգստի հյուրանոցները, հյուրատները, հանգստի գոտիները, վարձակալությամբ տրվող ամառանոցներն ու բնակարանները, ինչպես նաև ամենահետաքրքիր ու ճանաչողական տուրերն ու արշավները։</p>

                <p>Իսկ մեր գործընկերների համար մշակել ենք իրենց ընկերության ներկայացման մի ամբողջ համակարգ՝ անձնական էջերի, մի շարք անվճար և վճարովի ծառայությունների ու փաթեթների տեսքով։</p>

                <p>Առաջարկվող պայմաններին և ծառայություններին առավել մանրամասն կարող եք ծանոթանալ <Link to='/terms'> <span>«Rest Compass-</span>ի պայմաններն են»</Link> և <Link to='/advantages'> <span>«Rest Compass-</span>ի առավելություններն են» </Link> էջերում։ </p>

                <p><span className="bold">Rest Compass</span>-ի  թիմը նպատակ ունի կառուցել գործընկերային մեծ ցանց, որը հետագայում կընդլայնի իր սահմանները՝ մուտք գործելով միջազգային շուկա և աշխարհում ճանաչելի դարձնելով հայաստանյան ևս մեկ ստարտափ նախագիծ։</p>
            </div>
        </div>
    </>
}