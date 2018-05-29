import React from 'react';
import PropTypes from 'prop-types';
import Flag from 'react-flags';

const CountryCard = props => {
  const { cca2: code2 = '', region = null, name = {}  } = props.country || {};

  return (
    <div className="col-sm-6 col-md-4 country-card">
      <div className="country-card-container border-gray rounded border mx-2 my-3 d-flex flex-row align-items-center p-0 bg-light">

        <div className="h-100 position-relative border-gray border-right px-2 bg-white rounded-left">

          <Flag country={code2} format="png" pngSize={64} basePath="./img/flags" className="d-block h-100" />

        </div>

        <div className="px-3">

          <span className="country-name text-dark d-block font-weight-bold">{ name.common }</span>

          <span className="country-region text-secondary text-uppercase">{ region }</span>

        </div>

      </div>
    </div>
  )
}

CountryCard.propTypes = {
  country: PropTypes.shape({
    cca2: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    name: PropTypes.shape({
      common: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default CountryCard;
