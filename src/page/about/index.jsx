import Section from '../../components/section/section';
import Banner from '../../components/banner/banner';
import backgroundAbout from '../../assets/backgroundabout.png';
import aboutData from '../../data/about.json';

// Transformation des données  de 'about' pour les rendre utilisables dans ma section
const sectionAboutData = aboutData.map(item => ({
    title: item.aboutTitle,
    content: item.aboutText
  }));

const About = () => {
    return (
        <>      
            <Banner backgroundImage={backgroundAbout} />
            <Section data={sectionAboutData}/>
        </>
    );
}

export default About;