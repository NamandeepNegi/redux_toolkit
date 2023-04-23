import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {MdDeleteForever} from 'react-icons/all.js'
import { removeUser } from "../store/slices/UserSlice";
import { useDispatch } from "react-redux";

const DisplayUsers = () => {
    const dispatch = useDispatch()
    const deleteUser = (id) => {
           dispatch(removeUser(id))
    }
  const data = useSelector((state) => {
    console.log(state.users);
    return state.users;
  });
  return (
    <Wrapper>
      {data.map((user, id) => (
        <li key={id}>
          {user}
          <button onClick={() => deleteUser(id)} className="btn-delete">
            <MdDeleteForever className="delete-icon"/>
          </button>
        </li>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;

    &:first-child {
      border-top: 1px solid #eee;
    }
  }

  .btn-delete {
    background-color: transparent;
    border: 0;
    color: #fff;
  }
`;
export default DisplayUsers;
