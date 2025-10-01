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

  // function handleBack {
  //   return (

  //   )
  // }

  // function handleContinue() {
  //   return (
  //     (<MyForm2/>)
  //   )
  // }

  return (
    <>
      <h1>Instelling aanmelden</h1>
      <form>
        <fieldset>
          <legend class="text-sm/6 font-semibold text-black">Aanhef</legend>
          <div class="mt-6 flex-row space-y-6">
            <div class="flex items-center gap-x-3">
              <input
                id="dhr"
                type="radio"
                name="deheer"
                value="M"
                checked={selectedSex === "Dhr."}
                onChange={handleChange}
                class="relative size-4 appearance-none rounded-full border border-white/10 bg-white/5 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:border-white/5 disabled:bg-white/10 disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden"
              />
              <label
                htmlFor="dhr"
                class="block text-sm/6 font-medium text-black"
              >
                Dhr.
              </label>
            </div>
            <div class="flex items-center gap-x-3">
              <input
                id="mevr"
                type="radio"
                name="mevrouw"
                value="V"
                checked={selectedSex === "Mevr."}
                onChange={handleChange}
                class="relative size-4 appearance-none rounded-full border border-white/10 bg-white/5 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:border-white/5 disabled:bg-white/10 disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden"
              />
              <label
                htmlFor="mevr"
                class="block text-sm/6 font-medium text-black"
              >
                Mevr.
              </label>
            </div>
            <div class="flex items-center gap-x-3">
              <input
                id="onb"
                type="radio"
                name="onbekend"
                value="X"
                checked={selectedSex === " "}
                onChange={handleChange}
                class="relative size-4 appearance-none rounded-full border border-white/10 bg-white/5 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:border-white/5 disabled:bg-white/10 disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden"
              />
              <label
                htmlFor="onb"
                class="block text-sm/6 font-medium text-black"
              >
                Onbekend
              </label>
            </div>
          </div>
        </fieldset>
        <br />
        <label>
          Naam:
          <input type="text" name="voor" required placeholder="Voornaam" />
          <input
            type="text"
            name="tnaam"
            required
            placeholder="Tussenvoegsel(s)"
          />
          <input type="text" name="achter" required placeholder="Achternaam" />
        </label>
        <br />
        <div>
          <label htmlFor="mailc" class="block text-sm/6 mt-3">
            Email Contactpersoon
          </label>

          <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
            <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <input
              type="email"
              name="mailc"
              placeholder="mail@voorbeeld.nl"
              id="mailc"
              required
              class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="mailcc" class="block text-sm/6 mt-3"> Email Contactpersoon controle </label>
          <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
            <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <input
              type="email"
              name="mailcc"
              id="mailcc"
              placeholder="mail@voorbeeld.nl"
              required
              class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="telc" class="block text-sm/6 mt-3"> Telefoonnummer Contactpersoon </label>

          <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
            <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
              +31
            </div>
            <input
              type="tel"
              name="telc"
              id="telc"
              pattern="[0-9]{9}"
              required
              class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="price"
            class="block text-sm/6 font-medium text-gray-900"
          >
            Price
          </label>
          <div class="mt-2">
            <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
              <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                $
              </div>
              <input
                id="price"
                type="text"
                name="price"
                placeholder="0.00"
                class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
              />
              <div class="grid shrink-0 grid-cols-1 focus-within:relative">
                <select
                  id="currency"
                  name="currency"
                  aria-label="Currency"
                  class="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option>USD</option>
                  <option>CAD</option>
                  <option>EUR</option>
                </select>
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  data-slot="icon"
                  aria-hidden="true"
                  class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                >
                  <path
                    d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="mt-6 flex items-center justify-center gap-x-6">
          <button type="button" class="rounded-md text-sm/6 outline-1 -outline-offset-1 outline-gray-300 px-16 py-2 bg-transparent font-semibold text-black"><i class="fa-solid fa-xmark"></i> Annuleer</button>
          <button type="submit" class="rounded-md bg-black px-16 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Verder <i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </form>
    </>
  );
}

