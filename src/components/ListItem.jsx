import PropTypes from "prop-types";

function ListItem({ title, description }) {
  return (
    <div className="col-3">
      <div className="card h-100">
        <header className="card-header text-center">
          <h3 className="card-title">{title}</h3>
        </header>
        <section className="card-body">
          <p className="card-text">{description}</p>
        </section>
      </div>
    </div>
  );
}

ListItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ListItem;
