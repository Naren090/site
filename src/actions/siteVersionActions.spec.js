import * as types from '../constants/actionTypes';
import * as siteVersionActions from './siteVersionActions';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import expect from 'expect'; // You can use any testing library

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

// describe('Actions', () => {
// 	it('should dispatch an action for load modes to initiate loading', () => {
// 		const expectedAction = {
// 			type: types.LOAD_MODES,
// 		};
// 		expect(
// 			actions.loadModesSuccess()
// 		).toEqual(expectedAction);
// 	});

// 	it('should dispatch an action for load version to initiate loading', () => {
// 		const expectedAction = {
// 			type: types.LOAD_VERSIONS,
// 		};
// 		expect(
// 			actions.loadVersionsSuccess()
// 		).toEqual(expectedAction);
// 	});

// 	it('should dispatch an action for load site version to initiate loading', () => {
// 		const expectedAction = {
// 			type: types.LOAD_SITEVERSIONS,
// 		};
// 		expect(
// 			actions.loadSiteVersionsSuccess()
// 		).toEqual(expectedAction);
// 	});

// });

describe('Async Function', () => {
	afterEach(() => {
		nock.cleanAll();
	});


	it('load modes when loading modes', (done) => {
		const expectedActions = [
			{
				type: types.LOAD_MODES,
				body: {
					modes: [
						{
							value: 'cory-house',
							text: 'Cory',
						}
					]
				}
			}
		];

		const store = mockStore({ modes: [] }, expectedActions);
		store.dispatch(siteVersionActions.loadModes()).then(() => { // return of async actions
			const actions = store.getActions();
			expect(actions[0].type).toEqual(types.LOAD_MODES);
			done();
		});

	});

	it('load version when loading versions', (done) => {
		const expectedActions = [
			{
				type: types.LOAD_VERSIONS,
				body: {
					versions: [
						{
							value: 'cory-house',
							text: 'Cory',
						}
					]
				}
			}
		];

		const store = mockStore({ versions: [] }, expectedActions);
		store.dispatch(siteVersionActions.loadVersions()).then(() => { // return of async actions
			const actions = store.getActions();
			expect(actions[0].type).toEqual(types.LOAD_VERSIONS);
			done();
		});

	});

});
