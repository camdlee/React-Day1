import React, { Component } from 'react'

export default class Toast extends Component {
  render() {
    return (
      <div>
        <div>
            <button type="button" className="btn btn-primary" id="liveToastBtn">Show live toast</button>
            <div className="toast-container position-fixed bottom-0 end-0 p-3">
                <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <img src="..." className="rounded me-2" alt="..." />
                    <strong className="me-auto">Toast Toast Toast</strong>
                    <small>11 mins ago</small>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" />
                </div>
                <div className="toast-body">
                    Hello, world! This is my first toast message.
                </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
