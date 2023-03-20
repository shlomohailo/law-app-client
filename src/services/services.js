export const fetchServices = async () => {
  return await fetch("http://localhost:8000/api/services")
    .then((res) => res.json())
    .then((res) => console.log(res));

};
