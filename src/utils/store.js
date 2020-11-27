import React, { useContext, useReducer, Component } from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';

const StoreContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_STORE': {
      const newState = { ...state, ...action.payload };
      const storeKeys = Object.keys(newState);
      if (storeKeys.length > 0) {
        console.group('%cStore Updated', 'color:#00873D');
        storeKeys.forEach((key) => {
          console.log(`%c${key}`, 'font-weight:bold', newState[key]);
        });
        console.groupEnd();
      }
      return newState;
    }
    default:
      return state;
  }
};

const StoreProvider = ({ children, initState }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const setState = (newState) => dispatch({ type: 'UPDATE_STORE', payload: newState });
  return (
    <StoreContext.Provider value={[state, setState]}>
      {children}
    </StoreContext.Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.node,
  initState: PropTypes.object,
};

StoreProvider.defaultProps = {
  children: null,
  initState: null,
};

const useStore = () => useContext(StoreContext);

const withStore = (WrappedComponent) => {
  class StoreInjector extends Component {
    static WrappedComponent = WrappedComponent;

    static contextType = StoreContext;

    static displayName = `withStore(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    render() {
      const [store, setStore] = this.context;
      return <WrappedComponent {...this.props} store={store} setStore={setStore} />;
    }
  }
  return hoistNonReactStatics(StoreInjector, WrappedComponent);
};

export { StoreProvider, useStore, withStore };
