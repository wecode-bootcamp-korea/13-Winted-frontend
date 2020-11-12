import React, { Component } from "react";
import { connect } from "react-redux";
import "./NavDropdown.scss";
import { API_Detail } from "../../config";
import { Link } from "react-router-dom";
import { setUrlLoading } from "../../store/actions/index";

class NavDropdown extends Component {
  constructor() {
    super();
    this.state = {
      menus: []
    };
  }

  componentDidMount() {
    fetch(`${API_Detail}/company/category`)
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({
          categoryList: res.category_list
        });
      });
  }
  render() {
    const { categoryList } = this.state;
    const { leaveDropdown } = this.props;

    return (
      <div>
        <div className="presentation">
          <div className="dropDownContainer">
            <ul className="category" onMouseLeave={() => leaveDropdown(false)}>
              {categoryList &&
                categoryList.map(category => (
                  <li onClick={this.props.setUrlLoading(true)}>
                    <Link to={`/joblist/${category.id}`} className="Link">
                      {category.title}
                      <button className="fal fa-angle-right"></button>
                      <ul className="subCategory">
                        {category &&
                          category?.sub_category.map(subCategory => (
                            <li
                              onClick={() => {
                                this.props.setUrlLoading(true);
                                window.location.reload(true);
                              }}
                            >
                              <Link
                                onclick={() => window.location.reload(true)}
                                to={`/joblist/${category.id}/${subCategory.id}`}
                                className="Link"
                              >
                                {subCategory.title}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setUrlLoading: text => dispatch(setUrlLoading(text))
  };
}

export default connect(null, mapDispatchToProps)(NavDropdown);
