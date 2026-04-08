import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Adopt from './pages/Adopt';
import Urgent from './pages/Urgent';
import Donations from './pages/Donations';
import LostAndFound from './pages/LostAndFound';
import ListingDetail from './pages/ListingDetail';
import ApplicationForm from './pages/ApplicationForm';
import DonateForm from './pages/DonateForm';
import Success from './pages/Success';
import Profile from './pages/Profile';
import ProfileSettings from './pages/ProfileSettings';
import Favorites from './pages/Favorites';
import Applications from './pages/Applications';
import DonationHistory from './pages/DonationHistory';
import CreateListing from './pages/CreateListing';
import Messages from './pages/Messages';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/urgent" element={<Urgent />} />
          <Route path="/support" element={<Donations />} />
          <Route path="/lost-and-found" element={<LostAndFound />} />
          <Route path="/listing/:id" element={<ListingDetail />} />
          <Route path="/apply/:id" element={<ApplicationForm />} />
          <Route path="/donate/:id" element={<DonateForm />} />
          <Route path="/success" element={<Success />} />
          
          {/* Profile Routes Group */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/settings" element={<ProfileSettings />} />
          <Route path="/profile/favorites" element={<Favorites />} />
          <Route path="/profile/applications" element={<Applications />} />
          <Route path="/profile/donations" element={<DonationHistory />} />
          
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
