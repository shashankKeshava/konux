import React, { Component } from 'react';

import { AppWrapper, Title, LoadMore, LoadWrapper } from './__style';

import LineChart from '../../components/LineChart';
async function fetchData() {
    const data = await fetch('https://konuxdata.getsandbox.com/data')
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
        return (
            <AppWrapper>
                <Title>KONOUX Coding Test</Title>
                {loading && (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        Loading....
                    </div>
                )}
                {!loading && (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <LineChart
                            payload={data}
                            height={40}
                            margin={20}
                            selectX={datum =>
                                new Date(datum.x).setHours(0, 0, 0, 0)
                            }
                            selectY={datum => datum.y}
                            width={200}
                        />
                    </div>
                )}
            </AppWrapper>
        );
    }
}

export default App;
