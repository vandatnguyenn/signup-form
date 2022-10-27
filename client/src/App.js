import './App.css';

function App() {
  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form action="/signup/post" method="post">
            <h3>Sign Up</h3>
            <div className="mb-3">
                <label>First name</label>
                <input
                    name = "fname"
                    type="text"
                    className="form-control"
                    placeholder="First name"
                />
            </div>
            <div className="mb-3">
                <label>Last name</label>
                <input 
                    name = "lname"
                    type="text" 
                    className="form-control" 
                    placeholder="Last name" 
                />
            </div>
            <div className="mb-3">
                <label>Email address</label>
                <input
                    name = "uname"
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                />
            </div>
            <div className="mb-3">
                <label>Password</label>
                <input
                    name = "pass"
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                />
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Sign Up
                </button>
            </div>
            <p className="forgot-password text-right">
                Already registered 
                <a href="/sign-in">sign in?</a>
            </p>
          </form>  
        </div>
      </div>  
    </div>  
  );
}

export default App;