export type AccordionData = {
    title: string;
    content: string;
  };
  
 export interface AccordionViewProps {
    data?: AccordionData[]; // Optional array of objects with title and content
  }