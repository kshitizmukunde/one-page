import { Accordion, AccordionItem } from '@szhsin/react-accordion';

const AccordionList = [
  {
    question: "What is your design process?",
    answer: "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.",
  },
  {
    question: "What tools and software do you use for UX design?",
    answer: "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.",
  },
  {
    question: "How do you measure the success of your UX designs?",
    answer: "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.",
  }
]

export default function FaqAccordion() {
  return (

    <Accordion>
        {AccordionList.map((item, index) => (
          <AccordionItem className="lg:text-start md:text-start sm:text-center text-center" key={index} header={item.question} initialEntered={index === 0}>
            <div className="answer lg:text-start md:text-start sm:text-center text-center">{item.answer}</div>
          </AccordionItem>
        ))}
    </Accordion>
  );
}