import Skeleton from 'react-loading-skeleton';

interface CardSkeletonListProps {
  cardsLength: number;
}

const CardSkeletonList = ({ cardsLength }: CardSkeletonListProps) => {
  const array = Array.from({ length: cardsLength });
  return (
    <>
      {array.map((_, index) => (
        <div key={index} className="grid w-[1fr] h-min gap-1">
          <div className="w-full h-[40vh]">
            <Skeleton width={205} height={300} />
          </div>
          <div className="flex flex-col gap-1">
            <Skeleton count={4} />
          </div>
        </div>
      ))}
    </>
  );
};

export default CardSkeletonList;
