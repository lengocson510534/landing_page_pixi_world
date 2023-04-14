import './App.css';
import Header from './component/Header';
import OurClients from './component/OurClients';
import SectionDiscoverd from './component/SectionDiscoverd';
import SectionNextCharacter from './component/SectionNextCharacter';
// import img 
import img_1 from './assets/images/Frame 12.png'
import img_tl from './assets/images/Other 19.png'
import img_tr from './assets/images/Other 10.png'
import img_bl from './assets/images/Ikbal 5.png'
import img_br from './assets/images/Other 18.png'

import img_tl_2 from './assets/images/Other 20.png'
import img_bl_2 from './assets/images/Marni 3.png'
import img_br_2 from './assets/images/Other 05.png'
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <OurClients />
      <SectionNextCharacter />
      <SectionDiscoverd
        url_img_main={img_1}
        url_img_tl={img_tl}
        url_img_tr={img_tr}
        url_img_bl={img_bl}
        url_img_br={img_br}
        className='ml-[63px] mr-[114px]'
      />
      <SectionDiscoverd
        url_img_main={img_1}
        url_img_tl={img_tl_2}
        url_img_tr={img_tl}
        url_img_bl={img_bl_2}
        url_img_br={img_br_2}
        className='flex-row-reverse ml-[120px] mr-[63px]'
      />
      <Footer />
    </div>
  );
}

export default App;