function MyForm2() {
  const [selectedSex, setSelectedSex] = useState("banana");

  const handleChange = (event) => {
    setSelectedSex(event.target.value);
  };

  return (
    <>
      <h1>Instelling aanmelden</h1>
      <form>
        <fieldset>
          <legend class="text-sm/6 font-semibold text-black">Aanhef</legend>
          <div class="mt-6 flex-row space-y-6">
            <div class="flex items-center gap-x-3">
              <input
                id="dhr"
                type="radio"
                name="deheer"
                value="M"
                checked={selectedSex === "Dhr."}
                onChange={handleChange}
                class="relative size-4 appearance-none rounded-full border border-white/10 bg-white/5 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:border-white/5 disabled:bg-white/10 disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden"
              />
              <label
                htmlFor="dhr"
                class="block text-sm/6 font-medium text-black"
              >
                Dhr.
              </label>
            </div>
            <div class="flex items-center gap-x-3">
              <input
                id="mevr"
                type="radio"
                name="mevrouw"
                value="V"
                checked={selectedSex === "Mevr."}
                onChange={handleChange}
                class="relative size-4 appearance-none rounded-full border border-white/10 bg-white/5 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:border-white/5 disabled:bg-white/10 disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden"
              />
              <label
                htmlFor="mevr"
                class="block text-sm/6 font-medium text-black"
              >
                Mevr.
              </label>
            </div>
            <div class="flex items-center gap-x-3">
              <input
                id="onb"
                type="radio"
                name="onbekend"
                value="X"
                checked={selectedSex === " "}
                onChange={handleChange}
                class="relative size-4 appearance-none rounded-full border border-white/10 bg-white/5 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:border-white/5 disabled:bg-white/10 disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden"
              />
              <label
                htmlFor="onb"
                class="block text-sm/6 font-medium text-black"
              >
                Onbekend
              </label>
            </div>
          </div>
        </fieldset>
        <br />
        <label>
          Naam:
          <input type="text" name="voor" required placeholder="Voornaam" />
          <input
            type="text"
            name="tnaam"
            required
            placeholder="Tussenvoegsel(s)"
          />
          <input type="text" name="achter" required placeholder="Achternaam" />
        </label>
        <br />
        <div>
          <label htmlFor="mailc" class="block text-sm/6 mt-3">
            Email Contactpersoon
          </label>

          <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
            <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <input
              type="email"
              name="mailc"
              placeholder="mail@voorbeeld.nl"
              id="mailc"
              required
              class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="mailcc" class="block text-sm/6 mt-3"> Email Contactpersoon controle </label>
          <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
            <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <input
              type="email"
              name="mailcc"
              id="mailcc"
              placeholder="mail@voorbeeld.nl"
              required
              class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="telc" class="block text-sm/6 mt-3"> Telefoonnummer Contactpersoon </label>

          <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
            <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
              +31
            </div>
            <input
              type="tel"
              name="telc"
              id="telc"
              pattern="[0-9]{9}"
              required
              class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="price"
            class="block text-sm/6 font-medium text-gray-900"
          >
            Price
          </label>
          <div class="mt-2">
            <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
              <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                $
              </div>
              <input
                id="price"
                type="text"
                name="price"
                placeholder="0.00"
                class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
              />
              <div class="grid shrink-0 grid-cols-1 focus-within:relative">
                <select
                  id="currency"
                  name="currency"
                  aria-label="Currency"
                  class="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option>USD</option>
                  <option>CAD</option>
                  <option>EUR</option>
                </select>
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  data-slot="icon"
                  aria-hidden="true"
                  class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                >
                  <path
                    d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="mt-6 flex items-center justify-center gap-x-6">
          <button type="button" class="rounded-md text-sm/6 outline-1 -outline-offset-1 outline-gray-300 px-16 py-2 bg-transparent font-semibold text-black"><i class="fa-solid fa-xmark"></i> Annuleer</button>
          <button type="submit" class="rounded-md bg-black px-16 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Verder <i class="fa-solid fa-arrow-right"></i></button>
        </div>
        {/* <button type="submit">Verder</button> */}
      </form>
    </>
  );
}

