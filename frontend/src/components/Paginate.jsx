import { Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";

function Paginate({ pages, page, isAdmin = false, keyword = "" }) {
  if (pages <= 1) return null;

  return (
    <Pagination>
      {[...Array(pages).keys()].map((x) => (
        <Pagination.Item
          key={x + 1}
          as={Link}
          to={
            !isAdmin
              ? keyword
                ? `/search/${keyword}/page/${x + 1}`
                : `/page/${x + 1}`
              : `/admin/productList/${x + 1}`
          }
          active={x + 1 === page}
        >
          {x + 1}
        </Pagination.Item>
      ))}
    </Pagination>
  );
}

export default Paginate;
