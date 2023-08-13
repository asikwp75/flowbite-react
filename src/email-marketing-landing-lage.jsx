import Header from './components/email-marketing-landing-page/header';
import DarkMode from './components/email-marketing-landing-page/dark-mode';
import OnwHeroSecton from './components/email-marketing-landing-page/hero-section';
import CompanyLogo from './components/email-marketing-landing-page/company-logo';
import MarketingSolutions from './components/email-marketing-landing-page/marketing-solutions';
import GDPRCompliant from './components/email-marketing-landing-page/gdpr-compliant';
import MarketingTool from './components/email-marketing-landing-page/marketing-tool';
import Conversations from './components/email-marketing-landing-page/conversations';
import EmailMarketingAutomation from './components/email-marketing-landing-page/email-marketing-automation';
import Testimonials from './components/email-marketing-landing-page/testimonials';
import Platform from './components/email-marketing-landing-page/platform';
import About from './components/email-marketing-landing-page/about';
import FooterEmail from './components/email-marketing-landing-page/footer';


function App () {
    return (
        <div className="App">
            <Header />
            <DarkMode />
            <OnwHeroSecton />
            <CompanyLogo />
            <MarketingSolutions />
            <GDPRCompliant />
            <MarketingTool />
            <Conversations />
            <EmailMarketingAutomation />
            <Testimonials />
            <Platform />
            <About />
            <FooterEmail />
        </div>
    )
}

export default App
