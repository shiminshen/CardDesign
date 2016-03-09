import alt from 'components/Dispatcher';

export class CardsStore {

  constructor() {
    this.cards = [
      {
        Apperance: {
          eye: {
            color: 2,
            size: 5
          },
          nose: 5,
          mouse: 2
        },
        Personality: {
          p1: 3,
          p2: 2
        },
        Relationship: {
          r1: 2,
          r2: 1
        },
        Job: {
          j1: 2,
          j2: 3
        }
      }, {
        Apperance: {
          eye: 3,
          nose: 5,
          mouse: 2
        },
        Personality: {
          p1: 3,
          p2: 2
        },
        Relationship: {
          r1: 2,
          r2: 1
        },
        Job: {
          j1: 2,
          j2: 3
        }
      }
    ];
    // this.bindListeners({});
  }
}

export default alt.createStore(CardsStore, 'CardsStore');
