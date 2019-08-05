import React from "react";
import PeopleSearch from "./containers/PeopleSearch/PeopleSearch";
import { shallow } from "enzyme";

describe("<PeopleSearch />", () => {
  // Test to confirm that the PeopleSearch container renders, containing
  // the Submit button.
  it("renders", () => {
    const wrapper = shallow(<PeopleSearch />);
    expect(wrapper.find("button").text()).toEqual("Submit");
  });

  // Test to confirm that this.state.inputError is properly set if
  // the search form is submitted without any input
  it("displays input error on empty submit", () => {
    const search = shallow(<PeopleSearch />);
    const searchForm = search.find("form").first();
    expect(search.state().inputError).toEqual(false);
    searchForm.simulate("submit", {
      preventDefault: () => {}
    });
    expect(search.state().inputError).toEqual(true);
  });

  // Test to confirm that this.state.inputError is properly set if
  // the search form is submitted with one unqualified input
  it("enforces form validation", () => {
    const search = shallow(<PeopleSearch />);
    const searchForm = search.find("form").first();
    expect(search.state().inputError).toEqual(false);
    search.setState({
      firstName: "Elon",
      lastName: "Musk",
      usState: ""
    });
    searchForm.simulate("submit", {
      preventDefault: () => {}
    });
    expect(search.state().inputError).toEqual(true);
  });

  // Test to confirm that this.state.inputError is properly set if
  // the search form is submitted with fully qualified input
  it("accepts valid input", () => {
    const search = shallow(<PeopleSearch />);
    const searchForm = search.find("form").first();
    expect(search.state().loading).toEqual(false);
    search.setState({
      firstName: "Elon",
      lastName: "Musk",
      usState: "US"
    });
    searchForm.simulate("submit", {
      preventDefault: () => {}
    });
    expect(search.state().loading).toEqual(true);
  });
});
