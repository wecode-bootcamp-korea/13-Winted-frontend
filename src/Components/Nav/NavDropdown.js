import React, { Component } from "react";
import "./NavDropdown.scss";
import { API_Detail } from "../../config";

export default class NavDropdown extends Component {
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
                  <li>
                    {category.title}
                    <button className="fal fa-angle-right"></button>
                    <ul className="subCategory">
                      {category &&
                        category?.sub_category.map(subCategory => (
                          <li>{subCategory.title}</li>
                        ))}
                    </ul>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
