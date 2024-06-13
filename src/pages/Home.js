import { useEffect, useState } from "react";

function Home() {
const [users, setUsers] = useState();

  useEffect(() =>{
    fetch("http://localhost:4000/")
      .then(r => r.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error))
  }, [])

  return (
    <>
      <header>
        < navBar />
      </header>
      <main>
        {/* Info goes here! */}
      </main>
    </>
  );
};

export default Home;