// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import siteLogo from '/assets/kikker-footer.svg'
import "./App.css";
import Form from "./Forms.jsx";

function App() {
  return (
    <>
      <div class="flex flex-col items-center rounded-lg bg-white px-32 py-16 mt-4">
        <h1 class="text-center"><b>Aanmelden</b></h1>
        <Form />
      </div>
    </>
  );
}

export default App;