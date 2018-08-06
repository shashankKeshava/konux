import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppDuc } from './duc';
import { createStructuredSelector } from 'reselect';

import { AppWrapper, Title, LoadMore, LoadWrapper } from './__style';

import LineChart from '../../components/LineChart';
async function fetchData() {
    const data = await fetch('http://konuxdata.getsandbox.com/data')
        .then(response => {
            console.log(response);
            response = response.json();
            return response;
        })
        .catch(response => {
            console.log('Error: Something went wrong ', response);
            return response;
        });
    return data;
}

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
            loading: true,
        };
    }

    componentDidMount = () => {
        fetchData().then(response => {
            this.setState({
                data: response,
                loading: false,
            });
        });
    };

    render() {
        const { loading, data = false } = this.state;
        // Update Session Storage
        // sessionStorage.setItem('ay-data', JSON.stringify(apparelList));
        return (
            <AppWrapper>
                <Title>KONOUX Coding Test</Title>
                {loading && 'Loading....'}
                {!loading && (
                    <LineChart
                        payload={data}
                        height={40}
                        selectX={datum => new Date(datum.day)}
                        selectY={datum => datum.productPerceivedQuality}
                        width={200}
                    />
                )}
            </AppWrapper>
        );
    }
}

export default App;
