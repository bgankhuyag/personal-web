import React, { useState } from 'react'
import SubHeading from 'components/subHeading/index'
import BulletPoint from 'components/bullet'
import { exp } from 'data/data'
import { showOnScroll } from 'utils/functions'
import '../styles.css'

const Experience = () => {
  const [tab, setTab] = useState(0);

  const handleChange = (e, index) => {
    if (tab !== index) {
      var clicked = e.target;
      clicked.classList.add('active-tab');
      setTab(index);
    }
  }

  let i = 0;

  const contents = exp.map((item, index) => {
    i++;
    return (
      <div key={i} className={tab === index ? 'active-tab-content' : 'inactive-tab-content'}>
        <div className="role">{item.role}</div>
        <div className="exp-name">{item.name}</div>
        <div className="date number">{item.start_date} - {item.end_date ? item.end_date : "Present"}</div>
        <ul>
        {item.description.map((elem) => {
          i++;
          return (
            <BulletPoint key={i} elem={elem}></BulletPoint>
          )
        })}
        </ul>
      </div>
    )
  })

  const tabs = exp.map((item, index) => {
    i++;
    if (tab === index) {
      return <div className="tab-item active-tab" key={i} onClick={(e) => handleChange(e, index)}>{item.name}</div>
    }
    return <div className="tab-item" key={i} onClick={(e) => handleChange(e, index)}>{item.name}</div>
  })

  showOnScroll('experience');

  return (
    <div className="exp sub-content" id="experience">
      <SubHeading number="01" text="Experience" />
      <div className="exp-content">
        <div className="tab">
          {tabs}
        </div>
        <div className="tab-content">
          {contents}
        </div>
      </div>
    </div>
  )
}

export default Experience;
