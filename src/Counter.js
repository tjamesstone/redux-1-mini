import React, { Component } from 'react';
import store from './store'

class Counter extends Component {
  constructor(props) {
    super(props);
    
    this.state = {store: store.getState()
    };
  }
  render() {
    const {currentValue} = this.state.store
    return (
      <div className="app">
        <section className="counter">
          <h1 className="counter__current-value">{currentValue}</h1>
          <div className="counter__button-wrapper">
            <button
              className="counter__button increment-one"
              onClick={() => null}
            >
              +1
            </button>
            <button
              className="counter__button increment-five"
              onClick={() => null}
            >
              +5
            </button>
            <button
              className="counter__button decrement-one"
              onClick={() => null}
            >
              -1
            </button>
            <button
              className="counter__button decrement-five"
              onClick={() => null}
            >
              -5
            </button>
            <br />
            <button
              className="counter__button undo"
              disabled={true}
              onClick={() => null}
            >
              Undo
            </button>
            <button
              className="counter__button redo"
              disabled={true}
              onClick={() => null}
            >
              Redo
            </button>
          </div>
        </section>
        <section className="state">
          <pre>{JSON.stringify(this.state.store, null, 2)}</pre>
        </section>
      </div>
    );
  }
}

export default Counter;
