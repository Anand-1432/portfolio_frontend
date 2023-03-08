import React, { useEffect, useState } from 'react'
import "./chat.scss";

import ChatBox from './ChatBox';

import SearchIcon from '@mui/icons-material/Search';
import { Bars } from 'react-loader-spinner'
import { Button } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import MessageBox from './MessageBox';
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getUsers } from '../../actions/userAction';
import Login from '../../components/login/Login';


const Chat = () => {

    const [list, setList] = useState([]);
    const [codeSate, setCodeState] = useState(false);

    const [currUser, setCurrUser] = useState({
        _id: "",
        name: "",
        email: "",
        message: []
    });


    const dispatch = useDispatch();
    const { userList, isLoading } = useSelector(state => state.userReducer);


    useEffect(() => {
        dispatch(getUsers());
    }, []);


    useEffect(() => {
        if (userList) {
            if (userList.length > 0) {
                setList([...userList].reverse());
                setCurrUser(userList[userList.length - 1]);
            } else {
                setList([]);
                setCurrUser({
                    _id: "",
                    name: "",
                    email: "",
                    message: []
                });
            }
        }
    }, [userList]);


    const showCurrentUser = (data) => {
        setCurrUser(data);
    }


    const del = () => {
        dispatch(deleteUser(currUser._id));
    }


    return (
        <>
            <div className='chatConatiner'>

                {/* /////////////////////////////////////////////////// */}

                {!codeSate ? <Login fun={setCodeState} /> : null}

                {isLoading ? <div className='chatLoader'> <Bars
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="bars-loading"
                    wrapperClass=""
                    visible={true}
                /> </div> : null}

                {/* /////////////////////////////////////////////////// */}

                <div className='chat'>

                    <div className='sideBar'>
                        <div className='searchBox form-group'>
                            <input type="text" name="" id="search" className='form-control' placeholder='Search' />
                            <SearchIcon className='icon' fontSize='small' />
                        </div>

                        <div className='scrollChat'>

                            {list.map((val) => {
                                return (
                                    <ChatBox data={val} key={val._id} fun={showCurrentUser} />
                                );
                            })}

                        </div>

                    </div>

                    <div className='innerChat'>


                        <div className='bioData'>
                            <div className='data'>
                                <section> {currUser.name} </section>
                                <span> {currUser.email} </span>
                            </div>

                            <div className='function'>
                                <Button variant='contained' className='bt' onClick={del}><DeleteIcon style={{ fontSize: "16px" }} /></Button>
                            </div>
                        </div>


                        <div className='messageInner'>
                            {currUser.message.map((val, index) => {
                                return (
                                    <MessageBox data={val} key={index} />
                                );
                            })}
                        </div>


                    </div>

                </div>
            </div>
        </>
    )
}

export default Chat;