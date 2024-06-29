import { FC } from "react";

interface Props {
  onToggleFavorite?: (id: number) => void;
}

const FavoriteItem: FC<Props> = ({ onToggleFavorite }) => {
  return (
    <div
      className="bg-red-500 cursor-pointer p-2 rounded-full"
      onClick={() => onToggleFavorite}
    >
      Fav
    </div>
  );
};

export default FavoriteItem;
