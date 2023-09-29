import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
// import Fade from 'react-reveal/Fade'; 
// import Resume from "../assets/Roshan_Kanwar_Resume.pdf";

const NavbarComponent = () => {
  // const Line1Icon = (props) => (
  //   <svg preserveAspectRatio='none' viewBox='0 0 0 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
  //     <path d='M0 0L-1.04907e-06 24' stroke='#E8CDB2' strokeWidth={3} strokeLinecap='round' />
  //   </svg>
  // );

  return (
    <>
      <Navbar
        className="header-nav"
        fixed="top"
        collapseOnSelect
        bg="dark"
        expand="lg"
      >
        <Navbar.Brand href="#home" className="brand-name" style={{textDecoration: 'none'}}>
          ma+gk
        </Navbar.Brand>
        <svg className="line-1" width="4" height="28" viewBox="0 0 4 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2L2 26" stroke="#E8CDB2" stroke-width="3" stroke-linecap="round"/>
        </svg>

        {/* <div className="line-1" style={{width: '100%', height: '100%', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '3px #E8CDB2', padding: "6%", display: 'inline'}}>|</div> */}
        {/* <svg className="line-1" preserveAspectRatio='none' viewBox='0 0 0 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M0 0L-1.04907e-06 24' stroke='#E8CDB2' strokeWidth={3} strokeLinecap='round' />
        </svg> */}
        <Nav.Link className="px-1" href="#photos" style={{textDecoration: 'none'}}>
        Photos
        </Nav.Link>
        {/* <div style={{width: '100%', height: '100%', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '3px #E8CDB2', padding: "3%", display: 'inline'}}>|</div> */}
        <Nav.Link className="px-2" href="#qa" style={{textDecoration: 'none'}}>
        Q&amp;A
        </Nav.Link>
            {/* <Nav.Link
              className="px-3"
              rel="noopener noreferrer"
              href={Resume}
              target="_blank"
            >
              <Button variant="outline-success" className="button">
                Resume
              </Button>
            </Nav.Link> */}
          {/* </Nav> */}
        {/* </Navbar.Collapse> */}
      </Navbar>
      {/* <p style={{textAlign: 'right', color: '#572E10', fontSize: 128, fontFamily: 'Pacifico', fontWeight: '400', 
              lineHeight: 154.37, wordWrap: 'break-word'}}>123</p> */}
      {/* <div className="Frame3" style={{width: 956, height: 1080, padding: 24, left: 50%, top: 0, position: 'absolute', borderRadius: 48, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
        <img className="Screenshot20230912At15141" style={{alignSelf: 'stretch', height: 629, borderRadius: 40}} src="./assets/first.png" />
        <div className="Frame12" style={{alignSelf: 'stretch', 
        flex: '1 1 0', paddingLeft: 64, paddingRight: 64, paddingTop: 78, paddingBottom: 78, background: '#E8CDB2', borderRadius: 40, overflow: 'hidden', 
        flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
          <div className="Frame17" style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div className="Frame13" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
              <p style={{marginBottom: 0, textAlign: 'right', color: '#572E10', fontSize: 64, fontFamily: 'Pacifico', fontWeight: '400', lineHeight: 0, wordWrap: 'break-word'}}>123</p>
              <p className="Days" style={{color: '#572E11', fontSize: 24, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>Days</p>
            </div>
            <div className="Frame14" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
              <p style={{marginBottom: 0, textAlign: 'right', color: '#572E10', fontSize: 64, fontFamily: 'Pacifico', fontWeight: '400', lineHeight: 0, wordWrap: 'break-word'}}>04</p>
              <p className="Days" style={{color: '#572E11', fontSize: 24, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>Hours</p>
            </div>
            <div className="Frame15" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
              <p style={{marginBottom: 0, textAlign: 'right', color: '#572E10', fontSize: 64, fontFamily: 'Pacifico', fontWeight: '400', lineHeight: 0, wordWrap: 'break-word'}}>42</p>
              <p className="Days" style={{color: '#572E11', fontSize: 24, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>Minutes</p>
            </div>
            <div className="Frame16" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
          <div style={{textAlign: 'right', color: '#572E10', fontSize: 128, fontFamily: 'Pacifico', fontWeight: '400', lineHeight: 154.37, wordWrap: 'break-word'}}>32</div>
          <div className="Seconds" style={{color: '#572E11', fontSize: 32, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>Seconds</div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="Frame3">
    <img className="Screenshot20230912At15141" src="./assets/first.png" />
    <div className="Frame12">
        <div className="Frame17">
            <div className="Frame13">
                <p className="PacificoText">123</p>
                <p className="Days">Days</p>
            </div>
            <div className="Frame14">
                <p className="PacificoText">04</p>
                <p className="Days">Hours</p>
            </div>
            <div className="Frame15">
                <p className="PacificoText">42</p>
                <p className="Days">Minutes</p>
            </div>
            <div className="Frame16">
                <div className="PacificoLargeText">32</div>
                <div className="Seconds">Seconds</div>
            </div>
        </div>
    </div>
</div>

        {/* <div className="Frame10" style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', 
        alignItems: 'flex-start', gap: 48, display: 'inline-flex', position: 'absolute', left: '120px', top: '300px', width: '1120px', height: 'min-content', gap: '16px'}}>
          <div className="Frame9" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
            <div className="Celebrating" style={{color: '#E6B1AB', fontSize: 64, fontFamily: 'Poppins', fontWeight: '900', wordWrap: 'break-word'}}>Celebrating</div>
            <div className="Frame8" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', display: 'flex'}}>
              <div className="MinhAnh" style={{textAlign: 'right', color: '#572E10', fontSize: 96, fontFamily: 'Pacifico', fontWeight: '400', 
                                              lineHeight: 0.3, wordWrap: 'break-word'}}>Minh Anh +</div>
              <div className="GiaKhiem" style={{textAlign: 'right', color: '#BD571C', fontSize: 96, fontFamily: 'Pacifico', fontWeight: '400', 
                                              lineHeight: 2, wordWrap: 'break-word'}}>Gia Khiem</div>
            </div>
          </div>
          <div className="Frame11" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
            <div className="MarryingOnDec24th2023InHanoiVietnamFriendsAndFamiliesMustCome" style={{width: 840, color: '#5B2D15', fontSize: 32, fontFamily: 'Poppins', fontWeight: '400', 
                lineHeight: 1, wordWrap: 'break-word'}}>Marrying on Dec 24th, 2023, in Hanoi, Vietnam.<br/>Friends and families must come ヾ(・ω・*)</div>
            <div className="Frame4" style={{paddingLeft: 48, paddingRight: 48, paddingTop: 24, paddingBottom: 24, background: '#572E10', 
            borderRadius: 50, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
              <div className="Rsvp" style={{color: 'white', fontSize: 32, fontFamily: 'Poppins', fontWeight: '900', wordWrap: 'break-word'}}>RSVP</div>
              <div className="ArrowRight" style={{width: 24, height: 24, position: 'relative'}}>
                <div className="Vector" style={{width: 14, height: 0, left: 5, top: 12, position: 'absolute', border: '3px white solid'}}></div>
                <div className="Vector" style={{width: 7, height: 14, left: 12, top: 5, position: 'absolute', border: '3px white solid'}}></div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="Frame10">
    <div className="Frame9">
        <div className="Celebrating">Celebrating</div>
        <div className="Frame8">
            <div className="MinhAnh">Minh Anh +</div>
            <div className="GiaKhiem">Gia Khiem</div>
        </div>
    </div>
    <div className="Frame11">
        <div className="MarryingOnDec24th2023InHanoiVietnamFriendsAndFamiliesMustCome">
            Marrying on Dec 24th, 2023, in Hanoi, Vietnam.<br/>Friends and families must come ヾ(・ω・*)
        </div>
        <div className="Frame4">
            <div className="Rsvp">RSVP</div>
            <div className="ArrowRight">
                <div className="Vector horizontal"></div>
                <div className="Vector vertical"></div>
            </div>
        </div>
    </div>
</div>

        <div className="Frame18" style={{position: 'absolute', left: '120px', top: '1268px', width: '1120px', height: 'min-content', alignItems: 'flex-start', gap: '16px',  height: '100%', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
        <div className="Frame19" style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
        <img className="Screenshot20230912At15141" style={{alignSelf: 'stretch', height: 432, borderRadius: 40}} src="https://via.placeholder.com/363x432" />
        <img className="Screenshot20230912At15143" style={{alignSelf: 'stretch', height: 432, borderRadius: 40}} src="https://via.placeholder.com/363x432" />
        <img className="Screenshot20230912At15144" style={{alignSelf: 'stretch', height: 658, borderRadius: 40}} src="https://via.placeholder.com/363x658" />
        <img className="Screenshot20230912At15145" style={{alignSelf: 'stretch', height: 432, borderRadius: 40}} src="https://via.placeholder.com/363x432" />
        </div>
        <div className="Frame20" style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
        <img className="Screenshot20230912At15142" style={{alignSelf: 'stretch', height: 666, borderRadius: 40}} src="https://via.placeholder.com/363x666" />
        <img className="Screenshot20230912At15143" style={{alignSelf: 'stretch', height: 665, borderRadius: 40}} src="https://via.placeholder.com/363x665" />
        <img className="Screenshot20230912At15144" style={{alignSelf: 'stretch', height: 646, borderRadius: 40}} src="https://via.placeholder.com/363x646" />
        </div>
        <div className="Frame21" style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
        <img className="Screenshot20230912At15142" style={{alignSelf: 'stretch', height: 551, borderRadius: 40}} src="https://via.placeholder.com/363x551" />
        <img className="Screenshot20230912At15143" style={{alignSelf: 'stretch', height: 551, borderRadius: 40}} src="https://via.placeholder.com/363x551" />
        <img className="Screenshot20230912At15144" style={{alignSelf: 'stretch', height: 535, borderRadius: 40}} src="https://via.placeholder.com/363x535" />
        <img className="Screenshot20230912At15145" style={{alignSelf: 'stretch', height: 329, borderRadius: 40}} src="https://via.placeholder.com/363x329" />
        </div>
        </div>

        <div className="Photos" style={{textAlign: 'right', color: '#572E10', fontSize: 96, fontFamily: 'Pacifico', fontWeight: '400', top: '1268px', wordWrap: 'break-word', lineHeight: 27}}>Photos</div>

        {/* <div className="Frame22" style={{left: '50%', height: 'min-content', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 92, display: 'inline-flex'}}>
        <div className="QA" style={{textAlign: 'right', color: '#572E10', fontSize: 96, fontFamily: 'Pacifico', fontWeight: '400', lineHeight: 115.78, wordWrap: 'break-word'}}>Q&A</div>
        <div className="Frame9" style={{height: 226, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
        <div className="ThisIsAQuestion" style={{color: '#E6B1AB', fontSize: 64, fontFamily: 'Poppins', fontWeight: '900', wordWrap: 'break-word'}}>This is a question?</div>
        <div className="LoremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrySStandardDummyTextEverSinceThe1500sWhenAnUnknownPrinterTookAGalleyOfType" style={{alignSelf: 'stretch', color: '#5B2D15', fontSize: 32, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 38.40, wordWrap: 'break-word'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</div>
        </div>
        <div className="Frame10" style={{height: 226, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
        <div className="ThisIsAQuestion" style={{color: '#E6B1AB', fontSize: 64, fontFamily: 'Poppins', fontWeight: '900', wordWrap: 'break-word'}}>This is a question?</div>
        <div className="LoremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrySStandardDummyTextEverSinceThe1500sWhenAnUnknownPrinterTookAGalleyOfType" style={{alignSelf: 'stretch', color: '#5B2D15', fontSize: 32, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 38.40, wordWrap: 'break-word'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</div>
        </div>
        <div className="Frame11" style={{height: 226, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
        <div className="ThisIsAQuestion" style={{color: '#E6B1AB', fontSize: 64, fontFamily: 'Poppins', fontWeight: '900', wordWrap: 'break-word'}}>This is a question?</div>
        <div className="LoremIpsumIsSimplyDummyTextOfThePrintingAndTypesettingIndustryLoremIpsumHasBeenTheIndustrySStandardDummyTextEverSinceThe1500sWhenAnUnknownPrinterTookAGalleyOfType" style={{alignSelf: 'stretch', color: '#5B2D15', fontSize: 32, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 38.40, wordWrap: 'break-word'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</div>
        </div>
        </div> */}
      {/* <div className="Frame10" style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 48, display: 'inline-flex'}}>
        <div className="Frame9" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
          <div className="Celebrating" style={{color: '#E6B1AB', fontSize: 64, fontFamily: 'Poppins', fontWeight: '900', wordWrap: 'break-word'}}>Celebrating</div>
          <div className="Frame8" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', display: 'flex'}}>
            <div className="MinhAnh" style={{textAlign: 'right', color: '#572E10', fontSize: 96, fontFamily: 'Pacifico', fontWeight: '400', lineHeight: 115.78, wordWrap: 'break-word'}}>Minh Anh +</div>
            <div className="GiaKhiem" style={{textAlign: 'right', color: '#BD571C', fontSize: 96, fontFamily: 'Pacifico', fontWeight: '400', lineHeight: 115.78, wordWrap: 'break-word'}}>Gia Khiem</div>
          </div>
          </div>
            <div className="Frame11" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
              <div className="MarryingOnDec24th2023InHanoiVietnamFriendsAndFamiliesMustCome" style={{width: 840, color: '#5B2D15', fontSize: 32, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 38.40, wordWrap: 'break-word'}}>Marrying on Dec 24th, 2023, in Hanoi, Vietnam.<br/>Friends and families must come ヾ(・ω・*)</div>
              <div className="Frame4" style={{paddingLeft: 48, paddingRight: 48, paddingTop: 24, paddingBottom: 24, background: '#572E10', borderRadius: 50, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
              <div className="Rsvp" style={{color: 'white', fontSize: 32, fontFamily: 'Poppins', fontWeight: '900', wordWrap: 'break-word'}}>RSVP</div>
              <div className="ArrowRight" style={{width: 24, height: 24, position: 'relative'}}>
              <div className="Vector" style={{width: 14, height: 0, left: 5, top: 12, position: 'absolute', border: '3px white solid'}}></div>
              <div className="Vector" style={{width: 7, height: 14, left: 12, top: 5, position: 'absolute', border: '3px white solid'}}></div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className={frame3}> */}
        {/* <div className={image1}></div>
        <div className={frame12}>
          <div className={frame17}>
            <div className={frame13}>
              <div className={_123}>123</div>
              <div className={days}>Days</div>
            </div>
            <div className={frame14}>
              <div className={_4}>04</div>
              <div className={hours}>Hours</div>
            </div>
            <div className={frame15}>
              <div className={_42}>42</div>
              <div className={minutes}>Minutes</div>
            </div>
            <div className={frame16}>
              <div className={_32}>32</div>
              <div className={seconds}>Seconds</div>
            </div>
          </div>
        </div> */}
      {/* </div> */}
    </>
  );
}

export default NavbarComponent;