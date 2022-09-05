import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header/>
      <Dashboard/>
      <h1>Hello my friends</h1>
      <GlobalStyle/>
    </>
  );
}