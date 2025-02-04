import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utilis/contants";
import { useDispatch, useSelector } from "react-redux";
import { setFeed } from "../utilis/feedSlice";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);
  console.log(feed);
  const getfeed = async () => {
    const res = await axios.get(`${BASE_URL}/user/feed?limit=5`, { withCredentials: true });
    console.log(res.data);
    dispatch(setFeed(res.data));
  };

  useEffect(() => {
    getfeed();
  }, []);

  return (
    <>
      <span>FEDDDDDDDDDEDEDEDEED</span>
    </>
  );
};

export default Feed;
