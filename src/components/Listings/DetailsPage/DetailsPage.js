import React from 'react';
import Aux from '../../../components/UI/Modal/Modal';
import Modal from '../../../hoc/Aux';
import Typography from '@material-ui/core/Typography';

const detailsPage = ( props ) => {

    function getModalStyle() {
        const top = 50 + rand();
        const left = 50 + rand();
    }

    const openStatus = true;
    
    return (
        <Aux>
            <Modal/>
        </Aux>

    );
};

export default detailsPage;