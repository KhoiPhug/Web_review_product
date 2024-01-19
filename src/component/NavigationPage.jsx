import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

const NavigationPage = ({ currentPage, lastPage }) => {
  let url = useLocation().pathname;
  let page = useParams().page;

  let arr = [];
  for (let i = 0; i < lastPage; i++) {
    arr.push(i + 1);
  }
  return (
    <div className="px-36 pt-8 flex justify-center items-center relative  gap-2">
      {arr.length > 1 &&
        arr.map((item, index) => {
          if (item === currentPage)
            return (
              <span
                key={index}
                className={
                  "w-10 h-10 rounded bg-blue-600 text-center text-white leading-10 font-semibold text-lg block cursor-default"
                }
              >
                {item}
              </span>
            );
          else
            return (
              <a
                key={index}
                className={
                  "leading-10  text-lg block text-blue-600 w-10 h-10 text-center"
                }
                href={
                  !page
                    ? `${url === "/" ? "" : url}${"/page/" + item}`
                    : `${item}`
                }
              >
                {item}
              </a>
            );
        })}
    </div>
  );
};

NavigationPage.propTypes = {
  currentPage: PropTypes.number.isRequired,
  lastPage: PropTypes.number.isRequired,
};

export default NavigationPage;
