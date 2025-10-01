export default function button(state, page) {
    function pageForward() {
        if (page == <MyForm/>) {
              return <MyForm2/>
            }
            elseif (page == <MyForm2/>) {
                return <MyForm3/>
            }
            elseif (page == <MyForm3/>) {
              return <MyFormSummary/>
            }
            elseif (page == <MyFormSummary/>) {
              return <MyformConfirm/>
            }
    }

    function pageBackward() {
        if (page == <MyForm2/>) {
          return <MyForm/>
        }
        elseif (page == <MyForm3/>) {
            return <MyForm2/>
        }
        elseif (page == <MyFormSummary/>) {
          return <MyForm3/>
        }
    }

    if (state == proceed) {
        return (
          <button type="button" class="rounded-md bg-black px-16 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" onClick={pageForward}>Verder <i class="fa-solid fa-arrow-right"></i></button>
        )
    }
    elseif (state == back) {
        return (
          <button type="button" class="rounded-md text-sm/6 outline-1 -outline-offset-1 outline-gray-300 px-16 py-2 bg-transparent font-semibold text-black" onClick={pageBackward}><i class="fa-solid fa-xmark"></i> Terug</button>
            )
        }
    elseif (state == submit) {
        return (
          <button type="submit" class="rounded-md bg-black px-16 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Bevestig <i class="fa-solid fa-arrow-right"></i></button
        )
    }
}
