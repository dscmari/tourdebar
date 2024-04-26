

export default function Home() {
  return (
    <main>
        <h1>Tour de Bar</h1>
        <div>
              <h2>Admin Log In</h2>
              <form action="">
                  <div className="m-4">
                      <label htmlFor="username">Username:</label>
                      <input className="border m-2" type="text" id="username" name="username" required />
                  </div>
                  <div className="m-4">
                      <label htmlFor="password">Password:</label>
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
