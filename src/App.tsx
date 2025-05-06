import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/home'
import AboutPage from './pages/about'
import ProductsPage from './pages/products'
import ProjectsPage from './pages/projects'
import QualityAssurancePage from './pages/quality-assurance'
import BlogPage from './pages/blog'
import CareersPage from './pages/careers'
import ContactPage from './pages/contact'
import SocialResponsibilitiesPage from './pages/social-responsibilities'
import AwardPage from './pages/awards'
import ProductPage from './pages/products'
import Footer from './components/Footer'
import useScrollToTop from './hooks/useScrollToTop'

function AppContent() {
  useScrollToTop();
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/quality-assurance" element={<QualityAssurancePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/social-responsibilities" element={<SocialResponsibilitiesPage />} />
        <Route path="/awards" element={<AwardPage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App