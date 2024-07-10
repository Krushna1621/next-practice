import { notFound } from "next/navigation";
export default function ReviewsDetails({
  params,
}: {
  params: { productId: string; reviewsId: string };
}) {
  if (parseInt(params.reviewsId) > 1000) return notFound();
  return (
    <h1>
      Details about {params.productId} product Reviews {params.reviewsId}
    </h1>
  );
}
