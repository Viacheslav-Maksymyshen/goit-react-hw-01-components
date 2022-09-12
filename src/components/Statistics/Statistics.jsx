import PropTypes from 'prop-types';

import css from './Statistics.module.css';
import { getRandomHexColor } from 'additionalScripts/RandomHexColor.jsx';
export const Statistics = ({ title, stats }) => {
  return (
    <>
      <section className={css.statistics}>
        {title && <h2 className={css.title}>Upload stats</h2>}

        <ul className={css.stat__list}>
          {stats.map(({ id, label, percentage }) => {
            let color = getRandomHexColor();

            return (
              <li
                className={css.item}
                key={id}
                style={{ backgroundColor: color }}
              >
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}%</span>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
