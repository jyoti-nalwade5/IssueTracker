
/* eslint "react/prefer-stateless-function": "off" */

import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import URLSearchParams from 'url-search-params';

class IssueFilter extends React.Component {
  constructor({ location: { search } }) {
    super();
    const params = new URLSearchParams(search);
    this.state = {
      status: params.get('status') || '',
      changed: false,
    };
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
    this.showOriginalFilter = this.showOriginalFilter.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { location: { search: prevSearch } } = prevProps;
    const { location: { search } } = this.props;
    if (prevSearch !== search) {
      this.showOriginalFilter();
    }
  }

  onChangeStatus(e) {
    this.setState({ status: e.target.value, changed: true });
  }

  showOriginalFilter() {
    const { location: { search } } = this.props;
    const params = new URLSearchParams(search);
    this.setState({
      status: params.get('status') || '',
      changed: false,
    });
  }
  
  applyFilter() {
    const { status } = this.state;
    const { history } = this.props;
    history.push({
      pathname: '/issues',
      search: status ? `?status=${status}` : '',
    });
  }

    render() {
      const { status, changed } = this.state;
      return (
        <div>
         Status:
        {' '}
        <select value={status} onChange={this.onChangeStatus}>
          <option value="">(All)</option>
          <option value="New">New</option>
          <option value="Assigned">Assigned</option>
          <option value="Fixed">Fixed</option>
          <option value="Closed">Closed</option>
        </select>
        {' '}
        <Button bsStyle="primary" type="button" onClick={this.applyFilter}>
          Apply
        </Button>
        {' '}
        <Button
          type="button"
          onClick={this.showOriginalFilter}
          disabled={!changed}
        >
          Reset
        </Button>
      </div>
      );
    }
  }

  export default withRouter(IssueFilter);