export default function ReviewsDetails({
  params,
}: {
  params: { productId: string; reviewsId: string };
}) {
  return (
    <h1>
      Details about {params.productId} product Reviews {params.reviewsId}
    </h1>
  );
}
