import { createContext, useContext, useEffect, useState } from "react";

const userContextProvider = createContext();
function UserContext({ children }) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://api.github.com/users/eniola-bakare`)
      .then((res) => res.json())
      .then((data) => setData({ ...data }))
      .catch((err) => console.log(err));
  }, []);
  return (
    <userContextProvider.Provider value={{data}}>
      {children}
    </userContextProvider.Provider>
  );
}

function useUserContext() {
  const values = useContext(userContextProvider);
  console.log(values);
  console.log(values);
  if (!values)
    throw new Error(
      "User context has been used outside of the context provider"
    );

  return values;
}

export { useUserContext, UserContext };