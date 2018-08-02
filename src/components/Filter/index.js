import React, { Component } from 'react';
import {
    FilterWrapper,
    GenderSelector,
    Gender,
    SortByFilter,
    SortByLabel,
    Select,
    Option,
    ArrowIcon,
    ListOptions,
} from './__style';

import Arrow from '../../../assets/arrow.svg';
import Tick from '../../../assets/tick.svg';
import { sortOptions } from '../../utils';

class Filter extends Component {
    constructor(props) {
        super(props);
        const { sortBy = false } = this.props;
        this.state = {
            showOption: false,
            sortByType: sortBy,
        };
    }
    toggleOptions = () => {
        const { showOption } = this.state;
        this.setState({
            showOption: !showOption,
        });
    };
    sortBy = (desc, type) => {
        this.setState({
            sortByType: desc,
        });
        this.props.sortByFilter(type);
    };

    componentDidMount = () => {
        const { sortByType } = this.state;

        if (!sortByType) {
            this.sortBy('Price: low to high', 'PRICE:asc');
        }
    };
    render() {
        const { gender } = this.props;
        const { showOption, sortByType } = this.state;
        const listOptions = sortOptions.map(({ id, desc, type }) => (
            <Option
                key={id}
                onClick={() => this.sortBy(desc, type)}
                isActive={sortByType === desc}
            >
                {desc}
                {sortByType === desc && <img src={Tick} />}
            </Option>
        ));
        return (
            <FilterWrapper>
                <GenderSelector>
                    <Gender
                        isActive={'F' === gender}
                        key="woman"
                        onClick={() => this.props.filterByGender('F')}
                    >
                        WOMAN
                    </Gender>
                    <Gender
                        key="man"
                        isActive={'M' === gender}
                        onClick={() => this.props.filterByGender('M')}
                    >
                        MAN
                    </Gender>
                </GenderSelector>
                <div>
                    <SortByFilter>
                        <SortByLabel>Sort by</SortByLabel>
                        <Select
                            onClick={() => this.toggleOptions()}
                            isActive={showOption}
                        >
                            <Option isDefault>{sortByType}</Option>
                            <ArrowIcon isActive={showOption}>
                                <img src={Arrow} />
                            </ArrowIcon>
                            {showOption && (
                                <ListOptions>{listOptions}</ListOptions>
                            )}
                        </Select>
                    </SortByFilter>
                </div>
            </FilterWrapper>
        );
    }
}

export default Filter;
