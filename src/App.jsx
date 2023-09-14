import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-soft-violet font-primary">
        <div>
          <img
            src="/images/illustration-woman-online-mobile.svg"
            className="w-300"
          />
        </div>
        <h1>FAQ</h1>
        <details>
          <summary> How many team members can I invite?</summary>
          <p>
            You can invite up to 2 additional users on the Free plan. There is
            no limit on team members for the Premium plan.
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
            Click “Forgot password” from the login page or “Change password”
            from your profile page. A reset link will be emailed to you.
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
            Chat and email support is available 24/7. Phone lines are open
            during normal business hours.
          </p>
        </details>
      </div>
    </>
  );
}

export default App;
