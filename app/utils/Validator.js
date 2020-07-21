export const isValidEmail = (emailAddress) => {
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(emailAddress) === false) {
    return false;
  }
  return true;
};

export const isValidName = (name) => {
  const reg = /^[a-zA-Z ]+$/;
  if (reg.test(name) === false) {
    return false;
  }
  return true;
};

export const isNumber = (number) => {
  const reg = /^-?\d+\.?\d*$/;
  if (reg.test(number) === false) {
    return false;
  }
  return true;
};

export const profileFormValidator = (formData = {}) => {
  let {
    CnicNo,
    UserName,
    MobileNo,
    UserEmail,
    ProjectID,
    BillAmount,
    BillRefNo,
  } = formData;
  const errorsObj = {};
  //name
  if (UserName?.trim().length === 0) {
    errorsObj.UserName = 'Required';
  } else if (UserName && !isValidName(UserName)) {
    errorsObj.UserName = 'Invalid name';
  } else if (!UserName && !isValidName(UserName)) {
    errorsObj.UserName = 'Required';
  }
  if (UserName?.length > 50) {
    errorsObj.UserName = 'Too long';
  }
  //mobile no
  if (MobileNo !== '92' && MobileNo?.length < 12) {
    errorsObj.MobileNo = 'Required';
  }
  //email
  if (UserEmail && !isValidEmail(UserEmail)) {
    errorsObj.UserEmail = 'Invalid';
  }
  //CnicNo
  if (CnicNo && CnicNo?.length < 15) {
    errorsObj.CnicNo = 'Required';
  }
  //bill amount
  if (BillAmount && !isNumber(BillAmount)) {
    errorsObj.BillAmount = 'Invalid';
  }
  //projectID
  if (ProjectID?.length < 1) {
    errorsObj.ProjectID = 'Required';
  }
  //BillRefNo
  if (BillRefNo?.length < 1) {
    errorsObj.BillRefNo = 'Required';
  }
  //BillAmount
  if (BillAmount?.length < 1) {
    errorsObj.BillAmount = 'Required';
  }

  return errorsObj;
};
