import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Experience } from "./components/Experience";
import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import NavbarComponent from "./components/navbar";

// function App() {
//   return (
//     <Canvas
//       camera={{
//         fov: 64,
//         position: [2.3, 1.5, 2.3],
//       }}
//     >
//       <Experience />
//     </Canvas>
//   );
// }

function App() {
  return (
    <Wrapper>
      <NavbarComponent />
        <div className="Frame22" style={{left: '50%', height: 'min-content', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 92, display: 'inline-flex'}}>
        <div className="QA" style={{top: '60%', textAlign: 'right', color: '#572E10', fontSize: 96, fontFamily: 'Pacifico', fontWeight: '400', lineHeight: 0, wordWrap: 'break-word'}}>Q&A</div>
        <div className="Frame9" style={{height: 226, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
        <div className="ThisIsAQuestion" style={{color: '#E6B1AB', fontSize: 64, fontFamily: 'Poppins', fontWeight: '900', wordWrap: 'break-word'}}>This is a question?</div>
        <div className="LoremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrySStandardDummyTextEverSinceThe1500sWhenAnUnknownPrinterTookAGalleyOfType" style={{alignSelf: 'stretch', color: '#5B2D15', fontSize: 32, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 1, wordWrap: 'break-word'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</div>
        </div>
        <div className="Frame10" style={{height: 226, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
        <div className="ThisIsAQuestion" style={{color: '#E6B1AB', fontSize: 64, fontFamily: 'Poppins', fontWeight: '900', wordWrap: 'break-word'}}>This is a question?</div>
        <div className="LoremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrySStandardDummyTextEverSinceThe1500sWhenAnUnknownPrinterTookAGalleyOfType" style={{alignSelf: 'stretch', color: '#5B2D15', fontSize: 32, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 1, wordWrap: 'break-word'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</div>
        </div>
        <div className="Frame11" style={{height: 226, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
        <div className="ThisIsAQuestion" style={{color: '#E6B1AB', fontSize: 64, fontFamily: 'Poppins', fontWeight: '900', wordWrap: 'break-word'}}>This is a question?</div>
        <div className="LoremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrySStandardDummyTextEverSinceThe1500sWhenAnUnknownPrinterTookAGalleyOfType" style={{alignSelf: 'stretch', color: '#5B2D15', fontSize: 32, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 1, wordWrap: 'break-word'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</div>
        </div>
        </div>

        <div className="Frame9" style={{position: 'absolute', top: '5342px', width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div className="FromSeattleWithLove" style={{color: '#E6B1AB', fontSize: 64, fontFamily: 'Poppins', fontWeight: '900', wordWrap: 'break-word'}}>from Seattle with love</div>
            <div className="Frame8" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', display: 'flex'}}>
                <div className="ThankYou" style={{textAlign: 'right', color: '#572E10', fontSize: 96, fontFamily: 'Pacifico', fontWeight: '400', lineHeight: 0.5, wordWrap: 'break-word'}}>Thank you!</div>
            </div>
        </div>

        <img className="Screenshot20230912At15141" style={{borderRadius: 40, position: 'absolute', left: '960px', top: '4950px', width: '936px', height: '943px', borderRadius: '40px'}} src="https://via.placeholder.com/936x943" />
      {/* <Spline scene="https://prod.spline.design/yjRX9ZYyhqAmCXh1/scene.splinecode"/> */}
    </Wrapper>
  );
}

// {/* <Spline scene="https://prod.spline.design/yjRX9ZYyhqAmCXh1/scene.splinecode"/> */}
const Wrapper = styled.div`
  font-family: "Spline-Sans", sans-serif;
  font-size: 16px;
  color: white;
  position: relative;

  .spline {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;
    height: 1000,
  }
`;

const Content = styled.div`
  position: absolute;
`;

export default App;

