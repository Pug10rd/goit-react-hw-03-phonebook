import PropTypes from 'prop-types'
export const SearchFilter = ({value, onChange}) => {
    return (
      <label>
        Find contacts by name
        <input type="text" value={value} onChange={onChange} />
      </label>
    );
}

SearchFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}