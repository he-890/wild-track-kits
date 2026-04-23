import "./styles/theme.css";
import "./App.css";

import FaqSection from "./components/FaqSection";
import HeroSection from "./components/HeroSection";
import ProductsSection from "./components/ProductsSection";
import SchoolsSection from "./components/SchoolsSection";
import SiteFooter from "./components/SiteFooter";
import StepsSection from "./components/StepsSection";
import Topbar from "./components/Topbar";
import {
  products,
  steps,
  schoolPacks,
  suggested,
  faq,
} from "./data/siteContent";

function App() {
  return (
    <div className="site-shell">
      <Topbar />

      <main>
        <HeroSection />
        <ProductsSection products={products} />
        <StepsSection steps={steps} />
        <SchoolsSection schoolPacks={schoolPacks} suggested={suggested} />
        <FaqSection faq={faq} />
      </main>

      <SiteFooter />
    </div>
  );
}

export default App;
