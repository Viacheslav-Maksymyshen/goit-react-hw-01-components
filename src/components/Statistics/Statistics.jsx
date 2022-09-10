import PropTypes from 'prop-types';
// import getRandomHexColor from 'additionalScripts/RandomHexColor';

export const Statistics = ({ title, stats }) => {
  return (
    <>
      <section className="statistics">
        {title && <h2 className="title">Upload stats</h2>}

        <ul className="stat-list">
          {stats.map(({ id, label, percentage }) => (
            <li className="item" key={id}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
