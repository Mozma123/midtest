
// export default Login;
// chatgpy
// Login.js
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { auth } from '../config/firebase';
// import { signInWithEmailAndPassword } from 'firebase/auth';


// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       console.log("User logged in successfully");
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div className="login-container">
//       <h1 className="login-title">Login Form</h1>
//       <form onSubmit={handleLogin} className="login-form">
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="login-input"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="login-input"
//         />
//         <button type="submit" className="login-button">Login</button>
//       </form>
//       {error && <p className="error-message">{error}</p>}
//       <div className="link-container">
//         <h2>As <Link to='/PatientForm' className="link">Patient</Link></h2>
//         <h2>As <Link to='/doctorForm' className="link">Doctor</Link></h2>
//       </div>
//     </div>
//   );
// }

// export default Login;



// // vghgjgjg
// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { auth } from '../config/firebase';
// import { signInWithEmailAndPassword } from 'firebase/auth';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       console.log("User logged in successfully");
//       navigate('/home'); // Redirect to a home page or dashboard after login
//     } catch (error) {
//       console.error("Login error: ", error); // Log the error for debugging
//       setError(error.message);
//     }
//   };

//   return (
//     <div className="login-container">
//       <h1 className="login-title">Login Form</h1>
//       <form onSubmit={handleLogin} className="login-form">
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="login-input"
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="login-input"
//           required
//         />
//         <button type="submit" className="login-button">Login</button>
//        </form>
//       {error && <p className="error-message">{error}</p>}
//       <div className="link-container">
//         <h2>As <Link to='/PatientForm' className="link">Patient</Link></h2>
//         <h2>As <Link to='/doctorForm' className="link">Doctor</Link></h2>
//       </div>
//     </div>
//   );
// }

// export default Login;


// 
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  // This function can be modified to perform any other action you want upon "login"
  const handleLogin = () => {
    console.log("User logged in successfully"); // Placeholder action
    navigate('/home'); // Redirect to a home page or dashboard after "login"
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login Form</h1>
      {/* <button onClick={handleLogin} className="login-button">Login</button> */}
      <div className="link-container">
        <h2>As <Link to='/PatientForm' className="link">Patient</Link></h2>
        <h2>As <Link to='/doctorForm' className="link">Doctor</Link></h2>
      </div>
    </div>
  );
}

export default Login;
