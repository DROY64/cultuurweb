import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import siteLogo from '/assets/kikker-footer.svg'
import "./App.css";

function MyForm() {
  const [selectedSex, setSelectedSex] = useState("banana");

  const handleChange = (event) => {
    setSelectedSex(event.target.value);
  };

  return (
    <>
      <h1>Instelling aanmelden</h1>
      <form>
        <div class="aanhefRadio">
          <p>Aanhef:</p>
          <div className="choices">
            <input
              type="radio"
              name="Dhr."
              id="dhr"
              value="M"
              checked={selectedSex === "Dhr."}
              onChange={handleChange}
            />
            <label For="dhr"> Dhr. </label>

            <input
              type="radio"
              name="Mevr."
              id="mevr"
              value="V"
              checked={selectedSex === "Mevr."}
              onChange={handleChange}
            />
            <label For="mevr">Mevr. </label>

            <input
              type="radio"
              name="Onbekend"
              id="onb"
              value="X"
              checked={selectedSex === " "}
              onChange={handleChange}
            />
            <label htmlFor="onb">Onbekend </label>
          </div>
        </div>
        <br />
        <label>
          Naam:
          <input type="text" name="voor" required placeholder="Voornaam" />
          <input
            type="text"
            name="tnaam"
            required
            placeholder="Tussenvoegsel(S)"
          />
          <input type="text" name="achter" required placeholder="Achternaam" />
        </label>
        <br />
        <div>
          <label htmlFor="mailc"> </label>
          Email Contactpersoon
          <input type="email" name="mailc" id="mailc" required />
        </div>
        <div>
          <label htmlFor="mailcc"> </label>
          Email Contactpersoon controle
          <input type="email" name="mailcc" id="mailcc" required />
        </div>
        <div>
          <label For="telc"> </label>
          Email Contactpersoon
          <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"><i class="fa-solid fa-envelope"></i></div>
          <input type="tel" name="telc" id="telc" required />
        </div>
        <div>
          <label for="price" class="block text-sm/6 font-medium text-gray-900">Price</label>
          <div class="mt-2">
            <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
              <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">$</div>
              <input id="price" type="text" name="price" placeholder="0.00" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
              <div class="grid shrink-0 grid-cols-1 focus-within:relative">
                <select id="currency" name="currency" aria-label="Currency" class="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                  <option>USD</option>
                  <option>CAD</option>
                  <option>EUR</option>
                </select>
                <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4">
                  <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <br />
        <button type="submit">Verder</button>
      </form>
    </>
  );
}

function App() {
  return (
    (
      <>
        <h1>Aanmelding</h1>
      </>
    ),
    (<MyForm />)
  );
}

export default App;
