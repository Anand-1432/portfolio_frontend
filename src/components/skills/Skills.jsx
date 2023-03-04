import React, { useState } from 'react';
import './skills.scss';

import reactImg from '../../assests/react.jpg'
import htmlImg from '../../assests/html.jpg'
import sassImg from '../../assests/sass.png'
import jsImg from '../../assests/js.jpg'
import nodeImg from '../../assests/node.png'
import mongoImg from '../../assests/mongo.png'
import expressImg from '../../assests/express.png'
import cImg from '../../assests/c.png'
import cpp from '../../assests/cpp.jpg'
import SkillCard from './SkillCard';
import Bar from './Bar';

import ScrollTrigger from 'react-scroll-trigger'


const Slider = () => {


  const skillArray1 = [
    { name: "React.js", percentage: 95 },
    { name: "Node.js", percentage: 70 },
    { name: "HTML", percentage: 95 },
    { name: "MongoDB", percentage: 75 },
    { name: "MySQL", percentage: 70 },
  ]

  const skillArray2 = [
    { name: "C language", percentage: 90 },
    { name: "C++", percentage: 95 },
    { name: "CSS", percentage: 95 },
    { name: "JavaScript", percentage: 80 },
    { name: "Bootstrap", percentage: 60 },
  ]


  const [flow, setflow] = useState(false);

  const inc = () => {
    setflow(true);
  }

  const dec = () => {
    setflow(false);
  }


  return (
    <>

      <div className='skills'>


        <ScrollTrigger onEnter={inc} onExit={dec}>

          <div className='skillSet'>
            <div className='head'>Why Choose Me</div>
            <section>My Expertise Area</section>

            <div className='skillGrid container'>
              <div className='row'>

                <div className='col-md-6 col-xl-6 col-lg-6 left'>

                  {skillArray1.map((val, index) => {
                    return <Bar data={val} key={index} flow={flow} />
                  })}

                </div>

                <div className='col-md-6 col-xl-6 col-lg-6 right'>

                  {skillArray2.map((val, index) => {
                    return <Bar data={val} key={index} flow={flow} />
                  })}

                </div>

              </div>
            </div>

          </div>

        </ScrollTrigger>



        <div className='slider'>
          <h1>Top Skills</h1>
          <div className='slider_track'>

            <div className='leftShade'></div>
            <div className='rightShade'></div>

            <SkillCard name="React" dec="front-end library" img={reactImg} />
            <SkillCard name="Node.js" dec="Backend technology" img={nodeImg} />
            <SkillCard name="MongoDB" dec="Document Database" img={mongoImg} />
            <SkillCard name="HTML" dec="Hypertext Markup Language" img={htmlImg} />
            <SkillCard name="Sass" dec="CSS pre-processor" img={sassImg} />
            <SkillCard name="JavaScript" dec="Programming language" img={jsImg} />
            <SkillCard name="C++" dec="Programming language" img={cpp} />
            <SkillCard name="C language" dec="Programming language" img={cImg} />
            <SkillCard name="Express.js" dec="Node.js framework" img={expressImg} />

          </div>
        </div>

      </div>
    </>
  );
};

export default Slider;
