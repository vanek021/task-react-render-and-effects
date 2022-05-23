import { subscribe, unsubscribe } from './resources/API';
import { useState, useEffect } from 'react';

export function Effects(props: { sourceId: string }) {
    const [state, setState] = useState(-1);

    useEffect(() => {
        let callback = (message: number) => setState(message);
        subscribe(props.sourceId, callback);

        return () => {
            unsubscribe(props.sourceId, callback);
            setState(-1);
        };
    }, [props.sourceId]);

    return (
        <div>
            {props.sourceId}: {state}
        </div>
    );
}
