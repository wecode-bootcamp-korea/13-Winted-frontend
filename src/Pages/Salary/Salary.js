import React, { useEffect, useState } from "react";
import { CATEGORY_API, YEAR_API, SALARY_API, JOB_API } from "../../config";
import axios from "axios";
import styled from "styled-components";
import Chart from "./components/Chart";
import Banner from "./components/Banner";
import UpgradePosition from "./components/UpgradePosition";

const Salary = () => {
  const [isFirstRender, setIsFirstRender] = useState(false);
  const [categories, setCategories] = useState([]);
  const [yearsOfService, setYearsOfService] = useState([]);
  const [salary, setSalary] = useState([]);
  const [category, setCategory] = useState({
    id: "1",
    title: "개발"
  });
  const [subCategory, setSubCategory] = useState({
    id: "1",
    title: "서버 개발자"
  });
  const [salaryOfYear, setSalaryOfYear] = useState({
    id: "2",
    year: "신입"
  });
  const [jobList, setJobList] = useState({});
  const [currentSalary, setCurrentSalary] = useState(2847);
  const [inputSalary, setInputSalary] = useState("");
  const [salaryRate, setSalaryRate] = useState("");

  const initialFetchData = () => {
    axios.get(CATEGORY_API).then(res => {
      const categories = res.data.category_list;
      setCategories(categories);
    });
    axios.get(YEAR_API).then(res => {
      const years = res.data.career_list;
      setYearsOfService(years.slice(1));
    });
  };

  const fetchData = () => {
    axios.get(`${SALARY_API}/${category.id}/${subCategory.id}`).then(res => {
      const salary = res.data.salary_list;
      setSalary(salary.slice(1));
      setCurrentSalary(salary[salaryOfYear.id - 1].salary);
    });
    axios
      .get(`${JOB_API}?main=${category.id}&sub=${subCategory.id}`)
      .then(res => {
        const jobList = res.data.job_list;
        setJobList(jobList);
      });
  };

  useEffect(() => {
    initialFetchData();
    fetchData();
    setIsFirstRender(true);
  }, []);

  const handleCategory = e => {
    const id = e.target.value;
    const title = e.target.options[e.target.selectedIndex].text;
    setCategory({ ...category, id, title });
  };

  useEffect(() => {
    if (!isFirstRender) {
      return;
    } else {
      const initialSub = categories[category.id - 1]?.sub_category[0];
      setSubCategory({ id: initialSub?.id, title: initialSub?.title });
    }
  }, [category.id]);

  const handleSubCategory = e => {
    const id = e.target.value;
    const title = e.target.options[e.target.selectedIndex].text;
    setSubCategory({ ...subCategory, id, title });
  };

  useEffect(() => {
    if (!isFirstRender) {
      return;
    } else {
      fetchData();
    }
  }, [subCategory.id]);

  const handleSalaryOfYear = e => {
    const id = e.target.value;
    const year = e.target.options[e.target.selectedIndex].text;
    setSalaryOfYear({ ...salaryOfYear, id, year });
  };

  useEffect(() => {
    if (!isFirstRender) {
      return;
    } else {
      const current = salary.filter(
        el => el.career_id === Number(salaryOfYear.id)
      );
      setCurrentSalary(current[0]?.salary);
    }
  }, [salaryOfYear.id]);

  const handleInputSalary = e => {
    const inputValue = e.target.value
      .replace(/[^0-9.]/g, "")
      .replace(/(\..*)\./g, "$1");

    const numAddComma = Number(
      [...inputValue].filter(el => el !== ",").join("")
    ).toLocaleString();
    setInputSalary(numAddComma);

    const salaryRate = Math.round((inputValue / currentSalary) * 100);
    setSalaryRate(salaryRate);
  };

  return (
    <Container>
      <Chart
        category={category}
        subCategory={subCategory}
        salaryOfYear={salaryOfYear}
        yearsOfService={yearsOfService}
        salary={salary}
        currentSalary={currentSalary}
        inputSalary={inputSalary}
        salaryRate={salaryRate}
      />
      <Filter>
        <li>
          <select name="category" onChange={handleCategory}>
            <option disabled>직군</option>
            {categories.length > 0 &&
              categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.title}
                </option>
              ))}
          </select>
        </li>
        <li>
          <select name="subCategory" onChange={handleSubCategory}>
            <option disabled>직무</option>
            {categories[category.id - 1]?.sub_category.map(sub => (
              <option key={sub.id} value={sub.id}>
                {sub.title}
              </option>
            ))}
          </select>
        </li>
        <li>
          <select name="yearsOfService" onChange={handleSalaryOfYear}>
            <option disabled>경력</option>
            {yearsOfService.length > 0 &&
              yearsOfService.map(year => (
                <option key={year.id} value={year.id}>
                  {year.name}
                </option>
              ))}
          </select>
        </li>
        <li>
          <input
            type="text"
            placeholder="연봉"
            onInput={handleInputSalary}
            value={inputSalary}
          />
        </li>
      </Filter>
      <Banner />
      <UpgradePosition jobList={jobList} />
    </Container>
  );
};

export default Salary;

const Container = styled.div`
  height: 100%;
  background-color: #f8f8fa;
`;

const Filter = styled.ul`
  display: flex;
  position: relative;
  top: -22.5px;
  width: 90%;
  max-width: 1060px;
  margin: 0 auto;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  li {
    position: relative;
    width: 25%;
    height: 45px;

    select,
    input {
      width: 100%;
      height: 43px;
      border: none;
      border-right: 1px solid lightgray;
      outline: none;
    }

    input {
      color: #000;
      font-size: 16px;
      text-indent: 10px;

      ::-webkit-outer-spin-button,
      ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      ::placeholder {
        padding-top: 4px;
        color: #b5b5b5;
        font-size: 16px;
        text-indent: 10px;
      }
    }

    :last-child::after {
      content: "만원";
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-70%);
      width: auto;
      color: #b5b5b5;
      font-size: 15px;
      word-break: keep-all;
    }
  }
`;
