import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./AuthContext";
import Main from "./Main";

function App() {
  const queryClient = new QueryClient();
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <header className="App-header">
            <Main />
          </header>
        </div>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