function MyForm3() {
  const [selectedSex, setSelectedSex] = useState("banana");

  const handleChange = (event) => {
    setSelectedSex(event.target.value);
  };

  return (
    <>
      <h1>Instelling aanmelden</h1>
      <form>
        <fieldset>
          <legend class="text-sm/6 font-semibold text-black">Aanhef</legend>
          <div class="mt-6 flex-row space-y-6">
            <div class="flex items-center gap-x-3">
              <input
                id="dhr"
                type="radio"
                name="deheer"
                value="M"
                checked={selectedSex === "Dhr."}
                onChange={handleChange}
                class="relative size-4 appearance-none rounded-full border border-white/10 bg-white/5 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:border-white/5 disabled:bg-white/10 disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden"
              />
              <label
                htmlFor="dhr"
                class="block text-sm/6 font-medium text-black"
              >
                Dhr.
              </label>
            </div>
            <div class="flex items-center gap-x-3">
              <input
                id="mevr"
                type="radio"
                name="mevrouw"
                value="V"
                checked={selectedSex === "Mevr."}
                onChange={handleChange}
                class="relative size-4 appearance-none rounded-full border border-white/10 bg-white/5 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:border-white/5 disabled:bg-white/10 disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden"
              />
              <label
                htmlFor="mevr"
                class="block text-sm/6 font-medium text-black"
              >
                Mevr.
              </label>
            </div>
            <div class="flex items-center gap-x-3">
              <input
                id="onb"
                type="radio"
                name="onbekend"
                value="X"
                checked={selectedSex === " "}
                onChange={handleChange}
                class="relative size-4 appearance-none rounded-full border border-white/10 bg-white/5 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:border-white/5 disabled:bg-white/10 disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden"
              />
              <label
                htmlFor="onb"
                class="block text-sm/6 font-medium text-black"
              >
                Onbekend
              </label>
            </div>
          </div>
        </fieldset>
        <br />
        <label>
          Naam:
          <input type="text" name="voor" required placeholder="Voornaam" />
          <input
            type="text"
            name="tnaam"
            required
            placeholder="Tussenvoegsel(s)"
          />
          <input type="text" name="achter" required placeholder="Achternaam" />
        </label>
        <br />
        <div>
          <label htmlFor="mailc" class="block text-sm/6 mt-3">
            Email Contactpersoon
          </label>

          <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
            <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <input
              type="email"
              name="mailc"
              placeholder="mail@voorbeeld.nl"
              id="mailc"
              required
              class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="mailcc" class="block text-sm/6 mt-3"> Email Contactpersoon controle </label>
          <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
            <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <input
              type="email"
              name="mailcc"
              id="mailcc"
              placeholder="mail@voorbeeld.nl"
              required
              class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="telc" class="block text-sm/6 mt-3"> Telefoonnummer Contactpersoon </label>

          <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
            <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
              +31
            </div>
            <input
              type="tel"
              name="telc"
              id="telc"
              pattern="[0-9]{9}"
              required
              class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="price"
            class="block text-sm/6 font-medium text-gray-900"
          >
            Price
          </label>
          <div class="mt-2">
            <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
              <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                $
              </div>
              <input
                id="price"
                type="text"
                name="price"
                placeholder="0.00"
                class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
              />
              <div class="grid shrink-0 grid-cols-1 focus-within:relative">
                <select
                  id="currency"
                  name="currency"
                  aria-label="Currency"
                  class="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option>USD</option>
                  <option>CAD</option>
                  <option>EUR</option>
                </select>
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  data-slot="icon"
                  aria-hidden="true"
                  class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                >
                  <path
                    d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="mt-6 flex items-center justify-center gap-x-6">
          <button type="button" class="rounded-md text-sm/6 outline-1 -outline-offset-1 outline-gray-300 px-16 py-2 bg-transparent font-semibold text-black"><i class="fa-solid fa-xmark"></i> Annuleer</button>
          <button type="submit" class="rounded-md bg-black px-16 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Verder <i class="fa-solid fa-arrow-right"></i></button>
        </div>
        {/* <button type="submit">Verder</button> */}
      </form>
    </>
  );
}

