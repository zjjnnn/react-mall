// import { useState, useEffect } from "react";
// // import { useState, useRef, useEffect } from "react";
// import axios from "axios";
// import CateLevelOne from "./CateLevelOne";
// import "./catestyles.css";

// const cateUrl = axios.create({
//   baseURL: "http://localhost:8080/categories",
// });
// const CateContainer = () => {
//   const [cateList, setCateList] = useState([]);
//   // const openCate = useRef(false);

//   useEffect(() => {
//     async function getCateList() {
//       const response = await cateUrl.get("");
//       setCateList(response.data.data);
//       //   console.log("response", response);
//     }
//     getCateList();
//   }, []);

//   return (
//     <div
//       className="g-gnav g-sm-modal"
//       id="g-gnav"
//       aria-hidden="false"
//       aria-modal="false"
//       aria-labelledby="g-gnav_h"
//       data-breakpoints="narrow"
//     >
//       <div className="g-modal_backdrop">
//         <div className="g-modal_el">
//           <div className="g-gnav_outer">
//             <nav className="g-gnav_inner" aria-label="閉じる">
//               <ul className="g-gnav_bar g-gnav_login">
//                 <li className="g-gnav_item">
//                   <a
//                     id="js-header-login"
//                     className="g-btn g-btn-em"
//                     href="/ec/login"
//                   >
//                     <span>ログイン</span>
//                   </a>
//                 </li>
//                 <li className="g-gnav_item">
//                   <a
//                     id="js-header-regis"
//                     className="g-btn g-btn-cv"
//                     href="/ec/login?unregistered"
//                   >
//                     <span>新規会員登録</span>
//                   </a>
//                 </li>
//               </ul>

//               <div className="g-gnav_category">
//                 <button
//                   className="g-gnav_btn g-gnav_categoryBtn"
//                   type="button"
//                   aria-haspopup="true"
//                   aria-expanded="false"
//                   aria-controls="g-gcategory"
//                   data-breakpoints="wide"
//                   data-attr='{"wide":{"aria-haspopup":true}}'
//                 >
//                   <i className="g-s g-s-category" aria-hidden="true"></i>
//                   カテゴリ
//                   <i className="g-i g-i-arrow-d" aria-hidden="true"></i>
//                 </button>
//                 <div
//                   className="g-gcategory"
//                   id="g-gcategory"
//                   aria-hidden="true"
//                   data-breakpoints="wide"
//                 >
//                   <ul className="g-gcategory_el" data-accordion-group="">
//                     <CateLevelOne cateList={cateList}></CateLevelOne>
//                   </ul>
//                 </div>
//               </div>
//             </nav>
//           </div>
//         </div>
//         <div className="g-modal_spacer"></div>
//       </div>
//     </div>
//   );
// };

// export default CateContainer;
