import { useState } from "react";
import StyledProductPhotos, { Title } from "./ProductPhotos.styled";
import PhotoAlbum from "react-photo-album";

// Lightbox
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const photos = [
   { src: "/images/products/001.jpg", width: 720, height: 1280 },
   { src: "/images/products/002.jpg", width: 960, height: 1280 },
   { src: "/images/products/003.jpg", width: 960, height: 1280 },
   { src: "/images/products/007.jpg", width: 720, height: 1280 },
   { src: "/images/products/009.jpg", width: 960, height: 1280 },
   { src: "/images/products/010.jpg", width: 960, height: 1280 },
   { src: "/images/products/004.jpg", width: 937, height: 1280 },
];

const settings = {
   layout: "masonry",
   spacing: 10,
   photos: photos,
   columns: (width) => {
      if (width < 900) return 3;
      else if (width < 600) return 1;

      return 5;
   },
};

const ProductPhotos = () => {
   const [index, setIndex] = useState(-1);

   return (
      <StyledProductPhotos>
         <Title>Фотогалерея товара</Title>

         <PhotoAlbum {...settings} onClick={({ index }) => setIndex(index)} />

         <Lightbox
            slides={photos}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            plugins={[Fullscreen, Thumbnails, Zoom]}
         />
      </StyledProductPhotos>
   );
};

export default ProductPhotos;
