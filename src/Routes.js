import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Components/Home'
import { About } from './Components/Subpages/About'
import { MainHOC } from './HOC'
import { Advantages } from './Components/Subpages/Advantages'
import { Terms } from './Components/Subpages/Terms'
import { WhyRestCompass } from './Components/Subpages/WhyRestCompass'
import { Careers } from './Components/Subpages/Careers'
import { Privacy } from './Components/Subpages/Privacy'
import { Suggestions } from './Components/Subpages/Suggestions'
import { TripsInfo } from './Components/Home/Bonus/TripsInfo'
import { Signup } from './Components/Signup/Signup'
import { Login } from './Components/Login/Login'
import { ContactForm } from './Components/Subpages/ContactForm'

export const Router = () => {
	return <>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainHOC />}>
					<Route path="" element={<Home />} />
					{/* <Route path="where_to_go_on_weekend" element={<Weekend />} /> */}
					<Route path="login" element={<Login />} />
					<Route path="signup" element={<Signup />} />
					<Route path='info' element={<TripsInfo />} />
				</Route>

				<Route path='/' element={<MainHOC />}>
					<Route path="about" element={<About />} />
					<Route path="why-rest-compass" element={<WhyRestCompass />} />
					<Route path="advantages" element={<Advantages />} />
					<Route path="terms" element={<Terms />} />

 					<Route path="contact" element={<ContactForm />} />
					<Route path="careers" element={<Careers />} />
					<Route path="privacy-policy" element={<Privacy />} />
					<Route path="suggestions" element={<Suggestions />} />


				</Route>
			</Routes>
		</BrowserRouter>
	</>
}

