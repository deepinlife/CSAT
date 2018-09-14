import React from 'react';
import dataReducer from "../reducer/dataReducer.js";
import { combineReducers } from 'redux';

export default combineReducers({
    rootRecuer: dataReducer

}) 