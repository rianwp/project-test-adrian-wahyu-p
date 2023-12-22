import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom"
import Layout from "./components/Shared/Layout"
import Ideas from "./pages/Ideas"
import WorkExample from "./pages/WorkExample"
import AboutExample from "./pages/AboutExample"
import CareersExample from "./pages/CareersExample"
import ServicesExample from "./pages/ServicesExample"
import ContactExample from "./pages/ContactExample"
import NotFound from "./components/NotFound"
import { RecoilRoot } from "recoil"

function App() {
	return (
		<RecoilRoot>
			<Router>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route path="" index element={<Navigate to="/ideas" replace />} />
						<Route path="ideas" element={<Ideas />} />
						<Route path="work" element={<WorkExample />} />
						<Route path="about" element={<AboutExample />} />
						<Route path="careers" element={<CareersExample />} />
						<Route path="services" element={<ServicesExample />} />
						<Route path="contact" element={<ContactExample />} />
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</RecoilRoot>
	)
}

export default App
