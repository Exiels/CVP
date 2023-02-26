import React from 'react';
import { useState, useRef } from "react";
import { Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Overlay from 'react-bootstrap/Overlay';
import { useNavigate } from 'react-router-dom';

import './Header.scss';

const Header = (props) =>{
    const [show, setShow] = useState(false);
    const target = useRef(null);
    let navigate = useNavigate();

    // move to login page on click
    function handleClickLogout() {
      sessionStorage.removeItem("token")
      localStorage.removeItem("token")
      navigate("/");
    }

    return(
        <nav>
            <div className='divHeader'>
                <div className="App">
                    <Button variant="danger" startIcon={<AccountCircleIcon/>}  style={{color: '#FFFFFF'}} ref={target} onClick={() => setShow(!show)}>
                        {props.user.name}
                    </Button>
                    <Overlay target={target.current} show={show} placement="bottom">
                        {({ placement, arrowProps, show: _show, popper, ...props }) => (
                          <Button
                            {...props}
                            style={{
                              position: 'absolute',
                              backgroundColor: 'white',
                              padding: '2px 10px',
                              color: '#4f23e2',
                              borderRadius: 3,
                              ...props.style,
                            }}
                            onClick={handleClickLogout}
                          >
                            Se déconnecter
                          </Button>
                        )}
                    </Overlay>
                </div>
            </div>
        </nav>
    )
}
