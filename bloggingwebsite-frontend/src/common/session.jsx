// 4 sessionfunction 
export const storeInSession = (key,value) => {
    return sessionStorage.setItem(key,value);
}

export const lookInSession = (key) => {
    return sessionStorage.getItem(key);
}

export const removeFromSession = (key) => {
    return sessionStorage.removeItem(key);
}

// no need of  this we will use other func 
export const logOutUser = () => {
    sessionStorage.clear();
}