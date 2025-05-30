import SectionFive from './sections/SectionFive/SectionFive'
import SectionFour from './sections/sectionFour/SectionFour'
import SectionOne from './sections/sectionOne/SectionOne'
import SectionThree from './sections/sectionThree/SectionThree'
import SectionTwo from './sections/sectionTwo/SectionTwo'
import SectionSix from './sections/sectionSix/SectionSix'
import SectionSeven from './sections/sectionSeven/SectionSeven'
export default function MyMain() {
  return (
    <main className='w-full'>
        <SectionOne />
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <SectionFive/>
        <SectionSix/>
        <SectionSeven/>
    </main>
  )
}
