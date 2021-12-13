import "./Signout.css";

export default function Signout({ setToken }) {
  //Removes user token and redirects to login/signup page.
  function removeToken(){
    localStorage.removeItem("token");
    setToken(undefined);
    console.log("removed token!")
    window.location.href="/"
  }

  return (
    <div className='signout'>
      <button className='signout-btn' onClick={() => removeToken()}>Signout</button>
    </div>
  );
}