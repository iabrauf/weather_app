// import the library
import { library } from '@fortawesome/fontawesome-svg-core'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import CurrentLocation from './components/CurrentLocation'
import Cities from './components/Cities'


function MyApp() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CurrentLocation />} />
          <Route path="/cities" element={<Cities />} />
        </Routes>
      </Router>
    </>
  )
}

export default MyApp;
library.add(fab, fas, far)
