import PropTypes from 'prop-types';
import css from './FeedbackOptions.css';

export const FeedbackOptions = ({ options, onLeaveFeedback}) => {
    
    return options.map(option => (
        
    <button
        key={option}
        id={option}
        className={css.button}
        type="button"
        onClick={ onLeaveFeedback}>
            {option}
    </button>

    )); 
};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}