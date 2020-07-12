import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Komponen untuk menampilkan advice yang sudah disimpan
export default function Saved() {
    const [myState, setState] = useState('Advices are sucessfully saved');

    useEffect(() => {
        console.log(`${myState}`);
    });
    
    const saved = useSelector(state => state.saved);
    return (
        <div>
            <ul className="advices">{saved.map((item, index) => <li key={index}>{item}</li>)}</ul>
        </div>
    )
}