import "./goodses.styless.scss";

const GoodsItem = ({ item }) => (
  <li className="goods-container">
    <div className="goods-img-container">
      <img
        className="goods-img"
        src={item.goodsCoverImg}
        alt=""
        width="150"
        height="150"
      />

      <p className="goods-name">
        <a className="goods_url" href="/#">
          {item.goodsName}
        </a>
      </p>
      <div className="goods-price-container">
        <p className="goods-price">
          {item.originalPrice}
          <span>円（税込）</span>
        </p>
      </div>
    </div>
  </li>
);

export default GoodsItem;
