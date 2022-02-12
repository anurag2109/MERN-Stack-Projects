import Messanger from "./components/Messanger";
import AccountProvider from "./context/AccountProvider";
import TemplateProvider from "./theme/TemplateProvider";

function App() {
  return (
    <TemplateProvider>
      <AccountProvider>
        <Messanger/>
      </AccountProvider>
    </TemplateProvider>
  );
}

export default App;
