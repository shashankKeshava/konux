import { createComponent } from 'react-fela';
import { padding } from 'polished';
const __mainWrapper = props => ({});

const __title = props => ({
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Montserrat',
    fontSize: '24px',
    color: '#595959',
    fontWeight: 'bold',
    ...padding('34px'),
    letterSpacing: '0.5px',
});

const __loadMore = () => ({
    background: '#6F8CE3',
    borderRadius: '3px',
    display: 'flex',
    justifyContent: 'center',
    width: '280px',
    padding: '16px',
    fontFamily: 'Montserrat-Regular',
    fontSize: '14px',
    color: '#FFFFFF',
    letterSpacing: '0.29px',
    textAlign: 'right',
    boxShadow: '1px 1px 1px 1px #ccc',
    ':hover': {
        background: '#4159a0',
        border: '1px solid #ECECEC',
    },
});

const __loadWrapper = () => ({
    display: 'flex',
    justifyContent: 'center',
    margin: '40px',
});

const AppWrapper = createComponent(__mainWrapper);
const Title = createComponent(__title);
const LoadMore = createComponent(__loadMore, 'div', ['onClick']);
const LoadWrapper = createComponent(__loadWrapper);

export { AppWrapper, Title, LoadMore, LoadWrapper };
