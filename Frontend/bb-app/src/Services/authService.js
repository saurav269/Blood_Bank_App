import {
  userLogin,
  userRegister,
} from "../Redux/Features/Authentic/authActions";
import store from "../Redux/store";

export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!role || !email || !password) {
      return alert("Please Provide All Fields");
    }
    store.dispatch(userLogin({ e, email, password, role }));
    //console.log('login', e,email,password,role)
  } catch (err) {
    console.log(err);
  }
};

export const handleRegister = (
  e,
  email,
  password,
  role,
  name,
  organisationName,
  hospitalName,
  website,
  address,
  phone
) => {
  e.preventDefault();
  try {
    store.dispatch(
      userRegister({
        email,
        password,
        role,
        name,
        organisationName,
        hospitalName,
        website,
        address,
        phone,
      })
    );
  } catch (err) {
    console.log(err);
  }
};
