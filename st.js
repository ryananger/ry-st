import {useState} from 'react';

var st = {
  newState: function(name, state) {
    const str = 'set' + name.charAt(0).toUpperCase() + name.slice(1);

    const value = st[name] = state[0];
    const set   = st[str]  = state[1];

    return [value, set];
  }
};

export default st;