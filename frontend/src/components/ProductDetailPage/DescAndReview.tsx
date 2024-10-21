import { useState } from "react";

const TABS = [
  {
    label: "Description",
    content: "This is the product Description ",
  },
  {
    label: "Reviews",
    content: "This is the product Reviews ",
  },
];

const DescAndReview = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="mt-12 mb-16">
      <div className="flex">
        {TABS.map((tab, index) => (
          <button
            key={index}
            className={`font-semibold border-2 border-t-eSmokePlus px-4 py-2 transition ${
              activeTab === index
                ? "bg-white text-black"
                : "bg-eSmokePlus text-tLight"
            }`}
            aria-selected={activeTab === index}
            onClick={() => setActiveTab(index)}
          >
            {tab.label} {index === 1 && <span>(0)</span>}
          </button>
        ))}
      </div>
      <p className="border-2 border-t-eSmokePlus p-14">
        {TABS[activeTab].content}
      </p>
    </div>
  );
};

export default DescAndReview;
