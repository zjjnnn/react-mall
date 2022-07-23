import { useState, useEffect } from "react";
import axios from "axios";
import GoodsItem from "./GoodsItem";
import "./goodses.styless.scss";

const recom = axios.create({
  baseURL: "http://localhost:8080/goodses?configType=3",
});

const RecommendGoodses = () => {
  const [recommendList, setRecomendList] = useState([]);

  useEffect(() => {
    recom.get("").then((response) => {
      setRecomendList(response.data.data);
    });
  }, []);

  return (
    <div className="recommend-goodses">
      <h2 className="g-h2">おすすめ商品</h2>
      <ul className="goodses-container">
        {recommendList.map((item) => (
          <GoodsItem key={item.goodsId} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default RecommendGoodses;
