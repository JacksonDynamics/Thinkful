import { useNavigate } from "react-router-dom";

function Forward() {
    const navigate = useNavigate()    
    return (
      <button type="button" onClick={() => navigate(1)}>
        Go back
      </button>
    );
  }

  export default Forward
