import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import WelcomeMessage from "./components/WelcomeMessage";
import UserProfile from "./components/UserProfile";
import Count from "./components/Counter";
import ProfilePage from "./ProfilePage";
import UserContext from "./components/UserContext";

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com", age: 25, bio: "Loves hiking and photography" };

  return (
    <UserContext.Provider value={userData}>
      <WelcomeMessage />
      <Header />
      <MainContent />
      < UserProfile />
      <Count />
      <ProfilePage />
      <Footer />
    </UserContext.Provider>
  );
}

export default App;
