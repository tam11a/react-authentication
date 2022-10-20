import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./AuthContext";
import Main from "./Main";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className="App">
          <header className="App-header">
            <Main />
          </header>
        </div>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
