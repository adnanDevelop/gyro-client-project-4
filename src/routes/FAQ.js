import React, { useState } from "react";
import { faqdata } from "../components/FAQData.js";
import SingleQuestion from "../components/SingleQuestion";

export default function FAQ() {
    const [cards] = useState(faqdata);

    return (
        <div className="faq">
            <h1>FAQ</h1>

            <p>Our Customer Service staff will be happy to answer any questions you may have.
                Please use the form below to reach us.
                Our regular office hours are Monday through Friday, 8:00 AM - 8:00 PM in the eastern time zone.
                Members will receive a 24-hour emergency service number in their rental confirmation.</p>

            <section className="grid grid-cols-1 gap-8">
                {cards.map((card, index) => (
                    <SingleQuestion {...card} key={index} />
                ))}
            </section>
        </div>
    );
}