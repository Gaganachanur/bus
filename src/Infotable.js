import React, { Component } from 'react'

export default class InfoTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      isLoading: false,
      isError: false
    }
  }


  async componentDidMount() {
    this.setState({ isLoading: true })
    const response = await fetch('http://localhost:3000/loc')
    if (response.ok) {
      const users = await response.json()
      this.setState({ users, isLoading: false })
    } else {
      this.setState({ isError: true, isLoading: false })
    }
  }
  renderTableHeader = () => {
    return Object.keys(this.state.users[0]).map(attr => <th key={attr}>{attr.toUpperCase()}</th>)
  }

  renderTableRows = () => {
    return this.state.users.map(user => {
      return (
        <tr key={user.bus_no}>
          <td>{user.source}</td>
          <td>{user.desti}</td>
          <td>{user.bus_name}</td>
          <td>{user.departure}</td>
          
          <td>{user.rating}</td>
          <td>{user.seats}</td>
          <td>{user.fare}</td>
        </tr>
      )
    })
  }
  render() {
    const { users, isLoading, isError } = this.state

    if (isLoading) {
      return <div>Loading...</div>
    }

    if (isError) {
      return <div>Error</div>
    }

    return users.length > 0
      ? (
        <table>
          <thead>
            <tr>
              {this.renderTableHeader()}
            </tr>
          </thead>
          <tbody>
            {this.renderTableRows()}
          </tbody>
        </table>
      ) : (
        <div>
          No users.
      </div>
      )
  }

}