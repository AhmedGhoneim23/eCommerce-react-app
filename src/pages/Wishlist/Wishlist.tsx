import { memo } from "react";
import { Heading, GridList } from "@components/common/index";
import Loading from "@components/feedback/Loading/Loading";
import { Product } from "@components/eCommerce/index";
import useWishlist from "./useWishlist";

const Wishlist = memo(() => {
  const { records, loading, error } = useWishlist();

  return (
    <>
      <Heading title="Your Wishlist" />
      <Loading loading={loading} error={error} type="product">
        <GridList
          records={records}
          renderItem={(record) => <Product {...record} />}
          message="Your Wishlist Is Empty"
        />
      </Loading>
    </>
  );
});

export default Wishlist;
