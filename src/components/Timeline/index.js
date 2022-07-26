import * as React from 'react';
import { Typography } from '@mui/material';

//Timeline Components
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

//Card Components
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function ColorsTimeline() {
  return (
    <Timeline position="alternate">
      {/* Robert Half / Credit Human Job Description */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Card>
            <CardContent>
              <Typography align="center" variant="h6" fontSize={"2.0vh"}> Credit Human - REACT Developer </Typography>
              <Typography align="center" variant="h6" fontSize={"2.0vh"}> May 2021 - May 2022 </Typography>
              <Typography align="justify" fontSize={"1.5vh"}> ● Redesigned/Modernized  MortgageFlex UI to fit MH Lending division requirements.</Typography> 
              <Typography align="justify" fontSize={"1.5vh"}> ● Built an REACT application that streamlined loan processor interaction via implementation of React Functional components, useEffect Hooks, etc</Typography> 
              <Typography align="justify" fontSize={"1.5vh"}> ● Coordinated with CH Dev-Ops teams in San Antonio to unify and standardized coding and internal documentation. </Typography> 
              <Typography align="justify" fontSize={"1.5vh"}> ● Communicated project status and deployment schedules with loan production department and R/D </Typography>
              <Typography align="justify" fontSize={"1.5vh"}> ● Assisted in legacy upkeep of the Daybreak LOS</Typography>
              <Typography align="justify" fontSize={"1.5vh"}> ● Used JEST and Enzyme to create automated unit testing to ensure software quality. </Typography> 
              <Typography align="justify" fontSize={"1.5vh"}> ● Utlize GIT and NVM for version control. </Typography>
              <Typography align="justify" fontSize={"1.5vh"}> ● Use Redux-Toolkit to create global store that multiple components can reference.</Typography>
              <Typography align="justify" fontSize={"1.5vh"}> ● Adhered to established methodologies while continuously analyzing processes for improved performance and adaptability.</Typography>
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
        </TimelineSeparator>
        <TimelineContent>
          <Card>
            <CardContent>
              <Typography align="center" variant="h6" fontSize={"2.0vh"}> Commencement Bay Properties - Front-End Developer </Typography>
              <Typography align="center" variant="h6" fontSize={"2.0vh"}> January 2020 - May 2021 </Typography>
              <Typography align="justify" fontSize={"1.5vh"}> ● Collaborated with the investment team to produce an application that mimics RE brokerage firm’s CMA. </Typography>
              <Typography align="justify" fontSize={"1.5vh"}> ● Utilized Zillow API to query and populate comparables based on SqFt, Year, Building style, address, price etc. </Typography>
              <Typography align="justify" fontSize={"1.5vh"}> ● Used POSTman / Insomnia API design platform to test Zillow API queries </Typography>
              <Typography align="justify" fontSize={"1.5vh"}> ● Designed a mobile application that prioritizes responsive design and ease of use via Bootstrap CDN.</Typography>
              <Typography align="justify" fontSize={"1.5vh"}> ● Implemented Middleware and Thunk  in the project to fetch data from the back-end and also to perform RESTFUL services. </Typography>
              <Typography align="justify" fontSize={"1.5vh"}> ● Built market estimation logic for properties that did not have enough comparables.</Typography>
              <Typography align="justify" fontSize={"1.5vh"}> ● Listened to investor suggestions on how end-user UI should behave in edge cases.</Typography>
              <Typography align="justify" fontSize={"1.5vh"}> ● Created a backup CMA data store using Redux Toolkit, should investors ever have to estimate fair market value in areas with no internet / WIFI.</Typography>
              <Typography align="justify" fontSize={"1.5vh"}> ● Relied on Express and Node.JS to help facilitate server requests.</Typography>
              <Typography align="justify" fontSize={"1.5vh"}> ● Built controlled components that can be easily customizable by passing user defined props.</Typography>
              <Typography align="justify" fontSize={"1.5vh"}> ● Provide value by integrating business rules and content in accordance with requirements.</Typography>
              <Typography align="justify" fontSize={"1.5vh"}> ● Work closely with Product Owners, Analysts and QA in an Agile environment to ensure quality, security and maintenance of applications, and to ensure code meets development standards and guidelines.</Typography>
              <Typography align="justify" fontSize={"1.5vh"}> ● Contribute to a DevOps culture and development of continuous integration processes and tools.</Typography>
            </CardContent>
          </Card></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
        </TimelineSeparator>
        <TimelineContent>
          <Card>
            <CardContent>
              <Typography align="center" variant="h6" fontSize={"2.0vh"}> DHS/SEATAC Airport - UI Developer </Typography>
              <Typography align="center" variant="h6" fontSize={"2.0vh"}> April 2018 - November 2020 </Typography>
              <Typography align="justify" fontSize={"1.5vh"}> ● Coordinated with TSA, DHS, Port of Seattle police, FAA and numerous other airline / vendors to help design graphic intensive billboards for SEATAC airport.</Typography>
              <Typography align="justify" fontSize={"1.5vh"}> ● Developed a suite of wireframes for approval and review from both FSD (Federal Security Director) and Port officials. </Typography>
              <Typography align="justify" fontSize={"1.5vh"}> ● Implemented both audio and visual cues on billboards to assist passengers with disabilities. Expanded on 508 - regulation  requirements.</Typography>
              <Typography align="justify" fontSize={"1.5vh"}> ● IUsed CSS grid and Bootstrap CDN to design visual layout of billboards.</Typography>
              <Typography align="justify" fontSize={"1.5vh"}> ● Created multiple front-end templates in case Port Authority decided to change LED billboard display size.</Typography>
              <Typography align="justify" fontSize={"1.5vh"}> ● Cooperated with data scientists in building boilerplate code for the display of passenger metrics.</Typography>
              <Typography align="justify" fontSize={"1.5vh"}> ● Followed AGILE and SCRUM methodologies to allow projects to meet sprint deadlines.</Typography>
              <Typography align="justify" fontSize={"1.5vh"}> ● Improved css design and layout by listening to criticism in consumer focus groups.</Typography>
              <Typography align="justify" fontSize={"1.5vh"}> ● Tested out the capabilities of the redux-starter-kit (Redux 1.0) in separate branches</Typography>
              <Typography align="justify" fontSize={"1.5vh"}> ● Experimented with  REACT 16.8 to gauge capability of React Hooks </Typography>
              <Typography align="justify" fontSize={"1.5vh"}> ● Conducted an application-wide refractor to accommodate React 16.8 and redux-starter-kit (redux-starter-kit), converting class components and their constructor(props) to functional components using Hooks.</Typography>
            </CardContent>
          </Card></TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}