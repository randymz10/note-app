import PropTypes from "prop-types";

function ListItem({title, description}) {
    return (
        <div className="my-3">
         <h3>{title}</h3>
         <p>{description}</p>
        </div>
    )
}

ListItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

export default ListItem
