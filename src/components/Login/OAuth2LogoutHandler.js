import React from 'react'
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import Loading from './Loading';
import { __logout } from "../../redux/modules/memberSlice"

const OAuth2LogoutHandler = () => {
    const dispatch = useDispatch();

    useEffect(async () => {
        await dispatch(__logout());
    }, []);

    return <Loading />;
}

export default OAuth2LogoutHandler