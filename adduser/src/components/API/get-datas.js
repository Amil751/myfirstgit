export const getPlanets = async (key) => {
  const response = await fetch("https://swapi.dev/api/planets");
  const data = await response.json();

  return data.results;
};

export const getPeople = async (key) => {
  console.log(key);
  const response = await fetch("https://swapi.dev/api/people");
  const data = await response.json();
  return data.results;
};
export const senddata = async (user) => { 
    await fetch(
      "https://react-http-app-564e3-default-rtdb.asia-southeast1.firebasedatabase.app/users.json",
      {
        method: "PUT",
        body: JSON.stringify(user),
        headers: { "content-type": "application/json" },
      }
    );
  };
