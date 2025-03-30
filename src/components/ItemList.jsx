import Item from "./Item";
import PropTypes from "prop-types";

const ItemList = ({ items, onDelete }) => {
  return (
    <>
      {items.length > 0 ? (
        items.map((item) => <Item key={item.id} item={item} onDelete={onDelete} />)
      ) : (
        <p>No items found.</p>
      )}
    </>
  );
};

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ItemList;
