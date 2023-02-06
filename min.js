var st={newState:(n, t)=>{let r='set'+n.charAt(0).toUpperCase()+n.slice(1);st[n]=t[0];st[r]=t[1];return[st[n],st[r]];}};
export default st;