import AccordionView from '@/_components/AccordionView';

const ReadMe = () => {

    const accordionData = [{title: "Accordion test 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing"  }]

    return (
        <>
         <h3>How to use this project </h3>
         <p>1. How to update import the latest data into the app..</p>
         <p>On Desktop Copy latest data in typingCSV and run script ImportDataToTypingProgress </p>
         <p>Copy of script found in docs folder</p>
         <hr></hr>
         <h3>Short Term Development Goals</h3>
         <p>Investigate Chart.js and other simple charting programs using accordion to compare</p>
        <hr></hr>
        <h3>NEXT DEVELOPMENT GOALS</h3>
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