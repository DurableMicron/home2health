import React, { Component } from 'react'
import Link from 'next/link'

class Header extends Component {
  render() {
    return (
      <nav className="lighten-1 white" id="header">
        <div className="nav-wrapper container">
          <Link href="/">
            <a id="logo-container" className="brand-logo">
              Home2Health
            </a>
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <a
                className="dropdown-trigger theHappening"
                href="#"
                data-target="happeningDropdown"
              >
                What's happening in Australia?
                <i className="material-icons right">arrow_drop_down</i>
              </a>
              <ul id="happeningDropdown" className="dropdown-content">
                <li>
                  <a href=".">Housing first programs</a>
                </li>
                <li className="divider" />
                <li>
                  <a href=".">Hospital programs</a>
                </li>
                <li className="divider" />
                <li>
                  <a href=".">GP services</a>
                </li>
                <li className="divider" />
                <li>
                  <a href=".">Dual diagnosis services</a>
                </li>
                <li className="divider" />
                <li>
                  <a href=".">Peer worker programs</a>
                </li>
                <li className="divider" />
                <li>
                  <a href=".">Outreach</a>
                </li>
                <li className="divider" />
                <li>
                  <a href=".">Medical recovery centre</a>
                </li>
                <li className="divider" />
                <li>
                  <Link href="/resources"><a>Resources</a></Link>
                </li>
              </ul>
            </li>
            <li>
              <a className="dropdown-trigger" href="#" data-target="memberDropdown">
                Members Area
                <i className="material-icons right">arrow_drop_down</i>
              </a>
              <ul id="memberDropdown" className="dropdown-content">
                <li>
                  <a href=".">Discussion board</a>
                </li>
                <li className="divider" />

                <li>
                  <a href=".">Become a member</a>
                </li>
                <li className="divider" />
                <li>
                  <a href=".">About membership</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="dropdown-trigger" href="#" data-target="blogDropdown">
                Blog
                <i className="material-icons right">arrow_drop_down</i>
              </a>
              <ul id="blogDropdown" className="dropdown-content">
                <li>
                  <Link href="/posts/1">
                    <a>Posts</a>
                  </Link>
                </li>
                <li className="divider" />
                <li>
                  <Link href="/posts/form">
                    <a>Create Post</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <Link href="#">
                <a>Login</a>
              </Link>
            </li>
          </ul>
          <ul id="nav-mobile" className="sidenav">
            <li>
              <a
                className="dropdown-trigger dropdownMobile"
                href="#"
                data-target="happeningDropdownMobile"
              >
                What's happening in Australia?
              </a>
              <ul id="happeningDropdownMobile" className="dropdown-content">
                <li>
                  <a href=".">Housing first programs</a>
                </li>
                <li>
                  <a href=".">Hospital programs</a>
                </li>
                <li>
                  <a href=".">GP services</a>
                </li>
                <li>
                  <a href=".">Dual diagnosis services</a>
                </li>
                <li>
                  <a href=".">Peer worker programs</a>
                </li>
                <li>
                  <a href=".">Outreach</a>
                </li>
                <li>
                  <a href=".">Medical recovery centre</a>
                </li>
                <li>
                  <a href="/resources">Resources</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                className="dropdown-trigger dropdownMobile"
                href="#"
                data-target="memberDropdownMobile"
              >
                Members Area
              </a>
              <ul id="memberDropdownMobile" className="dropdown-content">
                <li>
                  <a href=".">Discussion board</a>
                </li>
                <li>
                  <a href=".">Become a member</a>
                </li>
                <li>
                  <a href=".">About membership</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                className="dropdown-trigger dropdownMobile"
                href="#"
                data-target="blogDropdownMobile"
              >
                Blog
              </a>
              <ul id="blogDropdownMobile" className="dropdown-content">
                <li>
                  <a href="/posts">Posts</a>
                </li>
                <li>
                  <a href="/posts/form">Create Form</a>
                </li>
              </ul>
            </li>
            <li>
              <Link href="#">
                <a className="navitem">News</a>
              </Link>
            </li>
            
            <li>
              <Link href="#">
                <a className="navitem">Login</a>
              </Link>
            </li>
          </ul>
          <a href="#" data-target="nav-mobile" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav>
    )
  }
}

export default Header
