import React from 'react';
import CurrentConditionSkeleton from './CurrentConditionSkeleton/CurrentConditionSkeleton';
import ForeCastSkeleton from './ForeCastSkeleton/ForeCastSkeleton';

const skeletons = props => {
    return(
        <React.Fragment>
            <CurrentConditionSkeleton />
            <ForeCastSkeleton />
        </React.Fragment>
    )
}

export default skeletons;