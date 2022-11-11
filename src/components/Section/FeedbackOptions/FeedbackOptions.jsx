import PropTypes from 'prop-types';


export const FeedbackOptions = ({ options, onLeaveFeedback}) => {
    
    return options.map(option => (
        
    <button
        key={option}
        id={option}
        
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