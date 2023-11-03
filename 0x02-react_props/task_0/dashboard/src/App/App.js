import '../Header/Header.js'
import '../Footer/Footer.js'
import '../Login/Login.js'
import '../Notifications/Notifications.js'

function App() {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <Login />
        <Footer />
      </div>
    </>
  );
}

export default App;
