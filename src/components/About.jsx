import React from 'react'
import Myascii from './Myascii'
import Oldpc from './Oldpc'
import Oldterminal from './Oldterminal'
import './styles/About.css'

const About = () => {

  const ughs=`
  > Uttarpara Government High School
  > Passing year: 2019
  > Subjects: MATH, PHYSICS, CHEMISTRY, STATISTICS
  > Location: Hooghly, West Bengal
  > Board: WBCHSE
  > http://www.uttarparagovtschool-esa.org/
  `
  const gcetts=`
  > Government College of Engineering and 
    Textile Technology, Serampore
  > Passing year: 2023
  > Subjects: Computer Science & Engineering
  > Degree: B.Tech
  > Location: Serampore, West Bengal
  > University: MAKAUT
  > https://www.gcetts.ac.in/
  `
const location=`
> Pin: 712232
> Post office: Bhadrakali
> City: Uttarpara
> District: Hooghly
> State: West Bengal
> Country: India
> https://goo.gl/maps/QZQZQ
`


const grades=`

  > Education: 10th
  > Board: WBBSE
  > Passing year: 2017
  > Score: 90.14%

  > Education: 12th
  > Board: WBCHSE
  > Passing year: 2019
  > Score: 81.4%

  > Education: B.Tech
  > Passing year: 2023
  > Score: 9.72/10 (till 6th semester)

`

const others=`
  > MotherTounge: Bengali
  > Religion: Humanity
  > Nationality: Indian
  > DOB: 28/05/2001
  > Hobby: Painting 
`

  return (
    <div>
      <Myascii />
      <hr  />
      <h2 className="terminalhead"  >MY SCHOOL</h2>
      <Oldterminal  text={ughs}   image={'https://directory.edugorilla.com/wp-content/uploads/sites/6/2018/06/85f310c3b93c0838d218c6b4b07abc7a.jpeg'}  />
      <h2 className="terminalhead"  >MY COLLEGE</h2>
      <Oldterminal  text={gcetts}  image={'http://1.bp.blogspot.com/-vioUzCCNcNc/TYdmCmvJLQI/AAAAAAAAAiU/Ljy6D9liw4g/w1200-h630-p-k-no-nu/Government_College_of_Engineering_%2526_Textile_Technology_Serampore_.JPG'}/>
      <h2 className="terminalhead"  >MY LOCATION</h2>
      <Oldterminal  text={location}  />
      <h2 className="terminalhead"  >MY SCORES</h2>
      <Oldterminal  text={grades}  />
      <h2 className="terminalhead"  >Others</h2>
      <Oldterminal  text={others}  />

    </div>
  )
}

export default About