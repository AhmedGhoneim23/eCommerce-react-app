import { TLoading } from "@customTypes/index";
import CategorySkeleton from "../Skeletons/CategorySkeleton";
import CartSkeleton from "../Skeletons/CartSkeleton";
import ProductSkeleton from "../Skeletons/ProductSkeleton";
import LottieHandler from "../LottieHandler/LottieHandler";

const skeletonsTypes = {
  cart: CartSkeleton,
  category: CategorySkeleton,
  product: ProductSkeleton,
}

type LoadingProps = {
  loading: TLoading;
  error: null | string;
  children: React.ReactNode;
  type?: keyof typeof skeletonsTypes;
};

const Loading = ({ loading, error, children, type = "category" }: LoadingProps) => {
  const Component = skeletonsTypes[type]

  if (loading === "pending") {
    return <Component/>
  }
  if (loading === "failed") {
    return <LottieHandler type="error" message={error as string} className="text-danger"/>;
  }
  return <div>{children}</div>;
};

export default Loading;
