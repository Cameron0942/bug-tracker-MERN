const emailValidator = (email) => {
    /*
          email couldn't start or finish with a dot
          email shouldn't contain spaces into the string
          email shouldn't contain special chars (<:, *,ecc)
          email could contain dots in the middle of mail address before the @
          email could contain a double domain ( '.de.org' or similar rarity)
      */
    const regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
  
    if (regex.test(email)) return true;
    else return false;
  };
  
  export default emailValidator;  