import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import BookConsultation from "./pages/BookConsultation";
import PatientInfo from "./pages/PatientInfo";
import KneeReplacement from "./pages/KneeReplacement";
import HipReplacement from "./pages/HipReplacement";
import RevisionJointSurgery from "./pages/RevisionJointSurgery";
import MinimallyInvasiveSurgery from "./pages/MinimallyInvasiveSurgery";
import RehabilitationCare from "./pages/RehabilitationCare";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/knee-replacement" element={<KneeReplacement />} />
          <Route path="/services/hip-replacement" element={<HipReplacement />} />
          <Route path="/services/revision-surgery" element={<RevisionJointSurgery />} />
          <Route path="/services/minimally-invasive" element={<MinimallyInvasiveSurgery />} />
          <Route path="/services/rehabilitation" element={<RehabilitationCare />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/patient-info" element={<PatientInfo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-consultation" element={<BookConsultation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
