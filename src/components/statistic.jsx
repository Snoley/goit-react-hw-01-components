import PropTypes from 'prop-types';
import styled from 'styled-components';

const StatisticsSection = styled.div`
  margin: 0 auto;
  max-width: 800px;
  margin-bottom: 77px;
`;

const TitleStat = styled.h2`
  color: #333;
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  padding: 1rem 0;
  text-align: center;
`;

const StatList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  background-color: #f2f2f2;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0 0 1rem;
  padding: 1rem;
  text-align: center;
  width: calc(33.33% - 1rem);

  &:nth-child(3n + 1) {
    margin-left: 0;
  }

  &:nth-child(3n) {
    margin-right: 0;
  }
`;

const Percentage = styled.span`
  color: #333;
  font-size: 2rem;
  font-weight: bold;
`;

export const Statistics = ({ title, data }) => {
  return (
    <StatisticsSection>
      {title && <TitleStat>{title.toUpperCase()}</TitleStat>}
      <StatisticsList data={data} />
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};

export const StatisticsList = ({ data }) => {
  return (
    <StatList>
      {data.map((el) => (
        <Item key={el.id }>
          <span>{el.label }</span>
          <Percentage>{el.percentage}%</Percentage>
        </Item>
      ))}
    </StatList>
  );
};

StatisticsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
