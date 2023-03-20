export const fetchDataFromGovUs = async () => {
 return await fetch("https://api.gsa.gov/acquisition/cap/v1/search/documents?api_key=ikdUONAaQu0SNaotMlnDbyUriS8S8jPfGqRFLBEv")
    .then(res => res.json())
};
