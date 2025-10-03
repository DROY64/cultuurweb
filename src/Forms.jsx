import { useState } from "react";
import "./App.css";
import "./Buttons.jsx";

function MyForm() {
  const [selectedSex, setSelectedSex] = useState("sex");

  const handleChange = (event) => {
    setSelectedSex(event.target.value);
  };

  const [vname, setVName] = useState("");
  const [tname, setTName] = useState("");
  const [aname, setAName] = useState("");
  const [cmail, setCmail] = useState("");
  const [ccmail, setCCmail] = useState("");
  const [ctel, setCtel] = useState("");


  return (
    <>
      <p class="mt-1 text-sm/6 text-gray-500 mb-8">
        Vul hier informatie in van uzelf of een relevante contactpersoon.
      </p>
      <br />
      <form>
        <fieldset>
          <legend class="text-sm/6 text-black">Aanhef *</legend>
          <div class="mt-1 grid grid-cols-5">
            <div class="flex items-center gap-x-3">
              <input
                id="dhr"
                type="radio"
                name="deheer"
                value="M"
                checked={selectedSex === "Dhr."}
                onChange={handleChange}
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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

        <label class="block text-sm/6 mt-3">
          Naam
          <div class="grid grid-cols-2 gap-4">
            <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
              <input
                type="text"
                name="voor"
                required
                placeholder="Voornaam *"
                class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                value={vname}
                onChange={e => setVName(e.target.value)}
              />
            </div>
            <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
              <input
                type="text"
                name="tnaam"
                required
                placeholder="Tussenvoegsel(s)"
                class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                value={tname}
              onChange={e => setTName(e.target.value)}
              />
            </div>
            <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600 col-span-2">
              <input
                type="text"
                name="achter"
                required
                placeholder="Achternaam *"
                class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                value={aname}
              onChange={e => setAName(e.target.value)}
              />
            </div>
          </div>
        </label>

        <div>
          <label htmlFor="cmail" class="block text-sm/6 mt-3">
            Email Contactpersoon *
          </label>

          <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
            <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <input
              type="email"
              name="cmail"
              placeholder="mail@voorbeeld.nl"
              id="cmail"
              required
              class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            value={cmail}
            onChange={e => setCmail(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="ccmail" class="block text-sm/6 mt-3">
            Email Contactpersoon controle *
          </label>
          <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
            <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <input
              type="email"
              name="ccmail"
              id="ccmail"
              placeholder="mail@voorbeeld.nl"
              required
              class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            value={ccmail}
            onChange={e => setCCmail(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="ctel" class="block text-sm/6 mt-3">
            Telefoonnummer Contactpersoon *
          </label>

          <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
            <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
              +31
            </div>
            <input
              type="tel"
              name="ctel"
              id="ctel"
              minLength={9}
              maxLength={10}
              required
              class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            value={ctel}
            onChange={e => setCtel(e.target.value)}
            />
          </div>
        </div>
        <br />
        <div class="mt-6 flex items-center justify-center gap-x-6">
          <button
            type="button"
            class="rounded-md text-sm/6 outline-1 -outline-offset-1 outline-gray-300 px-16 py-2 bg-transparent font-semibold text-black"
          >
            <i class="fa-solid fa-xmark"></i> Annuleer
          </button>
          <button
            type="submit"
            class="rounded-md bg-black px-16 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Verder <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </form>
    </>
  );
}

function MyForm2() {

  const [instname, setInstName] = useState("");
  const [postcode, setPostcode] = useState("");
  const [huisnummer, setHuisnummer] = useState("");
  const [toevoeging, setToevoeging] = useState("");
  const [straat, setStraat] = useState("");
  const [plaats, setPlaats] = useState("");
  const [land, setLand] = useState("");
  const [insttel, setInstTel] = useState("");
  const [about, setInstAbout] = useState("");
  const [logo, setInstLogo] = useState("");


  return (
    <>
      <p class="mt-1 text-sm/6 text-gray-500 mb-4">
        Vul hier de informatie in van de instelling.
      </p>
      <br />
      <form>
        <br />
        <label class="text-base/7">
          Naam instelling:
          <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600 col-span-2">
            <input
              type="text"
              name="instName"
              required
              class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            value={instname}
            onChange={e => setInstName(e.target.value)}
            />
          </div>
        </label>

        <div>
          <label htmlFor="adres" class="block text-sm/6 mt-3">
            <h2 class="text-base/7 font-semibold">Adres</h2>
          </label>
          <div class="grid grid-rows-3 gap-3">
            <div className="grid grid-cols-3 gap-4">
              <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <input
                  type="text"
                  name="postcode"
                  placeholder="Postcode *"
                  id="postcode"
                  required
                  class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                value={postcode}
                onChange={e => setPostcode(e.target.value)}
                />
              </div>
              <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <input
                  type="text"
                  name="hnummer"
                  placeholder="Huisnr. *"
                  id="hnummer"
                  required
                  class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                value={huisnummer}
                onChange={e => setHuisnummer(e.target.value)}
                />
              </div>
              <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <input
                  type="text"
                  name="toevoeging"
                  placeholder="Toevoeging"
                  id="toevoeging"
                  required
                  class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                value={toevoeging}
                onChange={e => setToevoeging(e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <input
                  type="adres"
                  name="straat"
                  placeholder="Straatnaam *"
                  id="straat"
                  required
                  class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                value={straat}
                onChange={e => setStraat(e.target.value)}
                />
              </div>
              <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <input
                  type="text"
                  name="plaats"
                  placeholder="Plaatsnaam *"
                  id="plaats"
                  required
                  class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                value={plaats}
                onChange={e => setPlaats(e.target.value)}
                />
              </div>
            </div>
            <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
              <input
                type="text"
                name="land"
                placeholder="Land"
                id="land"
                required
                class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
              value={land}
              onChange={e => setLand(e.target.value)}
              />
            </div>
            <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
              <input
                type="tel"
                name="telint"
                placeholder="Telefoonnummer *"
                id="telint"
                required
                class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
              value={insttel}
              onChange={e => setInstTel(e.target.value)}
              />
            </div>
          </div>
        </div>
        <br />
        <div class="col-span-full">
          <label for="about" class="block text-sm/6 font-medium text-black">
            <h2 class="text-base/7 font-semibold">Beschrijving</h2>
          </label>
          <div class="mt-2">
            <textarea
              id="about"
              name="about"
              rows="3"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-500 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600"
              value={about}
              onChange={e => setInstAbout(e.target.value)}
            ></textarea>
          </div>
          <p class="mt-3 text-sm/6 text-gray-500">
            Beschrijf wat de instelling inhoudt.
          </p>
        </div>
        <div>
          <div class="col-span-full mt-2">
            <label
              htmlFor="instLogo"
              class="block text-sm/6 font-medium text-black"
            >
              Instelling logo:
            </label>
            <div class="mt-2 flex justify-center rounded-lg border border-dashed border-grey/25 px-6 py-10">
              <div class="text-center">
                <i class="fa-solid fa-image fa-2xl"></i>
                <div class="mt-4 flex text-sm/6 text-gray-400">
                  <label
                    for="instLogo"
                    class="relative cursor-pointer rounded-md bg-transparent font-semibold text-indigo-400 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-500 hover:text-indigo-300"
                  >
                    <span>Upload een bestand</span>
                    <input
                      id="instLogo"
                      type="file"
                      name="instLogo"
                      class="sr-only"
                      accept=".png,.jpg,.jpeg,.ico"
                    value={logo}
                    onChange={e => setInstLogo(e.target.value)}
                    />
                  </label>
                  <p class="pl-1">of sleep het hier</p>
                </div>
                <p class="text-xs/5 text-gray-400">PNG, JPG, ICO t/m 2MB</p>
                <p class="text-xs/5 text-gray-400">800x800px</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="mt-6 flex items-center justify-center gap-x-6">
          <button
            type="button"
            class="rounded-md text-sm/6 outline-1 -outline-offset-1 outline-gray-300 px-16 py-2 bg-transparent font-semibold text-black"
          >
            <i class="fa-solid fa-rotate-left"></i> Terug
          </button>
          <button
            type="submit"
            class="rounded-md bg-black px-16 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Verder <i class="fa-solid fa-arrow-right"></i>
          </button>
          {/* {pressButton(proceed, MyForm2)} */}
        </div>
        {/* <button type="submit">Verder</button> */}
      </form>
    </>
  );
}

function MyForm3() {
  
  const [vname, setVName] = useState("");
  const [tname, setTName] = useState("");
  const [aname, setAName] = useState("");
  const [cmail, setCmail] = useState("");
  const [ccmail, setCCmail] = useState("");
  const [ctel, setCtel] = useState("");

  return (
    <>
      <form>
        <div>
          <label for="aname" class="block text-sm/6 mt-3">
            Naam activiteit
          </label>

          <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
            <input
              type="text"
              name="aname"
              id="aname"
              required
              class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
        <br />
        <div class="col-span-full">
          <label for="about" class="block text-sm/6 font-medium text-black">
            Beschrijving activiteit
          </label>
          <div class="mt-2">
            <textarea
              id="aboutact"
              name="aboutact"
              rows="3"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-500 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600"
            ></textarea>
          </div>
          <p class="mt-3 text-sm/6 text-gray-500">
            Beschrijf wat de activiteit inhoudt.
          </p>
        </div>
        <br />
        <div class="relative mb-6">
          <label
            for="minmax-range"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Min-max Studenten
          </label>
          <input
            id="minmax-range"
            type="range"
            min="10"
            max="50"
            class="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
          <span class="text-sm text-black dark:text-gray-400 absolute start-0 -bottom-6">
            10
          </span>
          <span class="text-sm text-black dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
            25
          </span>
          <span class="text-sm text-black dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
            35
          </span>
          <span class="text-sm text-black dark:text-gray-400 absolute end-0 -bottom-6">
            50
          </span>
        </div>
        <br />
        <div class="mt-6 flex items-center justify-center gap-x-6">
          <button
            type="button"
            class="rounded-md text-sm/6 outline-1 -outline-offset-1 outline-gray-300 px-16 py-2 bg-transparent font-semibold text-black"
          >
            <i class="fa-solid fa-rotate-left"></i> Terug
          </button>
          <button
            type="submit"
            class="rounded-md bg-black px-16 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Verder <i class="fa-solid fa-arrow-right"></i>
          </button>
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
          <label htmlFor="mailcc" class="block text-sm/6 mt-3">
            Email Contactpersoon controle
          </label>
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
          <label htmlFor="telc" class="block text-sm/6 mt-3">
            Telefoonnummer Contactpersoon
          </label>

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
          <button
            type="button"
            class="rounded-md text-sm/6 outline-1 -outline-offset-1 outline-gray-300 px-16 py-2 bg-transparent font-semibold text-black"
          >
            <i class="fa-solid fa-rotate-left"></i> Terug
          </button>
          <button
            type="submit"
            class="rounded-md bg-black px-16 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Verder <i class="fa-solid fa-arrow-right"></i>
          </button>
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
      <h1>Bevestigd</h1>
      <p>
        <h2>Een kopie is naar uw email verstuurd ter Bevestiging.</h2>
      </p>
    </>
  );
}

function Form() {
  return <MyForm2 />;
}

export default Form;
