import AccordionView from '@/_components/AccordionView';

const ReadMe = () => {

    const accordionData = [{title: "Accordion 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing"  }]

    return (
        <>
         <p>Remind yourself on how to use this project </p>
         <p>1. How to update import the lastest data into the app..</p>
         <p>On Desktop Copy latest data in typingCSV and run script ImportDataToTypingProgress </p>
         <p>Copy of script found in docs folder</p>

        <hr></hr>
        <p>NEXT DEVELOPMENT GOALS</p>
        <p>Update the normal page to be able to gain insights </p>
        <p>Mean Median and Mode</p>
        <p>Comparison of speed and accuracy, find correlation</p>
        <p>5 day moving average</p>
        <p>familiarity with FE graphing options</p>
        <p>Backend create a CRUD for data</p>

        {JSON.stringify(accordionData)}
        {/* <AccordionView data={accordionData} /> */}

        </>
    );
}

export default ReadMe;