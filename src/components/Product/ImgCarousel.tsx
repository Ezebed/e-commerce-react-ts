import { Box, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import imgPlaceholder from "@/assets/img/img_placeholder.webp";

export type ImgCarouselProps = {
  imgUrl: string[];
};

export default function ImgCarousel({ imgUrl }: ImgCarouselProps): JSX.Element {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((index) => {
        return index === imgUrl.length - 1 ? 0 : index + 1;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box width="100%" height="9rem" position="relative">
      <Box display="flex" overflow="hidden" width="100%" height="100%">
        {imgUrl.map((imgSrc, index) => (
          <Image
            key={index}
            src={imgSrc}
            alt={`alt_${imgSrc}`}
            fallbackSrc={imgPlaceholder}
            className="carouselImg"
            style={{ translate: `${-100 * imgIndex}%` }}
          />
        ))}
      </Box>
      <Box className="productCircleContainer">
        {imgUrl.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setImgIndex(index);
            }}
          >
            {index === imgIndex ? (
              <Box as="span" className="circle active" />
            ) : (
              <Box as="span" className="circle inactive" />
            )}
          </button>
        ))}
      </Box>
    </Box>
  );
}
