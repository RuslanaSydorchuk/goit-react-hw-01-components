import PropTypes from 'prop-types';
import css from './Statistic.module.css';

export default function Statistic ({title, stats}){

    let isTitle = false;
    if (title !== '') {
        isTitle = true;
    } else{
        isTitle = false;
    };

    const sectionTitle = <h2 className={css.title}>Upload stats</h2>
    return(
        <section className={css.statistics}>
            {isTitle ? sectionTitle : null}

          <ul className={css.statList}>
            <li className={css.item} key = {stats[0].id} style = {{backgroundColor: getRandomHexColor()}}>
              <span className={css.label}>{stats[0].label}</span>
              <span className={css.percentage}>{stats[0].percentage}%</span>
            </li>
            <li className={css.item} key = {stats[1].id} style = {{backgroundColor: getRandomHexColor()}}>
              <span className={css.label}>{stats[1].label}</span>
              <span className={css.percentage}>{stats[1].percentage}%</span>
            </li>
            <li className={css.item} key = {stats[2].id} style = {{backgroundColor: getRandomHexColor()}}>
              <span className={css.label}>{stats[2].label}</span>
              <span className={css.percentage}>{stats[2].percentage}%</span>
            </li>
            <li className={css.item} key = {stats[3].id} style = {{backgroundColor: getRandomHexColor()}}>
              <span className={css.label}>{stats[3].label}</span>
              <span className={css.percentage}>{stats[3].percentage}%</span>
            </li>
          </ul>
        </section>
    )
}

Statistic.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
}

function getRandomHexColor() {
    return(
      `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, 0)}`
    )
}

