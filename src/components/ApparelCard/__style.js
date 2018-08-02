import { createComponent } from 'react-fela';
import { padding, margin } from 'polished';

const __apparelWrapper = () => ({
    display: 'flex',
    ...padding('35px', '0px', '35px', '0px'),
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
});
const __card = ({ isNew = false }) => ({
    position: 'relative',
    borderRadius: '3px',
    ...margin('30px'),
    background: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '280px',
    minHeight: '344px',
    boxShadow: '1px 1px 1px #e6e5e5',
    ':hover': {
        boxShadow: '1px 1px 1px 1px #ccc',
    },
});

const __image = () => ({
    maxHeight: '280px',
    width: '280px',
    background: '#FFFFFF',
    overflow: 'hidden',
});

const __description = () => ({
    ...padding('12px', '19px', ' 17px', '11px'),
    display: 'flex',
    fontFamily: 'Montserrat-Regular',
    fontSize: '14px',
    color: '#595959',
    letterSpacing: '0.29px',
});
const __brand = () => ({
    width: '170px',
    whiteSpace: 'nowrap',
    overflow: 'hidden !important',
    textOverflow: 'ellipsis',
    letterSpacing: '0.25px',
});
const __spec = () => ({
    fontSize: '12px',
    width: '170px',
    whiteSpace: 'nowrap',
    overflow: 'hidden !important',
    textOverflow: 'ellipsis',
    color: '#656565',
    letterSpacing: '0.25px',
});
const __info = () => ({});
const __price = () => ({});

const __favorite = () => ({
    width: '36px',
    height: '36px',
    position: 'absolute',
    top: '0px',
    left: '0px',
    ...padding('10px'),
});

const __newTag = () => ({
    fontFamily: 'Montserrat-Regular',
    fontSize: '12px',
    letterSpacing: '0.25px',
    display: 'inline-block',
    position: 'absolute',
    verticalAlign: 'middle',
    borderBottom: 'solid 50px transparent',
    borderRight: 'solid 50px #FFF3F3',
    top: '0px',
    right: '-1px',
    fontSize: '10px',
    zIndex: 1,
    '::after': {
        content: '"New"',
        fontWeight: '600',
        right: '-47px',
        top: '8px',
        zIndex: '1',
        transform: 'rotate(45deg)',
        position: 'absolute',
        fontFamily: 'Montserrat-Regular',
        fontSize: '12px',
        letterSpacing: '0.25px',
        color: '#D0021B',
    },
});

const Card = createComponent(__card, 'div', [
    'onMouseEnter',
    'onMouseLeave',
    'onClick',
]);
const ApparelWrapper = createComponent(__apparelWrapper);
const Image = createComponent(__image);
const Brand = createComponent(__brand);
const Spec = createComponent(__spec);
const Info = createComponent(__info);
const Price = createComponent(__price);
const Description = createComponent(__description);
const Favorite = createComponent(__favorite);
const NewTag = createComponent(__newTag);

export {
    Card,
    ApparelWrapper,
    Image,
    Brand,
    Spec,
    Info,
    Price,
    Description,
    Favorite,
    NewTag,
};
