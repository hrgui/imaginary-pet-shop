import { ReactElement } from "react";
import { Link } from "react-router-dom";

type Props = {} & Partial<PetType>;

export function PetTypeCell({ id, name, thumbnail, low, high, count = 0 }: Props): ReactElement {
  const typeDataEl = (
    <div className="cursor-pointer w-full sm:w-auto">
      <h2 className="text-2xl font-semibold">{name}(s)</h2>
      <div className="w-full bg-gray-200">
        <img loading="lazy" src={thumbnail} className="w-full object-cover" alt={name} />
      </div>
      {low?.price && <h3>Lowest Price: ${low?.price}</h3>}
      {high?.price && <h3>Highest Price: ${high?.price}</h3>}
      {count <= 0 && <h4>SOLD OUT</h4>}
      {count <= 10 && count > 0 && <h4>Only {count} left!</h4>}
    </div>
  );

  if (count <= 0) {
    return typeDataEl;
  }

  return (
    <Link to={`/pets?type_id=${id}`} className="w-full sm:w-auto">
      {typeDataEl}
    </Link>
  );
}

export default PetTypeCell;
