import AccordionView from "@/_components/AccordionView";
import { AccordionData, AccordionViewProps } from '@/_types/AccordionData';


// should be in a seperate file
const testData: AccordionData[] = [
  { title: 'Test 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing' },
  { title: '2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing' },
  { title: '33', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing' },
];



const Test = () => {
    return (
        <div>
            <h1>Testing the current Components</h1>
            1 Accordion...
            <AccordionView data={testData}/>
        </div>
    );
};

export default Test;