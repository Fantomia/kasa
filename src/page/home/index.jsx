import backgroundHome from '../../assets/cover.png';
import Banner from '../../components/banner/banner';
import CardContent from '../../components/card/card';

const Home = () => {
    return (
        <>  
            <Banner 
                title="Chez vous, partout et ailleurs" 
                backgroundImage={backgroundHome} 
            />
            <CardContent />
        </>
    );
}

export default Home;