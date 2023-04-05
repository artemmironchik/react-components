import Skeleton from 'react-loading-skeleton';

interface CardSkeletonProps {
  cardsLength: number;
}

const CardSkeleton = ({ cardsLength }: CardSkeletonProps) => {
  const array = Array(cardsLength);
  return (
    <>
      {array.map((_, index) => {
        <div key={index} className="grid w-[1fr] h-min border border-black border-2">
          <div className="w-full h-[40vh]">
            <Skeleton width={200} height={360} />
          </div>
          <div className="flex flex-col gap-1">
            <Skeleton count={4} />
          </div>
        </div>;
      })}
    </>
  );
};

export default CardSkeleton;
