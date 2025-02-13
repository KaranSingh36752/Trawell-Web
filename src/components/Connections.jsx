import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/contants";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionsSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);

  const fetchConnection = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/user/connections`, {
        withCredentials: true,
      });
      console.log(res?.data?.data);
      dispatch(addConnection(res?.data?.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchConnection();
  }, []);

  if (!connections) return null;

  if (connections.length === 0) return <h1>NO Connections Found</h1>;

  return (
    <div className="text-center">
      <h1 className="text-black text-2xl font-bold">Connections</h1>
      <div>
        {connections.map((connection) => (
          <div key={connection._id}>
            <h1>{connection.firstName + " " + connection.lastName}</h1> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connections;
