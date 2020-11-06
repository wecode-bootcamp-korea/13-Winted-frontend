import { withRouter } from "react-router-dom";
import styled from "styled-components";

const CategoryRoute = ({
  routes,
  changeCategories,
  history,
  setJobLoading,
  setIsURLUpdating,
  location
}) => {
  return (
    <Section>
      <button
        onClick={() => {
          changeCategories(true);
          setIsURLUpdating(true);
          history.push(`/joblist${location.search}`);
        }}
      >
        전체
      </button>
      {routes.map(route => (
        <>
          <span> &gt; </span>
          <button
            onClick={() =>
              updateJoblist(
                route,
                changeCategories,
                history,
                setJobLoading,
                setIsURLUpdating
              )
            }
          >
            {route.title}
          </button>
        </>
      ))}
    </Section>
  );
};

const updateJoblist = (
  route,
  changeCategories,
  history,
  setJobLoading,
  setIsURLUpdating
) => {
  changeCategories(true);
  setIsURLUpdating(true);
  const pushURL = route.category_id
    ? `/joblist/${route.category_id}/${route.id}`
    : `/joblist/${route.id}`;
  history.push(pushURL);
};

const Section = styled.div`
  height: 60px;
  padding: 20px 0 15px 0;
  width: 1060px;

  button {
    font-size: 20px;
    color: gray;

    &:last-child {
      color: black;
    }
  }
`;

export default withRouter(CategoryRoute);
