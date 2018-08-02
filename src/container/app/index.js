import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppDuc } from './duc';
import { createStructuredSelector } from 'reselect';

import { AppWrapper, Title, LoadMore, LoadWrapper } from './__style';

import LineChart from '../../components/LineChart';
import Filter from '../../components/Filter';
import ApparelCard from '../../components/ApparelCard';
@connect(
    createStructuredSelector({
        root: AppDuc.selectors.root,
        apparels: AppDuc.selectors.apparelList,
        gender: AppDuc.selectors.gender,
        sortBy: AppDuc.selectors.sortBy,
    }),
    dispatch => ({
        filterByGender: gender =>
            dispatch(AppDuc.creators.filterByGender(gender)),
        sortByFilter: type => dispatch(AppDuc.creators.sortBy(type)),
        toggleWishList: type => dispatch(AppDuc.creators.toggleWishList(type)),
    })
)
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            limit: 9,
        };
    }
    loadMore = () => {
        const { limit } = this.state;
        this.setState({
            limit: limit + 9,
        });
    };

    render() {
        const {
            root: { apparels: apparelList },
            apparels,
            gender,
            sortBy,
            filterByGender,
            sortByFilter,
            toggleWishList,
        } = this.props;
        const { limit } = this.state;
        // Update Session Storage
        sessionStorage.setItem('ay-data', JSON.stringify(apparelList));
        return (
            <AppWrapper>
                <Title>KONOUX Coding Test</Title>
                <LineChart />
            </AppWrapper>
        );
    }
}

export default App;
