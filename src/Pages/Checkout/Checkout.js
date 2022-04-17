import React from 'react';
import { useParams } from "react-router-dom";

const Checkout = () => {
    const params = useParams();
    return (
        <div>
            This is checkout for id: {params.id}
        </div>
    );
};

export default Checkout;