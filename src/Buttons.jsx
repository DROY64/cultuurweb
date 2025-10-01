import "./Forms.jsx";

export default function button(state, page) {
    function pageForward() {
        if (page == <MyForm/>) {
              return <MyForm2/>;
            }
            else if (page == <MyForm2/>) {
                return <MyForm3/>;
            }
            else if (page == <MyForm3/>) {
              return <MyFormSummary/>;
            }
            else if (page == <MyFormSummary/>) {
              return <MyformConfirm/>;
            }
    }

    function pageBackward() {
        if (page == <MyForm2/>) {
          return <MyForm/>;
        }
        else if (page == <MyForm3/>) {
            return <MyForm2/>;
        }
        else if (page == <MyFormSummary/>) {
          return <MyForm3/>;
        }
        else {
            null
        }
    }

    if (state == proceed) {
        return (
          <button type="button" class="rounded-md bg-black px-16 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" onClick={pageForward}>Verder <i class="fa-solid fa-arrow-right"></i></button>
        );
    }
    else if (state == back) {
        return (
          <button type="button" class="rounded-md text-sm/6 outline-1 -outline-offset-1 outline-gray-300 px-16 py-2 bg-transparent font-semibold text-black" onClick={pageBackward}><i class="fa-solid fa-xmark"></i> Terug</button>
            );
        }
    else if (state == submit) {
        return (
          <button type="submit" class="rounded-md bg-black px-16 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Bevestig <i class="fa-solid fa-arrow-right"></i></button>
        );
    }
}
