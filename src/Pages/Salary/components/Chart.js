import React from "react";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";

const Chart = ({
  category,
  subCategory,
  salaryOfYear,
  yearsOfService,
  salary,
  currentSalary,
  inputSalary,
  salaryRate
}) => {
  const salaryAddToComma = salary => {
    const addToComma = Number(salary).toLocaleString();
    return addToComma;
  };

  const stringToNumber = Number(
    [...inputSalary].filter(el => el !== ",").join("")
  );

  const data = {
    labels: yearsOfService.map(el => el.name),
    datasets: [
      {
        xAxisID: "bar-x-axis1-salary",
        data: salary.map(el => el.salary),
        backgroundColor: salary.map(el =>
          el.career_id === Number(salaryOfYear.id)
            ? (el = "rgba(255, 255, 255, 0.6)")
            : (el = "rgba(0, 0, 0, 0.1)")
        ),
        label: "Salary"
      },
      {
        xAxisID: "bar-x-axis2-salaryRate",
        data:
          (stringToNumber < salary[10]?.salary) & (stringToNumber > 0) &&
          salary.map(el =>
            el.career_id === Number(salaryOfYear.id)
              ? (el = [stringToNumber, stringToNumber + 500])
              : (el = [0, 0])
          ),
        backgroundColor: salary.map(el =>
          el.career_id === Number(salaryOfYear.id)
            ? (el = "rgba(255, 255, 255, 1)")
            : (el = "rgba(255, 255, 255, 0)")
        ),
        label: "SalaryRate"
      }
    ]
  };

  const options = {
    legend: {
      display: false
    },
    scales: {
      xAxes: [
        {
          id: "bar-x-axis1-salary",
          stacked: true,
          gridLines: {
            display: false
          },
          barThickness: 20,
          ticks: {
            fontColor: "#2E5A47"
          }
        },
        {
          id: "bar-x-axis2-salaryRate",
          dispaly: false,
          stacked: true,
          gridLines: {
            display: false
          },
          barThickness: 20,
          ticks: {
            fontColor: "rgba(0, 0, 0, 0)"
          },
          offset: true
        }
      ],
      yAxes: [
        {
          responsive: false,
          stacked: false,
          ticks: {
            beginAtZero: true,
            callback: function (salary) {
              return salaryAddToComma(salary);
            },
            fontColor: "#2E5A47"
          }
        },
        {
          stacked: false,
          display: false,
          ticks: {
            beginAtZero: true
          }
        }
      ]
    },
    maintainAspectRatio: false,
    tooltips: {
      callbacks: {
        label: function (el, d) {
          if (el.datasetIndex === 0) {
            return Number(el.yLabel).toLocaleString() + "만원";
          } else if (el.datasetIndex === 1) {
            return inputSalary.toLocaleString() + "만원";
          }
        }
      }
    }
  };

  return (
    <ChartOverlay>
      <ChartContainer>
        <ChartSection>
          <BarWrapper>
            <Bar data={data} options={options} height={320} />
          </BarWrapper>
          <div>
            {category && <Button>{category.title}</Button>}
            {subCategory.title && <Button>{subCategory.title}</Button>}
          </div>
          <aside>
            {salaryOfYear.year === "신입" ? (
              <Summary>
                {salaryOfYear.year} {subCategory.title} 예상 연봉
              </Summary>
            ) : (
              <Summary>
                {salaryOfYear.year} 경력 {subCategory.title} 예상 연봉
              </Summary>
            )}
            <Salary>
              {currentSalary?.toLocaleString()}
              <sub>만원</sub>
            </Salary>
            {(salaryRate < 100) & (salaryRate > 0) ? (
              <SalaryRate>*예상 연봉 대비 {100 - salaryRate}% 낮음</SalaryRate>
            ) : salaryRate >= 100 ? (
              <SalaryRate>*예상 연봉 대비 {salaryRate - 100}% 높음</SalaryRate>
            ) : null}
          </aside>
        </ChartSection>
      </ChartContainer>
    </ChartOverlay>
  );
};

export default Chart;

const ChartOverlay = styled.div`
  position: relative;
  width: 100%;
  min-height: 365px;
  max-height: 400px;
  padding: 40px 0 40px;
  margin-top: 50px;
  background-color: #22bd79;
`;

const ChartContainer = styled.section`
  width: 90%;
  max-width: 1060px;
  margin: 0 auto;
`;

const BarWrapper = styled.section`
  float: left;
  width: 74%;
  margin-right: 20px;
`;

const ChartSection = styled.div``;

const Button = styled.button`
  display: block;
  width: auto;
  height: auto;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 8px 10px;
  background-color: #fff;
  border-radius: 3px;
  color: #22bd79;
  font-weight: 900;
`;

const Summary = styled.h4`
  display: relative;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.8;
`;

const Salary = styled.h2`
  color: #fff;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.4;

  sub {
    width: auto;
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    word-break: keep-all;
  }
`;

const SalaryRate = styled.h4`
  margin: 10px 0;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  line-height: 1.8;
`;
