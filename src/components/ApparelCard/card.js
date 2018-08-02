import React, { Component } from 'react';
import {
    Card,
    Image,
    Brand,
    Spec,
    Info,
    Price,
    Description,
    Favorite,
    NewTag,
} from './__style';

import { priceFormatter } from '../../utils';
import Heart from '../../../assets/heart.svg';
import HeartUnlike from '../../../assets/heart-o.svg';

class CardWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showFavorite: false,
            addToWishList: false,
        };
    }
    showWishList = status => {
        this.setState({
            showFavorite: status,
        });
    };
    toggleWishList = id => {
        const { addToWishList } = this.state;
        this.setState({
            addToWishList: !addToWishList,
        });
        this.props.toggleWishList(id);
    };

    render() {
        const {
            payload: {
                image,
                desc,
                brand,
                isOnWishList = false,
                price,
                isNew = false,
                id,
            },
        } = this.props;
        const { showFavorite } = this.state;
        return (
            <Card
                onMouseEnter={() => this.showWishList(true)}
                onMouseLeave={() => this.showWishList(false)}
                onClick={() => this.toggleWishList(id)}
            >
                {!isOnWishList &&
                    showFavorite && (
                        <Favorite>
                            <img src={HeartUnlike} width="100%" height="100%" />
                        </Favorite>
                    )}
                {isOnWishList && (
                    <Favorite>
                        <img src={Heart} width="100%" height="100%" />
                    </Favorite>
                )}
                {isNew && <NewTag />}
                <Image>
                    <img src={image} width="100%" height="100%" />
                </Image>
                <Description>
                    <Info>
                        <Brand>{brand}</Brand>
                        <Spec>{desc}</Spec>
                    </Info>
                    <Price>{priceFormatter(price)}</Price>
                </Description>
            </Card>
        );
    }
}

export default CardWrapper;
