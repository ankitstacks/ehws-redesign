import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import OurInspiration from "./pages/OurInspiration.jsx";
import NurLkgUkg from "./pages/NurLkgUkg.jsx";
import NurseryEnquiryForm from "./pages/NurseryEnquiryForm.jsx";
import IToIX from "./pages/IToIX.jsx";
import EntranceExamSyllabus from "./pages/EntranceExamSyllabus.jsx";
import OnlineEnquiryForm from "./pages/OnlineEnquiryForm.jsx";
import CareerGuidance from "./pages/CareerGuidance.jsx";
import SportsCoCurricular from "./pages/SportsCoCurricular.jsx";
import Internationalism from "./pages/Internationalism.jsx";
import PhotoGallery from "./pages/PhotoGallery.jsx";
import SchoolUniform from "./pages/SchoolUniform.jsx";
import FeePaymentTutorial from "./pages/FeePaymentTutorial.jsx";
import DocumentsPage from "./pages/DocumentsPage.jsx";
import Introduction from "./pages/Introduction.jsx";
import OurApproach from "./pages/OurApproach.jsx";
import OurCampus from "./pages/OurCampus.jsx";
import AcademicExcellence from "./pages/AcademicExcellence.jsx";
import LearningApproach from "./pages/LearningApproach.jsx";

import "./index.css";

function NotFound() {
  return (
    <main
      style={{
        minHeight: "70vh",
        display: "grid",
        placeItems: "center",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      <div>
        <h1>Page not found</h1>
        <a href="/">Return to homepage</a>
      </div>
    </main>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />

      <Route path="/our-inspiration" element={<OurInspiration />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/introduction" element={<Introduction />} />
      <Route path="/our-approach" element={<OurApproach />} />
      <Route path="/our-campus" element={<OurCampus />} />
      <Route path="/nur-lkg-ukg" element={<NurLkgUkg />} />
      <Route
        path="/online-enquiry-nursery-ukg"
        element={<NurseryEnquiryForm />}
      />
      <Route path="/i-to-ix" element={<IToIX />} />

      <Route path="/online-enquiry-i-to-ix" element={<OnlineEnquiryForm />} />

      <Route
        path="/entrance-exam-syllabus"
        element={<EntranceExamSyllabus />}
      />

      <Route path="/career-guidance" element={<CareerGuidance />} />

      <Route path="/sports-co-curricular" element={<SportsCoCurricular />} />

      <Route path="/internationalism" element={<Internationalism />} />

      <Route path="/photo-gallery" element={<PhotoGallery />} />

      <Route path="/uniform" element={<SchoolUniform />} />

      <Route path="/fee-payment-tutorial" element={<FeePaymentTutorial />} />

      <Route path="/documents" element={<DocumentsPage />} />

      <Route path="/academic-excellence" element={<AcademicExcellence />} />
      <Route path="/learning-approach" element={<LearningApproach />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>,
);
