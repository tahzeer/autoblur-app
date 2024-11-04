function App() {

  return (
    <>
      <div className="w-2/3 mx-auto py-8">
        <div className="mockup-browser border-base-300 border">
          <div className="mockup-browser-toolbar">
            <div className="input border-base-300 border">https://example.com</div>
            <img className="w-6 h-6" src="/icon/icon-48.png" alt="Autoblur" />
          </div>
          <div className="max-w-72 mx-auto py-8 flex flex-col gap-4">
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow blur hover:blur-0" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd" />
            </svg>
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" className="grow blur hover:blur-0" placeholder="Username" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd" />
            </svg>
            <input type="password" className="grow blur hover:blur-0" placeholder="Password" />
          </label>
          </div>
        </div>
        <p className="px-32 py-8 text-center text-base font-medium">Autoblur is an open source chrome plugin to blur input fields on webpages, created out of personal necessity and educational endeavour, and published just cause. Support Autoblur by forking and contributing on Github, starring the repo, or donating.</p>
        <div className="px-32 flex justify-center content-center gap-6">
          <a href="https://github.com/tahzeer/autoblur-app" target="_blank"><button className="btn btn-outline btn-accent">Star on Github</button></a>
          <button className="btn btn-outline" onClick={()=>document.getElementById('my_modal_2').showModal()}>Donate Crypto</button>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box w-2/5 max-w-4xl">
                <div className="p-4 flex flex-col gap-2">
                  <div className="flex flex-row flex-start content-center gap-2">
                    <p className="text-base font-medium py-2">BTC</p>
                    <div className="bg-base border grow border-base-300 rounded-md p-2">
                      <code>bc1q36ela4c8hjuyv9pqxenwyk9ru7plzrvprv4lz7</code>
                    </div>
                  </div>
                  <div className="flex flex-row flex-start content-center gap-2">
                    <p className="text-base font-medium py-2">ETH</p>
                    <div className="bg-base border grow border-base-300 rounded-md p-2">
                      <code>0x4ce1AacabD05804f3CAa8E1ab376a1dA15112d95</code>
                    </div>
                  </div>
                  <div className="flex flex-row flex-start content-center gap-2">
                    <p className="text-base font-medium py-2">SOL</p>
                    <div className="bg-base border grow border-base-300 rounded-md p-2">
                      <code>4f6qKrYeNA8W7E7HwjVUwzHEukvQTnJwZHKhTLsxHAE</code>
                    </div>
                  </div>
                </div>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
        </div>
      </div>
    </>
  )
}

export default App
