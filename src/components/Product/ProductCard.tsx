import { Product } from "@/utils/types/ProductTypes.d";

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
      <img className="productImg" src={images[0]} alt={title} />
      <div className="productContent">
        <span className="productPrice">{price} $</span>
        <p className="productDescription">{description}</p>
      </div>
    </div>
  );
}
