import { createComponent } from 'react-fela';
import { padding, margin } from 'polished';

const __filterWrapper = () => ({
    background: '#FFFFFF',
    fontSize: '12px',
    ...padding('20px', '0px', '25px', '0px'),
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    boxShadow: '1px 1px 1px #e6e5e5',
    position: 'sticky',
    top: '0px',
    zIndex: '2',
});

const __gender = ({ isActive = false }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#656565',
    border: '1px solid #D7D8DB',
    fontFamily: 'Montserrat-Regular',
    width: '160px',
    ':hover': {
        background: isActive ? '#6F8CE3' : '#F5F6F7',
    },
    extend: {
        condition: isActive,
        style: {
            background: '#6F8CE3',
            color: '#FFFFFF',
        },
    },
});

const __genderSelector = () => ({
    display: 'flex',
    background: '#FFFFFF',
    borderRadius: '3px',
    height: '34px',
    boxShadow: '1px 1px 1px 1px #ccc',
});

const __sortBySelector = () => ({
    display: 'flex',
    justifyContent: 'space-between',
});
const __sortByLabel = () => ({
    fontFamily: 'Montserrat-Medium',
    color: '#595959',
    padding: '11px 6px 10px 6px',
});

const __select = ({ isActive = false }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    background: '#FFFFFF',
    border: '1px solid #D7D8DB',
    borderRadius: '3px',
    fontFamily: 'Montserrat-Regular',
    color: '#595959',
    ...padding('11px', '7px', ' 10px', '7px'),
    width: '200px',
    boxShadow: '1px 1px 1px 1px #ccc',

    ':hover': {
        border: '1px solid #F5F6F7',
    },
    extend: [
        {
            condition: isActive,
            style: {
                border: '1px solid #6F8CE3',
            },
        },
    ],
});

const __listOptions = () => ({
    position: 'absolute',
    marginTop: '30px',
    background: '#FFFFFF',
    border: '1px solid #E7E8EC',
    boxShadow: '0 2px 6px 0 rgba(115,115,115,0.12)',
    borderRadius: '3px',
    width: 'inherit',
    zIndex: 1,
});

const __option = ({ isDefault, isActive }) => ({
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    ...padding('5px', '5px', '5px', '8px'),
    ':hover': {
        background: isDefault ? 'inherit' : '#F5F6F7',
    },
    extend: [
        {
            condition: isDefault,
            style: {
                height: 'unset',
                ...padding('0px', '0px', '0px', '10px'),
            },
        },
        {
            condition: isActive,
            style: {
                display: 'flex',
                justifyContent: 'space-between',
                paddingRight: '15px',
            },
        },
    ],
});

const __arrow = ({ isActive }) => ({
    extend: [
        {
            condition: isActive,
            style: {
                transform: 'rotate(180deg)',
            },
        },
    ],
});

const FilterWrapper = createComponent(__filterWrapper);
const Gender = createComponent(__gender, 'div', ['onClick']);
const GenderSelector = createComponent(__genderSelector);
const SortByFilter = createComponent(__sortBySelector);
const SortByLabel = createComponent(__sortByLabel);
const Select = createComponent(__select, 'div', ['onClick']);
const Option = createComponent(__option, 'div', ['onClick']);
const ArrowIcon = createComponent(__arrow);
const ListOptions = createComponent(__listOptions);

export {
    FilterWrapper,
    Gender,
    GenderSelector,
    SortByFilter,
    SortByLabel,
    Select,
    Option,
    ArrowIcon,
    ListOptions,
};
