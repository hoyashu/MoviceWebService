import { Tag } from 'antd';

type listProps = {
  list: string[];
};

export function MovieGenres({ list }: listProps) {
  return (
    <div className="genreList">
      {list.map((genre: string) => (
        <Tag key={genre}>{genre}</Tag>
      ))}
    </div>
  );
}
