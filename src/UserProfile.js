import { useParams } from "react-router-dom";



function UserProfile(){
    const params = useParams();
    return <p>{JSON.stringify(params)}</p>;
}

export default UserProfile