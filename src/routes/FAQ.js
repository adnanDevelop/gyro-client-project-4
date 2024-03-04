import React, { useState } from "react";
import { faqdata } from "../components/FAQData.js";
import SingleQuestion from "../components/SingleQuestion";

export default function FAQ() {
  const [cards] = useState(faqdata);

  return (
    <div className="faq">
      <h1 className="font-primary faq-title">Have a question?</h1>
      {/* FAQ SECTION */}
      <div className="login faq-flex">
        <section className="faq-section-start">
          {cards.map((card, index) => (
            <SingleQuestion {...card} key={index} />
          ))}
        </section>
        <div className="login-box">
          <h2 className="font-primary">
            Don't <br /> have an <br /> account?
          </h2>
          <a href="#">Apply Now</a>
        </div>
      </div>
      <div className="question-section">
        <h1 className="font-primary">Still have questions?</h1>
        <a href="#home">Contact a representative</a>
      </div>
    </div>
  );
}
