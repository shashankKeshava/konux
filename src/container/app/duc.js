// App Container Duc

import Duck from 'extensible-duck';
import { getInitialState } from '../../store/initialState';

import { setIn, getIn, merge } from 'timm';
import { createSelector } from 'reselect';

import orderBy from 'lodash/orderBy';
import findIndex from 'lodash/findIndex';

export const AppDuc = new Duck({
    namespace: 'app-duc',
    store: 'app',
    types: ['LOAD_MORE', 'FILTER_BY_GENDER', 'SORT_BY', 'UPDATE_WISHLIST'],
    initialState: merge(
        {
            gender: undefined,
            sortBy: undefined,
        },
        { ...getInitialState() }
    ),
    reducer: (state, action, duck) => {
        switch (action.type) {
            case duck.types.FILTER_BY_GENDER: {
                const { payload } = action;
                const gender = getIn(state, ['gender']) || undefined;
                const newState = setIn(
                    state,
                    ['gender'],
                    gender === payload ? undefined : payload
                );
                return newState;
            }
            case duck.types.SORT_BY: {
                const { payload } = action;
                const newState = setIn(state, ['sortBy'], payload);
                return newState;
            }
            case duck.types.UPDATE_WISHLIST: {
                const { payload } = action;
                let apparels = getIn(state, ['apparels']);
                const index = findIndex(apparels, {
                    id: payload,
                });
                const wishListStatus =
                    getIn(apparels, [index, 'isOnWishList']) || false;
                apparels = setIn(
                    apparels,
                    [index, 'isOnWishList'],
                    !wishListStatus
                );
                return merge(state, { apparels: apparels });
            }
            default:
                return state;
        }
    },
    selectors: {
        root: state => state && state.app,
        gender: state => state.app && state.app.gender,
        sortBy: state => state.app && state.app.sortBy,
        apparels: state => state.app && state.app.apparels,
        apparelList: new Duck.Selector(selectors =>
            createSelector(
                selectors.apparels,
                selectors.gender,
                selectors.sortBy,
                (apparels, genderType = false, sortBy = false) => {
                    let apparelList = apparels;

                    if (!genderType && !sortBy) {
                        return apparelList;
                    }
                    if (genderType) {
                        apparelList = apparels.filter(
                            ({ gender }) => genderType === gender
                        );
                    }
                    if (sortBy) {
                        const [sortType, orderType] = sortBy.split(':');
                        if (sortType === 'PRICE') {
                            apparelList = orderBy(
                                apparelList,
                                ['price'],
                                [orderType]
                            );
                            return apparelList;
                        }
                        if (sortType === 'RATING') {
                            apparelList = orderBy(
                                apparelList,
                                ['rating'],
                                [orderType]
                            );
                            return apparelList;
                        }
                    }
                    return apparelList;
                }
            )
        ),
    },
    creators: duck => ({
        loadPage: () => ({
            type: duck.types.LOAD_MORE,
        }),
        filterByGender: gender => ({
            type: duck.types.FILTER_BY_GENDER,
            payload: gender,
        }),
        sortBy: sortType => ({
            type: duck.types.SORT_BY,
            payload: sortType,
        }),
        toggleWishList: id => ({
            type: duck.types.UPDATE_WISHLIST,
            payload: id,
        }),
    }),
});
