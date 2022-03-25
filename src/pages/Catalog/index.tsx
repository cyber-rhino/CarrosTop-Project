import ProductCard from "components/ProductCard";
import ButtonSearch from "components/ButtonSearch";

function Catalog() {
  return (
      <div className="container my-4">
        <div className="row">
          <div>
            <ButtonSearch />
          </div>

          <div className="col-sm-6 col-lg-4">
          <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4">
          <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4">
          <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4">
          <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4">
          <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4">
          <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4">
          <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4">
          <ProductCard />
          </div>
        </div>
      </div>
  );
};

export default Catalog;