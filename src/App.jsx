// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <body className="text-soft-violet font-primary">
//       <div>
//         <img
//           src="/images/illustration-woman-online-mobile.svg"
//           className="w-300"
//         />
//       </div>
//       <div className="px-6 flex flex-col items-center">
//         <h1 className="text-center">FAQ</h1>
//         <div className="flex flex-col items-left">
//           <details>
//             <summary> How many team members can I invite?</summary>
//             <p>
//               You can invite up to 2 additional users on the Free plan. There is
//               no limit on team members for the Premium plan.
//             </p>
//           </details>
//           <details>
//             <summary>What is the maximum file upload size?</summary>
//             <p>
//               No more than 2GB. All files in your account must fit your allotted
//               storage space.
//             </p>
//           </details>
//           <details>
//             <summary>How do I reset my password?</summary>
//             <p>
//               Click “Forgot password” from the login page or “Change password”
//               from your profile page. A reset link will be emailed to you.
//             </p>
//           </details>
//           <details>
//             <summary>Can I cancel my subscription?</summary>
//             <p>
//               Yes! Send us a message and we'll process your request no questions
//               asked.
//             </p>
//           </details>
//           <details>
//             <summary>Do you provide additional support?</summary>
//             <p>
//               Chat and email support is available 24/7. Phone lines are open
//               during normal business hours.
//             </p>
//           </details>
//         </div>
//       </div>
//     </body>
//   );
// }

// export default App;

// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [isOpen, setIsOpen] = useState(true); // Initialize the state

//   // Function to toggle the state when the input is clicked
//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="text-dark-blue font-primary bg-soft-violet ">
//       <img
//         src="/images/illustration-woman-online-mobile.svg"
//         className="w-300"
//       />
//       <h1 className="text-center">FAQ</h1>

//       <ul className="my-18 mx-auto w-1/2 accordion">
//         <li className="mb-2.5 p-2.5 border-b border-black-500 bg-white">
//           <label
//             htmlFor="first"
//             className="p-2.5 flex align-center justify-between text-lg cursor-pointer "
//           >
//             How many team members can I invite?{" "}
//             <span className="rotate-90 text-2xl text-soft-red">&#x3e;</span>
//           </label>
//           <input
//             className="hidden"
//             type="radio"
//             name="accordion"
//             id="first"
//             checked={isOpen}
//           ></input>
//           <div
//             className={`content py-0 px-2.5 leading-6 truncate duration-500 ${
//               isOpen ? "max-h-400" : "max-h-0"
//             }`}
//           >
//             <p>
//               You can invite up to 2 additional users on the Free plan. There is
//               no limit on team members for the Premium plan.
//             </p>
//           </div>
//         </li>
//         <li className="mb-2.5 p-2.5 border-b border-black-500 bg-white">
//           <label
//             htmlFor="second"
//             className="p-2.5 flex align-center justify-between text-lg cursor-pointer "
//           >
//             What is the maximum file upload size?{" "}
//             <span className="rotate-90 text-2xl text-soft-red">&#x3e;</span>
//           </label>
//           <input
//             className="hidden"
//             type="radio"
//             name="accordion"
//             id="second"

//           ></input>
//           <div
//             className={`content py-0 px-2.5 leading-6 truncate duration-500 ${
//               isOpen ? "max-h-400" : "max-h-0"
//             }`}
//           >
//             <p>
//               No more than 2GB. All files in your account must fit your allotted
//               storage space.
//             </p>
//           </div>
//         </li>
//         <li className="mb-2.5 p-2.5 border-b border-black-500 bg-white">
//           <label
//             htmlFor="third"
//             className="p-2.5 flex align-center justify-between text-lg cursor-pointer "
//           >
//             How do I reset my password?{" "}
//             <span className="rotate-90 text-2xl text-soft-red">&#x3e;</span>
//           </label>
//           <input
//             className="hidden"
//             type="radio"
//             name="accordion"
//             id="third"
//           ></input>
//           <div className="content">
//             <p>
//               Click “Forgot password” from the login page or “Change password”
//               from your profile page. A reset link will be emailed to you.
//             </p>
//           </div>
//         </li>
//         <li className="mb-2.5 p-2.5 border-b border-black-500 bg-white">
//           <label
//             htmlFor="forth"
//             className="p-2.5 flex align-center justify-between text-lg cursor-pointer "
//           >
//             Can I cancel my subscription?{" "}
//             <span className="rotate-90 text-2xl text-soft-red">&#x3e;</span>
//           </label>
//           <input
//             className="hidden"
//             type="radio"
//             name="accordion"
//             id="forth"
//           ></input>
//           <div className="content">
//             <p>
//               Yes! Send us a message and we'll process your request no questions
//               asked.
//             </p>
//           </div>
//         </li>
//         <li className="mb-2.5 p-2.5 border-b border-black-500 bg-white">
//           <label
//             htmlFor="fifth"
//             className="p-2.5 flex align-center justify-between text-lg cursor-pointer "
//           >
//             Do you provide additional support?{" "}
//             <span className="rotate-90 text-2xl text-soft-red">&#x3e;</span>
//           </label>
//           <input
//             className="hidden"
//             type="radio"
//             name="accordion"
//             id="fifth"
//           ></input>
//           <div className="content">
//             <p>
//               Chat and email support is available 24/7. Phone lines are open
//               during normal business hours.
//             </p>
//           </div>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import "./App.css";

// const items = document.querySelectorAll(".accordion-item");

// items.forEach((item) => {
//   item.addEventListener("click", () => {
//     const toggle = item.querySelector(".toggle");

//     toggle.classList.toggle(".hidden");
//   });
// });

function App() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className="bg-soft-violet flex justify-center items-center min-h-screen">
      <div className="bg-white text-dark-blue p-8 shadow-lg rounded-xl w-[600px] max-w-full ">
        <h1 className="text-3xl font-bold text-center">FAQ</h1>
        <p className="text-center my-4 max-w-md mx-auto ">
          nfnfifidnfnsdoosdfosd
        </p>

        <div
          className="accordion-item cursor-pointer"
          onClick={toggleAccordion}
        >
          <div className=" flex justify-between p-2 text-xl ">
            How many team members can I invite?
            <svg
              className={`chevron ${isAccordionOpen ? "rotate-down" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 13l8 -3l8 3"></path>
            </svg>
          </div>
          <div className={`p-2 ${isAccordionOpen ? "" : "hidden"}`}>
            You can invite up to 2 additional users on the Free plan. There is
            no limit on team members for the Premium plan.
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