function MyFormSummary() {
  const [selectedSex, setSelectedSex] = useState("banana");

  const handleChange = (event) => {
    setSelectedSex(event.target.value);
  };

  return (
    <>
      <h1>Instelling aanmelden</h1>
      <form>
        <fieldset>
          <legend class="text-sm/6 font-semibold text-black">Aanhef</legend>
          <div class="mt-6 flex-row space-y-6">
            <div class="flex items-center gap-x-3">
              <input
                id="dhr"
                type="radio"
                name="deheer"
                value="M"
                checked={selectedSex === "Dhr."}
                onChange={handleChange}
                class="relative size-4 appearance-none rounded-full border border-white/10 bg-white/5 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:border-white/5 disabled:bg-white/10 disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden"
              />
              <label
                htmlFor="dhr"
                class="block text-sm/6 font-medium text-black"
              >
                Dhr.
              </label>
            </div>
            <div class="flex items-center gap-x-3">
              <input
                id="mevr"
                type="radio"
                name="mevrouw"
                value="V"
                checked={selectedSex === "Mevr."}
                onChange={handleChange}
                class="relative size-4 appearance-none rounded-full border border-white/10 bg-white/5 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:border-white/5 disabled:bg-white/10 disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden"
              />
              <label
                htmlFor="mevr"
                class="block text-sm/6 font-medium text-black"
              >
                Mevr.
              </label>
            </div>
            <div class="flex items-center gap-x-3">
              <input
                id="onb"
                type="radio"
                name="onbekend"
                value="X"
                checked={selectedSex === " "}
                onChange={handleChange}
                class="relative size-4 appearance-none rounded-full border border-white/10 bg-white/5 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:border-white/5 disabled:bg-white/10 disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden"
              />
              <label
                htmlFor="onb"
                class="block text-sm/6 font-medium text-black"
              >
                Onbekend
              </label>
            </div>
          </div>
        </fieldset>
        <br />
        <label>
          Naam:
          <input type="text" name="voor" required placeholder="Voornaam" />
          <input
            type="text"
            name="tnaam"
            required
            placeholder="Tussenvoegsel(s)"
          />
          <input type="text" name="achter" required placeholder="Achternaam" />
        </label>
        <br />
        <div>
          <label htmlFor="mailc" class="block text-sm/6 mt-3">
            Email Contactpersoon
          </label>

          <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
            <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <input
              type="email"
              name="mailc"
              placeholder="mail@voorbeeld.nl"
              id="mailc"
              required
              class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="mailcc" class="block text-sm/6 mt-3"> Email Contactpersoon controle </label>
          <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
            <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <input
              type="email"
              name="mailcc"
              id="mailcc"
              placeholder="mail@voorbeeld.nl"
              required
              class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="telc" class="block text-sm/6 mt-3"> Telefoonnummer Contactpersoon </label>

          <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
            <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
              +31
            </div>
            <input
              type="tel"
              name="telc"
              id="telc"
              pattern="[0-9]{9}"
              required
              class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="price"
            class="block text-sm/6 font-medium text-gray-900"
          >
            Price
          </label>
          <div class="mt-2">
            <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
              <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                $
              </div>
              <input
                id="price"
                type="text"
                name="price"
                placeholder="0.00"
                class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
              />
              <div class="grid shrink-0 grid-cols-1 focus-within:relative">
                <select
                  id="currency"
                  name="currency"
                  aria-label="Currency"
                  class="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option>USD</option>
                  <option>CAD</option>
                  <option>EUR</option>
                </select>
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  data-slot="icon"
                  aria-hidden="true"
                  class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                >
                  <path
                    d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="mt-6 flex items-center justify-center gap-x-6">
          <button type="button" class="rounded-md text-sm/6 outline-1 -outline-offset-1 outline-gray-300 px-16 py-2 bg-transparent font-semibold text-black"><i class="fa-solid fa-xmark"></i> Annuleer</button>
          <button type="submit" class="rounded-md bg-black px-16 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Verder <i class="fa-solid fa-arrow-right"></i></button>
        </div>
        {/* <button type="submit">Verder</button> */}
      </form>
    </>
  );
}

