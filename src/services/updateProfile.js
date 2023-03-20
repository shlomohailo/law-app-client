import Cookies from "js-cookie";

export const updateProfile = async (user) => {
  console.log(user);
  const userId = Cookies.get("userId");
  return await fetch(`http://localhost:8000/api/users/update/${userId}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({data:user}),
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
