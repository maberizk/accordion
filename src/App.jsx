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

import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <body className="text-soft-violet font-primary">
      <img
        src="/images/illustration-woman-online-mobile.svg"
        className="w-300"
      />
      <h1 className="text-center">FAQ</h1>

      <ul className="my-18 mx-auto w-80">
        <li className="mb-2.5 p-2.5 border-b border-black-500">
          <label for="first">How many team members can I invite?</label>
          <input type="radio" name="accordion" id="first" checked></input>
          <div className="content">
            <p>
              You can invite up to 2 additional users on the Free plan. There is
              no limit on team members for the Premium plan.
            </p>
          </div>
        </li>
      </ul>
      <details>
        <summary> How many team members can I invite?</summary>
        <p>
          You can invite up to 2 additional users on the Free plan. There is no
          limit on team members for the Premium plan.
        </p>
      </details>
      <details>
        <summary>What is the maximum file upload size?</summary>
        <p>
          No more than 2GB. All files in your account must fit your allotted
          storage space.
        </p>
      </details>
      <details>
        <summary>How do I reset my password?</summary>
        <p>
          Click “Forgot password” from the login page or “Change password” from
          your profile page. A reset link will be emailed to you.
        </p>
      </details>
      <details>
        <summary>Can I cancel my subscription?</summary>
        <p>
          Yes! Send us a message and we'll process your request no questions
          asked.
        </p>
      </details>
      <details>
        <summary>Do you provide additional support?</summary>
        <p>
          Chat and email support is available 24/7. Phone lines are open during
          normal business hours.
        </p>
      </details>
    </body>
  );
}

export default App;
