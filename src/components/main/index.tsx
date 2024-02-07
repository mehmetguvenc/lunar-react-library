import React, { useEffect, useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux'
import { store, RootState } from '../../stores/store'
import { LoadingState, update as updateLoading } from '../../stores/loadingSlice';
import { LockState, update as updateLock } from '../../stores/lockSlice';
import { waitForFinalEvent } from '../../helpers';

const Main = () => {
    return (
        <Provider store={store}>
            <ChildComponent />
        </Provider >
    )
}

const ChildComponent = () => {
    const loading: LoadingState = useSelector((state: RootState) => state.loading);
    const lock: LockState = useSelector((state: RootState) => state.lock);
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(loading)
    }, [loading])

    useEffect(() => {
        console.log(lock)
    }, [lock])

    const onResize = (ev: UIEvent) => {
        console.log('xxx')
        waitForFinalEvent(() => {
            console.log('resize finished', ev)
        }, 250, "resize");
    }

    window && window.addEventListener('resize', (ev) => onResize(ev));

    return (
        <div>
            <button onClick={() => dispatch(updateLoading(loading.value - 1))}>Decrease</button>
            {loading.value}
            <button onClick={() => dispatch(updateLoading(loading.value + 1))}>Increase</button>
            <br />
            {lock && <button onClick={() => dispatch(updateLock(!lock.lock))}>{lock.lock ? 'Unlock' : 'Lock'}</button>}
        </div>
    )
}

export default Main;