import { Product } from "@/utils/types/ProductTypes.d";
import ImgCarousel from "@/components/Product/ImgCarousel";

export default function ProductCard({
  id,
  title,
  price,
  description,
  images,
  category,
  creationAt,
  updatedAt,
}: Product): JSX.Element {
  return (
    <div className="productCard">
      <p className="productTitle">{title}</p>
      <ImgCarousel imgUrl={images} />
      <div className="productContent">
        <span className="productPrice">{price} $</span>
        <p className="productDescription">{description}</p>
      </div>
    </div>
  );
}
