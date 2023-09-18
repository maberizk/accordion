import { useState } from "react";
import "./App.css";

function App() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const [isAccordionOpen2, setIsAccordionOpen2] = useState(false);

  const [isAccordionOpen3, setIsAccordionOpen3] = useState(false);

  const [isAccordionOpen4, setIsAccordionOpen4] = useState(false);

  const [isAccordionOpen5, setIsAccordionOpen5] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const toggleAccordion2 = () => {
    setIsAccordionOpen2(!isAccordionOpen2);
  };

  const toggleAccordion3 = () => {
    setIsAccordionOpen3(!isAccordionOpen3);
  };

  const toggleAccordion4 = () => {
    setIsAccordionOpen4(!isAccordionOpen4);
  };

  const toggleAccordion5 = () => {
    setIsAccordionOpen5(!isAccordionOpen5);
  };

  return (
    <div className="bg-gradient-to-b from-soft-violet to-soft-blue flex flex-col justify-center items-center min-h-screen">
      <div className="absolute top-4 z-30 md:left-24 md:top-64">
        <img
          src="/images/illustration-woman-online-mobile.svg"
          className="w-52 md:w-96 z-10"
        />
        <img
          src="/images/bg-pattern-mobile.svg"
          className="w-52 absolute top-28 md:w-96 md:top-52" 
        />
      </div>
      <div className="bg-white text-dark-blue p-4 pt-24 pb-10 shadow-lg rounded-xl w-11/12 max-w-full drop-shadow-2xl flex flex-col md:pl-96 md:pr-24 md:w-3/4">
        <h1 className="text-3xl font-bold text-center py-6 md:text-left md:pt-0">FAQ</h1>
        <div
          className="accordion-item cursor-pointer border-b border-light-gray-blue"
          onClick={toggleAccordion}
        >
          <div className=" flex justify-between text-sm pb-2 hover:text-soft-red ">
            <span
              className={`bold-text  ${
                isAccordionOpen ? "font-bold text-very-dark-blue" : ""
              }`}
            >
              How many team members can I invite?
            </span>
            <span
              className={`chevron material-symbols-outlined  text-soft-red ${
                isAccordionOpen ? "rotate-180 " : ""
              }`}
            >
              expand_more
            </span>
          </div>
          <div
            className={`pb-4 text-sm font-light w-11/12 text-dark-grayish-blue  ${
              isAccordionOpen ? "" : "hidden"
            }`}
          >
            You can invite up to 2 additional users on the Free plan. There is
            no limit on team members for the Premium plan.
          </div>
        </div>
        <div
          className="accordion-item cursor-pointer border-b border-light-gray-blue"
          onClick={toggleAccordion2}
        >
          <div className=" flex justify-between text-sm pb-2 py-4  hover:text-soft-red ">
            <span
              className={`bold-text ${
                isAccordionOpen2 ? "font-bold text-very-dark-blue" : ""
              }`}
            >
              What is the maximum file upload size?
            </span>
            <span
              className={`chevron material-symbols-outlined  text-soft-red ${
                isAccordionOpen2 ? "rotate-180 " : ""
              }`}
            >
              expand_more
            </span>
          </div>
          <div
            className={`pb-4 text-sm font-light w-11/12 text-dark-grayish-blue  ${
              isAccordionOpen2 ? "" : "hidden"
            }`}
          >
            No more than 2GB. All files on your account must fit your allotted
            storage space.
          </div>
        </div>
        <div
          className="accordion-item cursor-pointer border-b border-light-gray-blue"
          onClick={toggleAccordion3}
        >
          <div className=" flex justify-between text-sm pb-2 py-4  hover:text-soft-red ">
            <span
              className={`bold-text ${
                isAccordionOpen3 ? "font-bold text-very-dark-blue" : ""
              }`}
            >
              How do I reset my password?
            </span>
            <span
              className={`chevron material-symbols-outlined  text-soft-red ${
                isAccordionOpen3 ? "rotate-180 " : ""
              }`}
            >
              expand_more
            </span>
          </div>
          <div
            className={`pb-4 text-sm font-light w-11/12 text-dark-grayish-blue  ${
              isAccordionOpen3 ? "" : "hidden"
            }`}
          >
            Click “Forgot password” from the login page or “Change password”
            from your profile page.
          </div>
        </div>
        <div
          className="accordion-item cursor-pointer border-b border-light-gray-blue"
          onClick={toggleAccordion4}
        >
          <div className=" flex justify-between text-sm pb-2 py-4  hover:text-soft-red ">
            <span
              className={`bold-text ${
                isAccordionOpen4 ? "font-bold text-very-dark-blue" : ""
              }`}
            >
              Can I cancel my subscription?
            </span>
            <span
              className={`chevron material-symbols-outlined  text-soft-red ${
                isAccordionOpen4 ? "rotate-180 " : ""
              }`}
            >
              expand_more
            </span>
          </div>
          <div
            className={`pb-4 text-sm font-light w-11/12 text-dark-grayish-blue  ${
              isAccordionOpen4 ? "" : "hidden"
            }`}
          >
            Yes! Send us a message and we’ll process your request no questions
            asked.
          </div>
        </div>
        <div
          className="accordion-item cursor-pointer border-b border-light-gray-blue"
          onClick={toggleAccordion5}
        >
          <div className=" flex justify-between text-sm pb-2 py-4  hover:text-soft-red ">
            <span
              className={`bold-text ${
                isAccordionOpen5 ? "font-bold text-very-dark-blue" : ""
              }`}
            >
              Do you provide additional support?
            </span>
            <span
              className={`chevron material-symbols-outlined  text-soft-red ${
                isAccordionOpen5 ? "rotate-180 " : ""
              }`}
            >
              expand_more
            </span>
          </div>
          <div
            className={`pb-4 text-sm font-light w-11/12 text-dark-grayish-blue  ${
              isAccordionOpen5 ? "" : "hidden"
            }`}
          >
            Chat and email support is available 24/7. Phone lines are open
            during normal business hours.
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
