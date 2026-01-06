import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import WelcomeMessage from "./components/WelcomeMessage";
import UserProfile from "./components/UserProfile";
import './App.css'

function App() {
  return (
    <>
      <WelcomeMessage />
      <Header />
      <MainContent />
      < UserProfile name="Kakashi" age="50" bio="Copy ninja"/>
      <Footer />
    </>
  )
}

export default App
