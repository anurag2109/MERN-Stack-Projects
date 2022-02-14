import Messanger from "./components/Messanger";
import AccountProvider from "./context/AccountProvider";
import TemplateProvider from "./theme/TemplateProvider";
import UserProvider from "./context/userProvider";
function App() {
  return (
    <TemplateProvider>
      <UserProvider>
        <AccountProvider>
          <Messanger/>
        </AccountProvider>
      </UserProvider>
      </TemplateProvider>
  );
}

export default App;
