import React from "react";

const ProductDetails = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const { productId } = params;
  console.log(params);

  return <div>ProductDetails</div>;
};

export default ProductDetails;
