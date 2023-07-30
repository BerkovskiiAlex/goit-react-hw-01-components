import React from 'react';
import PropTypes from 'prop-types';
import {
  StatisticsSection,
  StatisticsH2,
  StatisticsUl,
  StatisticsLi,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title ? <StatisticsH2>{title}</StatisticsH2> : null}
      <StatisticsUl>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsLi
            key={id}
            color={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
          >
            <span>{label}</span>
            <span>{percentage}%</span>
          </StatisticsLi>
        ))}
      </StatisticsUl>
    </StatisticsSection>
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
