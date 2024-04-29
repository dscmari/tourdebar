

export default function Home() {
  return (
    <main className=" flex flex-col justify-center text-center text-white h-screen bg-black lg:w-1/2 lg:mx-auto lg:text-left">
        <h1 className="text-2xl font-bold p-4 mb-8 text-center">Tour de Bar</h1>
        <div className="lg:ml-24">
              <h2 className="p-4 text-xl">Admin Log In</h2>
              <form action="">
                  <div className="m-4 flex flex-col lg:flex-row justify-center lg:justify-start">
                      <label htmlFor="username">Username</label>
                      <input className="border m-2" type="text" id="username" name="username" required />
                  </div>
                  <div className="m-4 flex flex-col lg:flex-row justify-center lg:justify-start">
                      <label htmlFor="password">Password</label>
                      <input className="border m-2" type="password" id="password" name="password" required />
                  </div>
                  <div className="m-4">
                      <button className="p-2 border" type="submit">Login</button>
                  </div>
            </form>
        </div>
    </main>
  );
}
