import { allPlayers, draftPlayer } from '../app/redux/reducers/reducers';

describe('testing reducers', () => {
  const state = {
    allPlayers: [],
    draftedPlayers: [],
    loading: true,
  }

  const playersArray = [];
  const playerObject = {};
  const player = {
    auction: 67,
    drafted: false,
    firstName: "David",
    id: 2553435,
    lastName: "Johnson",
    position: "RB",
    rank: 1,
    stock: "even",
    team: "ARI"
  }
  const mockState = [player];



  it('should provide the initial allPlayers state', () => {
    expect(allPlayers(undefined, {}))
      .toEqual(state.allPlayers)
  })

  it('should provide the initial draftedPlayers state', () => {
    expect(draftPlayer(undefined, {}))
      .toEqual(state.draftedPlayers)
  })

  it('should handle LOAD_PLAYERS action', () => {
    expect(allPlayers({}, { type: 'LOAD_PLAYERS', allPlayers: playersArray })).toEqual(state.allPlayers)
  })

  it('Reducer "allPlayers" should handle DRAFT_PLAYERS action', () => {
    expect(allPlayers({}, { type: 'DRAFT_PLAYERS', allPlayers: playerObject })).toEqual({})
  })

  it('Reducer "draftPlayers" should handle DRAFT_PLAYERS action', () => {
    expect(draftPlayer({}, { type: 'DRAFT_PLAYER', player: playerObject }).length).toEqual(1);
  })

  it('Reducer "allPlayers" should handle UNDO_DRAFT action', () => {
    expect(allPlayers(mockState, { type: 'UNDO_DRAFT', undraftedPlayer: player })).toEqual([...mockState])
  })

  it('Reducer "undoDraft" should handle UNDO_DRAFT action', () => {
    expect(draftPlayer([1, 2, 3], { type: 'UNDO_DRAFT', undraftedPlayer: player }).length).toEqual(2);
  })

})


