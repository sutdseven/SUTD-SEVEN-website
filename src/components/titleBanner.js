import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import layer1 from '../assets/mountain1.png'
import layer2 from '../assets/mountain2.png'
import layer3 from '../assets/mountain3.png'
import layer4 from '../assets/mountain4.png'


const TitleBanner = () => {
    return (
        <div className="titleBanner">
            <ParallaxBanner style={{ aspectRatio: '2 / 1'}} className="parallaxBanner"
                layers={[
                    {
                        image: layer1,
                        translateY: [0, 40],
                        shouldAlwaysCompleteAnimation: true,
                        expanded: false,
                    },
                    {
                        image: layer2,
                        translateY: [5, 35],

                        shouldAlwaysCompleteAnimation: true,
                        expanded: false,
                    },
                    {
                        image: layer3,
                        translateY: [10, 30],

                        shouldAlwaysCompleteAnimation: true,
                        expanded: false,
                    },
                    {
                        image: layer4,
                        translateY: [15, 25],

                        shouldAlwaysCompleteAnimation: true,
                        expanded: false,
                    },

                ]}>
                <ParallaxBannerLayer className="titleLayer"  speed={0}>
                    <div className="titleContainer">
                        <img src="./SEVEN_logo.svg" className="logoImg" alt=""/>
                        <h1>SUTD's Premier Entrepreneurship Network</h1>
                    </div>
                </ParallaxBannerLayer>
            </ParallaxBanner>

        </div>
    );
}

export default TitleBanner;