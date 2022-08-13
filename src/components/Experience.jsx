import React from 'react'
import Retroscreen from './Retroscreen'

const Experience = () => {
    const header1 = 'EduCheck2.0'
    const text1=`
    > Date: April 2021 - August 2021
    > Role: Full Stack Developer
    > Technology: Django
    > Project: Build a web application to help students find their private teacher.
    `
    const header2 = 'Hoftmedical'
    const text2=`
    > Date: Jul 2022 - August 2022
    > Role: Frontend Developer
    > Technology: HTML, CSS, JavaScript, scss
    > Project: Building frontend  for the Healthcare website.
    `

  return (
    <div>
      <Retroscreen header={header1} text={text1} />
      <Retroscreen header={header2} text={text2} />
    </div>
  )
}

export default Experience