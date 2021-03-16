const isAuthorithed = () => {
    const auth = localStorage.getItem('isAuthorized');
    if(!auth){
        return false;
    }
    return true;
  };

  const authUser = () => localStorage.getItem("fullName");
      
      
  export{
      isAuthorithed,
      authUser
  }