function MyFormConfirm() {
  const [selectedSex, setSelectedSex] = useState("banana");

  const handleChange = (event) => {
    setSelectedSex(event.target.value);
  };

  return (
    <>
      <h1>Instelling aanmelden</h1>
      <form>
        <fieldset>
          <legend class="text-sm/6 font-semibold text-black">Aanhef</legend>
          <div class="mt-6 flex-row space-y-6">
            <div class="flex items-center gap-x-3">
              <input
                id="dhr"
                type="radio"
                name="deheer"
                value="M"
                checked={selectedSex === "Dhr."}
                onChange={handleChange}
                class="relative size-4 appearance-none rounded-full border border-white/10 bg-white/5 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:border-white/5 disabled:bg-white/10 disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden"
              />
              <label
                htmlFor="dhr"
                class="block text-sm/6 font-medium text-black"
              >
                Dhr.
              </label>
            </div>
            <div class="flex items-center gap-x-3">
              <input
                id="mevr"
                type="radio"
                name="mevrouw"
                value="V"
                checked={selectedSex === "Mevr."}
                onChange={handleChange}
                class="relative size-4 appearance-none rounded-full border border-white/10 bg-white/5 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:border-white/5 disabled:bg-white/10 disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden"
              />
              <label
                htmlFor="mevr"
                class="block text-sm/6 font-medium text-black"
              >
                Mevr.
              </label>
            </div>
            <div class="flex items-center gap-x-3">
              <input
                id="onb"
                type="radio"
                name="onbekend"
                value="X"
                checked={selectedSex === " "}
                onChange={handleChange}
                class="relative size-4 appearance-none rounded-full border border-white/10 bg-white/5 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-500 checked:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:border-white/5 disabled:bg-white/10 disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden"
              />
              <label
                htmlFor="onb"
                class="block text-sm/6 font-medium text-black"
              >
                Onbekend
              </label>
            </div>
          </div>
        </fieldset>
        <br />
        <label>
          Naam:
          <input type="text" name="voor" required placeholder="Voornaam" />
          <input
            type="text"
            name="tnaam"
            required
            placeholder="Tussenvoegsel(s)"
          />
          <input type="text" name="achter" required placeholder="Achternaam" />
        </label>
        <br />
        <div>
          <label htmlFor="mailc" class="block text-sm/6 mt-3">
            Email Contactpersoon
          </label>

          <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
            <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <input
              type="email"
              name="mailc"
              placeholder="mail@voorbeeld.nl"
              id="mailc"
              required
              class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="mailcc" class="block text-sm/6 mt-3"> Email Contactpersoon controle </label>
          <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
            <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <input
              type="email"
              name="mailcc"
              id="mailcc"
              placeholder="mail@voorbeeld.nl"
              required
              class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="telc" class="block text-sm/6 mt-3"> Telefoonnummer Contactpersoon </label>

          <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
            <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
              +31
            </div>
            <input
              type="tel"
              name="telc"
              id="telc"
              pattern="[0-9]{9}"
              required
              class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="price"
            class="block text-sm/6 font-medium text-gray-900"
          >
            Price
          </label>
          <div class="mt-2">
            <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
              <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                $
              </div>
              <input
                id="price"
                type="text"
                name="price"
                placeholder="0.00"
                class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
              />
              <div class="grid shrink-0 grid-cols-1 focus-within:relative">
                <select
                  id="currency"
                  name="currency"
                  aria-label="Currency"
                  class="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option>USD</option>
                  <option>CAD</option>
                  <option>EUR</option>
                </select>
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  data-slot="icon"
                  aria-hidden="true"
                  class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                >
                  <path
                    d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="mt-6 flex items-center justify-center gap-x-6">
          <button type="button" class="rounded-md text-sm/6 outline-1 -outline-offset-1 outline-gray-300 px-16 py-2 bg-transparent font-semibold text-black"><i class="fa-solid fa-xmark"></i> Annuleer</button>
          <button type="submit" class="rounded-md bg-black px-16 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Verder <i class="fa-solid fa-arrow-right"></i></button>
        </div>
        {/* <button type="submit">Verder</button> */}
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
    if (<MyForm/> == True) {
      // show button which refers to MyForm2
    }
    elseif (<MyForm2/> == True) {
      // show buttons which go back to MyForm and MyForm3
    }
    elseif (<MyForm3/> == True) {
      // Show buttons which goes to MyFormSummary and back to MyForm2
    }
    elseif (<MyFormSummary/> == True) {
      // Show buttons which goes toe MyFormConfirm and bakc to MyForm3
    }
    else {
      // Just return MyFormConfirm
    }
    // (<MyForm />)
  );
}

export default App;
