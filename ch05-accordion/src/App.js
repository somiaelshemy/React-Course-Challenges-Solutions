import "./styles.css";
import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);
  console.log(activeIndex);

  function handleToggleElement(index) {
    console.log("index", index);
    index === activeIndex ? setActiveIndex(null) : setActiveIndex(index);
  }

  return (
    <div className="accordion">
      {faqs.map((faq) => (
        <AccordionItem
          faq={faq}
          key={faqs.indexOf(faq)}
          index={faqs.indexOf(faq)}
          activeIndex={activeIndex}
          onToggleElement={handleToggleElement}
        ></AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ faq, index, activeIndex, onToggleElement }) {
  return (
    <div
      onClick={() => onToggleElement(index)}
      className={index !== activeIndex ? "item" : "open item"}
    >
      <span className="number">{(index + 1).toString().padStart(2, "0")}</span>
      <span className="title">{faq.title}</span>
      {index === activeIndex ? (
        <>
          <span className="icon">-</span>
          <p className="content-box">{faq.text}</p>
        </>
      ) : (
        <span className="icon">+</span>
      )}
    </div>
  );
}
