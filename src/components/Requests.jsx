import React, { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/contants";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../utils/requestSlice";
import CardDemo from "./ConnectionCard";
const Requests = () => {
    const dispatch = useDispatch();
    const reqs = useSelector((store)=> store.requests);
  const fetchRequests = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/user/connections/pending`, {
        withCredentials: true,
      });
//    console.log(res?.data?.data);
      dispatch(addRequest(res?.data?.data))
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchRequests();
  }, []);

  if (!reqs) return null;

  if (reqs.length === 0) return <h1>No Requests Found</h1>;
  return (
    <div className="text-center">
      <h1 className="text-black text-3xl font-bold">Requests</h1>
      <div className="flex gap-6 mt-3">
        {reqs.map((req) => (
          <div key={reqs._id} className="">
            <CardDemo connection={req.fromUserId} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Requests;
