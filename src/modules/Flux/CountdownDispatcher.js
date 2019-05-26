import Dispathcer from 'flux';

class CountdownDispatcher extends Dispathcer {
    handleAction(action) {
        console.log('dispatching action: ', action);
        this.dispatch({
            source: 'VIEW_ACTION',
            action
        })
    }
}

export default CountdownDispatcher;