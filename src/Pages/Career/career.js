import React from 'react';
import Element from 'react-scroll/modules/components/Element'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa';
import { PiStudentBold } from "react-icons/pi";

const CareerTimeline = () => {
  return (
    <Element className='careercontainer p-4 bg-light' id='career'>
    <div>
        <center>
            <strong className='mt-4 highlights'>Career Journey</strong>
        </center>
      <hr/>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#6c63ff', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #000080' }}
          iconStyle={{ background: '#6c63ff', color: '#fff' }}
          icon={<PiStudentBold />}
        >
          <h6 className="vertical-timeline-element-title">SSLC</h6>
          <h6 className="vertical-timeline-element-subtitle">D.B.T.R Higher Secondary School</h6>
          <p>90.2% (2016 - 2017)</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#6c63ff', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #000080' }}
          iconStyle={{ background: '#6c63ff', color: '#fff' }}
          icon={<PiStudentBold />}
        >
          <h6 className="vertical-timeline-element-title">HSC</h6>
          <h6 className="vertical-timeline-element-subtitle">Sambantham Higher Secondary School</h6>
          <p>75.18% (2018 - 2019)</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#6c63ff', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #000080' }}
          iconStyle={{ background: '#6c63ff', color: '#fff' }}
          icon={<PiStudentBold />}
        >
          <h6 className="vertical-timeline-element-title">B.Tech</h6>
          <h6 className="vertical-timeline-element-subtitle">MAM College Of Engineering and Technology</h6>
          <p>CGPA - 8.39 (2019 - 2022)</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#6c63ff', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #000080' }}
          iconStyle={{ background: '#6c63ff', color: '#fff' }}
          icon={<FaBriefcase />}
        >
          <h6 className="vertical-timeline-element-title">Software Developer</h6>
          <h6 className="vertical-timeline-element-subtitle">Newdream Data Systems</h6>
          <p>2023 - Present</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      </div>      
    </Element>
  );
};

export default CareerTimeline;
