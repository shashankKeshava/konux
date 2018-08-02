import React, { PureComponent } from 'react';
import { ApparelWrapper } from './__style';

import Card from './card';

class ApparelCard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            showFavorite: false,
        };
    }
    toggleFavorite = () => {
        const { showFavorite } = this.state;
        this.setState({
            showFavorite: !showFavorite,
        });
    };
    render() {
        const { apparelList, toggleWishList } = this.props;

        return (
            <ApparelWrapper>
                {apparelList.map((payload, index) => (
                    <Card
                        payload={payload}
                        key={index}
                        toggleWishList={toggleWishList}
                    />
                ))}
            </ApparelWrapper>
        );
    }
}

export default ApparelCard;
