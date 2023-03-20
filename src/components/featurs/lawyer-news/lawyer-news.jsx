// import React, { useState } from "react";
// import { useEffect } from "react";
// import { fetchDataFromGovUs } from "../../../services/gov";
// import './lawyer-news.css';
// function LawyerNews() {
//   const [contracts, setContracts] = useState([]);
//   useEffect(() => {
//     fetchDataFromGovUs().then((res) => setContracts(res.data));
//   }, []);
//   console.log(contracts ? contracts : "ferf");
//   return (
//   <div className="news">

//       {
//         contracts.slice(0,10).map(contract=>
//           <div>
//             {contract.title}
    
//             {contract.file.map(item=>
//                     <button>
//                     <a target='_blank' href={item.url}>Watch contract</a>
//                   </button>
//               )}
//           </div>
//           )
//       }
//   </div>
//   );
// }

// export default LawyerNews;
