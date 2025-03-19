import './Experiences.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {WorkIcon} from "./WorkIcon";
import {SchoolIcon} from "./SchoolIcon";

export const Experiences = () => {
    return (
        <section className='experiences'>
            <div className='experiencesContainer'>
                <VerticalTimeline lineColor='#f0f8ff'>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#638ce6', color: '#f0f8ff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="jul 2023"
                        iconStyle={{ background: '#4367be', color: '#f0f8ff' }}
                        icon={<WorkIcon/>}
                    >
                    <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Zig Websoftware B.V.</h4>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="sep 2016 - jul 2023"
                        style={{color:'#041027' }}
                        iconStyle={{ background: '#f0f8ff', color: '#fff' }}
                        icon={<SchoolIcon/>}
                    >
                        <h3 className="vertical-timeline-element-title">Bachelor, Communication Multimedia Design</h3>
                        <h4 className="vertical-timeline-element-subtitle">Hogeschool van Amsterdam</h4>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="sep 2022 - jul 2023"
                        style={{color:'#041027' }}
                        iconStyle={{ background: '#4367be', color: '#f0f8ff' }}
                        icon={<WorkIcon/>}
                    >
                        <h3 className="vertical-timeline-element-title">Software Engineer (stagiair)</h3>
                        <h4 className="vertical-timeline-element-subtitle">Zig Websoftware B.V.</h4>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="feb 2018 - apr 2018"
                        style={{color:'#041027' }}
                        iconStyle={{ background: '#4367be', color: '#f0f8ff' }}
                        icon={<WorkIcon/>}
                    >
                        <h3 className="vertical-timeline-element-title">JavaScript Ontwikkelaar (stagiar)</h3>
                        <h4 className="vertical-timeline-element-subtitle">Chyron Hego</h4>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="sep 2017 - jul 2023"
                        style={{color:'#041027' }}
                        iconStyle={{ background: '#4367be', color: '#f0f8ff' }}
                        icon={<WorkIcon/>}
                    >
                        <h3 className="vertical-timeline-element-title">Teamleider Verkoopklaar</h3>
                        <h4 className="vertical-timeline-element-subtitle">Albert Heijn</h4>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </section>
    )
}
