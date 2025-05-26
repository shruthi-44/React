import react from 'react';
import { useParams } from 'react-router-dom';

export default function User() {
    const {userid}=useParams()
    return(
        <h3>User: {userid}</h3>
    )
}
