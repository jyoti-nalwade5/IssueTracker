import React from 'react';
import URLSearchParams from 'url-search-params';
import { Route } from 'react-router-dom';
import { Panel } from 'react-bootstrap';

import IssueFilter from './IssueFilter.jsx';
import IssueTable from './IssueTable.jsx';
import IssueAdd from './IssueAdd.jsx';
import graphQLFetch from './graphQLFetch.js';
import IssueDetail from './IssueDetail.jsx';



export default class IssueList extends React.Component {
    constructor() {
      super();
      this.state = { issues: [] };
      this.createIssue = this.createIssue.bind(this);
      this.closeIssue = this.closeIssue.bind(this);
      this.deleteIssue = this.deleteIssue.bind(this);
    }
  
    componentDidMount() {
      this.loadData();
    }

    componentDidUpdate(prevProps) {
      const { location: { search: prevSearch } } = prevProps;
      const { location: { search } } = this.props;
      if (prevSearch !== search) {
        this.loadData();
      }
    }
  
    async loadData() {
      const { location: { search } } = this.props;
      const params = new URLSearchParams(search);
      const vars = {};
      if (params.get('status')) vars.status = params.get('status');

      const query = `query issueList($status: StatusType) {
        issueList (status: $status) {
          id title status owner
          created effort due
        }
      }`;
  
      const data = await graphQLFetch(query,vars);
      if (data) {
        this.setState({ issues: data.issueList });
      }
    }
  
    async createIssue(issue) {
      const query = `mutation issueAdd($issue: IssueInputs!) {
        issueAdd(issue: $issue) {
          id
        }
      }`;
  
      const data = await graphQLFetch(query, { issue });
      if (data) {
        this.loadData();
      }
    }
    
    async closeIssue(index) {
      const query = `mutation issueClose($id: Int!) {
        issueUpdate(id: $id, changes: { status: Closed }) {
          id title status owner
          effort created due description
        }
      }`;
      const { issues } = this.state;
      const data = await graphQLFetch(query, { id: issues[index].id });
      if (data) {
        this.setState((prevState) => {
          const newList = [...prevState.issues];
          newList[index] = data.issueUpdate;
          return { issues: newList };
        });
      } else {
        this.loadData();
      }
    }

    async deleteIssue(index) {
      const query = `mutation issueDelete($id: Int!) {
        issueDelete(id: $id)
      }`;
      const { issues } = this.state;
      const { location: { pathname, search }, history } = this.props;
      const { id } = issues[index];
      const data = await graphQLFetch(query, { id });
      if (data && data.issueDelete) {
        this.setState((prevState) => {
          const newList = [...prevState.issues];
          if (pathname === `/issues/${id}`) {
            history.push({ pathname: '/issues', search });
          }
          newList.splice(index, 1);
          return { issues: newList };
        });
      } else {
        this.loadData();
      }
    }

    render() {
      const { issues } = this.state;
      const { match } = this.props;
      return (
        <React.Fragment>
          <Panel>
          <Panel.Heading>
            <Panel.Title toggle>Filter</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
            <IssueFilter />
          </Panel.Body>
          </Panel>
          <IssueTable
          issues={issues}
          closeIssue={this.closeIssue}
          deleteIssue={this.deleteIssue}
          />
          <hr />
          <IssueAdd createIssue={this.createIssue} />
          <hr />
          <Route path={`${match.path}/:id`} component={IssueDetail} />
        </React.Fragment>
      );
    }
  }
