import PropTypes from "prop-types";

const Item = ({ item, onDelete }) => {
  console.log("Item received:", item); // Debugging log

  return (
    <div className="item-card">
      <h3>{item.name}</h3>
      <button onClick={() => onDelete(item.id)}>Delete</button>
      <button>Edit</button>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Item;
