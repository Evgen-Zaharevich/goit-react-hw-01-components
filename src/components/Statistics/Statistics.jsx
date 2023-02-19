import PropTypes from 'prop-types';
import { Section, SectionTitle, StatisticList, StatisticListItem, Label, Percentage } from './Statistics.styled'
import { getRandomHexColor } from '../GetRandomHexColor';

export { Statistics };

function Statistics({title, stats}) {
    return (
        <Section>
            <SectionTitle>{title}</SectionTitle>

  <StatisticList>
    {stats.map(({id, label, percentage}) => (
        <StatisticListItem key={id} style={{backgroundColor: getRandomHexColor()}}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
        </StatisticListItem>))}
  </StatisticList>
</Section>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage:PropTypes.number.isRequired,
        })
    )
}