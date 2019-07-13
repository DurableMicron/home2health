import React, { useState } from 'react'
import Axios from 'axios'

const Contact = () => {
  const [name, setName] = useState('')
  const [organistation, setOrganistation] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sentEmail, setSentEmail] = useState(false)
  const [loading, setLoading] = useState(false)

  const validEmail = () => {
    console.log(name, email, message)
    return name !== '' && email !== '' && message !== ''
  }

  const sendEmail = async () => {
    if (validEmail()) {
      setLoading(true)
      try {
        await Axios.post(`${process.env.REACT_APP_BACKEND_URL}/email`, {
          name,
          organistation,
          email,
          message
        })
      } catch (_) {}

      setLoading(false)
      setSentEmail(true)
    }
  }

  return (
    <div class="section white">
      <div class="container">
        <br />
        <br />
        <h2 class="header center">Contact us.</h2>
        <h5 class="header col s12 light center">
          Home2Health is a research team from the School of Population and
          Global Health at the University of Western Australia. Please contact
          us below:
        </h5>
      </div>
      {!sentEmail ? (
        <div class="container">
          <div class="row">
            <div class="col s12">
              <div class="row">
                <div class="input-field col s12">
                  <input
                    id="contact_name"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                  <label for="contact_name">Name</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input
                    id="contact_organisation"
                    type="text"
                    value={organistation}
                    onChange={e => setOrganistation(e.target.value)}
                  />
                  <label for="contact_organisation">
                    Organisation (optional)
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input
                    id="contact_email"
                    type="email"
                    class="validate"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <label for="contact_email">Email</label>{' '}
                  <span
                    class="helper-text"
                    data-error="Please enter a valid email"
                    data-success=""
                  />
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <textarea
                    id="contact_message"
                    class="materialize-textarea"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                  />
                  <label for="contact_message">Message</label>
                </div>
              </div>
            </div>
          </div>
          <div class="row center">
            {' '}
            {!loading ? (
              <button
                class="btn-large waves-effect waves-light"
                onClick={sendEmail}
              >
                Send
              </button>
            ) : (
              <div id="progress-bar">
                <div class="indeterminate progess" />
              </div>
            )}
          </div>
          <br />
          <br />
        </div>
      ) : (
        <h3 style={{ textAlign: 'center', margin: '4rem 0' }}>Message sent!</h3>
      )}
    </div>
  )
}

export default Contact