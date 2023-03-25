// import Graph from './Graph'
import Logo from "./images2/logo.jpg";
import { useNavigate } from "react-router";

function First() {
  const navigate = useNavigate();
   return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <img
        style={{ width: "500px", marginLeft: "250px", marginTop: "2px" }}
        src={Logo}
        alt=""
      />
      <button
        onClick={() => navigate("/Login")}
        style={{ marginTop: "250px", fontSize: "20px", height: "50px" }}
      >
        GET STARTED &nbsp; &nbsp;
      </button>
    </div>
  );
}
export default First;
