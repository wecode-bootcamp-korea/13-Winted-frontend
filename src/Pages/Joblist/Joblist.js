import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import CategoryNav from "./Components/CategoryNav/CategoryNav";
import styled from "styled-components";
import JoblistMain from "./Components/JoblistMain/JoblistMain";
import { JOB_API } from "../../config";
import { USER_FILTER_API } from "../../config";
import { CATEGORY_API } from "../../config";
import { setFilter } from "../../store/actions/index";

const objToQuery = obj => {
  const str = Object.entries(obj)
    .filter(el => el[1].length)
    .map(x => x[1].map(y => [x[0], y.id].join("=")))
    .map(z => z.join("&"))
    .join("&");
  return str;
};

const Joblist = ({ history, location }) => {
  const { main, sub } = useParams();
  const { jobData, setJobLoading } = useJobsFetch(main, sub, location);
  const [isFilterloading, setIsFilterloading] = useState(true);
  const [isURLUpdating, setIsURLUpdating] = useState(true);
  const [sortingState, setSortingState] = useState("popularity");
  const userFilterState = useSelector(state => state.userFilterReducer);
  const dispatch = useDispatch();
  const {
    currentCategories,
    categoryRoute,
    reFetchCategory
  } = useCategoryFetch(main, sub);

  useEffect(() => {
    if (isFilterloading)
      fetch(USER_FILTER_API, {
        method: "GET",
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozfQ.FCoW9gw-N4X3Xc3VS5-rKWXj7khyyM1e9OPdyXaLLeQ"
        }
      })
        .then(res => res.json())
        .then(res => {
          delete res.message;
          dispatch(setFilter(res));
          setIsFilterloading(false);
          setIsURLUpdating(true);
        });
    if (isURLUpdating) {
      const QueryURL = ((sub, main) => {
        if (sub) return `/joblist/${main}/${sub}`;
        else if (main) return `/joblist/${main}`;
        else return "/joblist";
      })(sub, main);
      history.push(
        `${QueryURL}?${objToQuery(userFilterState)}&job_sort=${sortingState}`
      );
      setIsURLUpdating(false);
      setJobLoading(true);
    }
  }, [isURLUpdating]);

  return (
    <Main>
      <CategoryNav
        currentCategories={currentCategories}
        categoryRoute={categoryRoute}
        reFetch={reFetchCategory}
        setJobLoading={setJobLoading}
        setIsURLUpdating={setIsURLUpdating}
      />
      <JoblistMain
        jobData={jobData}
        setJobLoading={setJobLoading}
        setIsURLUpdating={setIsURLUpdating}
        setSortingState={setSortingState}
      />
    </Main>
  );
};

const useCategoryFetch = (main, sub) => {
  const [categories, setCategories] = useState([]);
  const [CategoryLoading, setCategoryLoading] = useState(true);
  const [route, setRoute] = useState([]);

  const filterCategories = allCategories => {
    let currentCategories = [];
    if (sub)
      currentCategories = allCategories[main - 1].sub_category.filter(
        el => el.id !== +sub
      );
    else if (main) currentCategories = allCategories[main - 1].sub_category;
    else currentCategories = allCategories;
    setCategories(currentCategories);
  };

  const getCategoryRoute = allCategories => {
    let currentCategoryRoute = [];
    main && currentCategoryRoute.push(allCategories[main - 1]);
    sub &&
      currentCategoryRoute.push(
        allCategories[main - 1].sub_category.filter(el => el.id === +sub)[0]
      );
    setRoute(currentCategoryRoute);
  };

  useEffect(() => {
    if (CategoryLoading)
      fetch(CATEGORY_API)
        .then(res => res.json())
        .then(res => {
          filterCategories(res.category_list);
          getCategoryRoute(res.category_list);
          setCategoryLoading(false);
        });
  }, [CategoryLoading]);

  return {
    currentCategories: categories,
    categoryRoute: route,
    reFetchCategory: setCategoryLoading
  };
};

const useJobsFetch = (main, sub, location) => {
  const [jobData, setJobData] = useState();
  const [jobLoading, setJobLoading] = useState(true);

  const objToQuery = () => {
    const jobCategoryQuery = main
      ? sub
        ? `&main=${main}&sub=${sub}`
        : `&main=${main}`
      : "";
    const currentQueryStr = location.search;
    return currentQueryStr + jobCategoryQuery;
  };

  useEffect(() => {
    const query = objToQuery();
    if (jobLoading)
      fetch(`${JOB_API}${query}`, {
        method: "GET",
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozfQ.FCoW9gw-N4X3Xc3VS5-rKWXj7khyyM1e9OPdyXaLLeQ"
        }
      })
        .then(res => res.json())
        .then(res => {
          setJobData(res.job_list);
          setJobLoading(false);
        });
  }, [jobLoading]);

  return { jobData, setJobLoading };
};

const Main = styled.main`
  margin-top: 50px;
  width: 100%;
`;

export default Joblist;
