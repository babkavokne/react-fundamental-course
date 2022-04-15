import React from 'react';
import { getPagesArray } from "../../../utils/pages";

const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = getPagesArray(totalPages);
  return (
    <div className="page__wrapper">
      {pagesArray.map(p =>
        <span className={page === p ? 'page page__current' : 'page'} key={p} onClick={() => changePage(p)}>
          {p}
        </span>
      )}
    </div>
  );
}

export default Pagination;
