import PhotoAlbum from 'react-photo-album';
import { useEffect } from 'react';
import image1 from '../assets/hatimage1.png';
import image2 from '../assets/mitchmerch1.jpg';
import image3 from '../assets/mitchmerch2.jpg';
import image4 from '../assets/mitchmerch3.jpg';
import image5 from '../assets/mitchhero.jpg';
import image6 from '../assets/mitchmerch5.jpg';
import image7 from '../assets/mitchmerch6.jpg';
import image8 from '../assets/mitchmerch7.jpg';
import image9 from '../assets/mitchmerch8.jpg';
import image10 from '../assets/mitchmerch9.jpg';
import image11 from '../assets/hatimage2.png';
import image12 from '../assets/shirtimage2.png';
import image13 from '../assets/mitchmerch12.jpg';
import image14 from '../assets/mitchmerch13.jpg';


const photos = [
 { src: image2, width: 800, height: 550, },
 { src: image8, width: 900, height: 600, },
 { src: image3, width: 400, height: 600, },
 { src: image7, width: 800, height: 600, },
 { src: image6, width: 400, height: 600, },
 { src: image13, width: 400, height: 600, },
 { src: image1, width: 600, height: 600, },
 { src: image11, width: 600, height: 600, },
 { src: image5, width: 800, height: 550, },
 { src: image14, width: 700, height: 600, },
 { src: image4, width: 400, height: 600, },
 { src: image10, width: 400, height: 600, },
 { src: image9, width: 900, height: 600, },
 { src: image12, width: 600, height: 600, },
]
 ;

function MerchGallery() {

 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 return (
  <>
   <section className="mx-4 gallery relative mb-16">
    <PhotoAlbum layout="masonry" photos={photos} />
   </section>
  </>
 )
}

export default MerchGallery