import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-dark text-white">
      <div className="container">
        {/* section-header */}
        <div className="section-header text-center">
          <h2 className="text-uppercase fs-7 m-0 p-0 d-inline border-bottom border-2 border-info">
            Contact
          </h2>
        </div>

        <div className="d-flex align-items-center justify-content-center mt-5">
          <form className="w-50">
            <input type="text" placeholder="Name" class="input" />
            <input type="email" placeholder="Email" class="input" />
            <input type="number" placeholder="Phone" class="input" />
            <textarea
              name=""
              placeholder="Message"
              class="input"
              id="textarea"
              cols="30"
              rows="10"
            ></textarea>
            <div className="text-center">
              <input
                type="submit"
                value="send message"
                className="btn btn-info"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;