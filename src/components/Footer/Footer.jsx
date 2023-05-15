export default function Footer() {
  return (
    <footer className="w-100 py-4 flex-shrink-0">
      <div className="container py-4">
        <div className="row gy-4 gx-5">
          <div className="col-lg-4 col-md-6">
            <h5 className="h1 text-white">FB.</h5>
            <p className="small text-muted">
              Scribbler is an online blog platform for users to signup and
              signin. It has multiple categories to blog about.
            </p>
            <p className="small text-muted mb-0">
              &copy; Copyrights. All rights reserved.
              <a className="text-primary" href="#">
                scribbler.com
              </a>
            </p>
          </div>
          <div className="col-lg-2 col-md-6">
            <h5 className="text-white mb-3">Quick links</h5>
            <ul className="list-unstyled text-muted">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Get started</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6">
            <h5 className="text-white mb-3">Quick links</h5>
            <ul className="list-unstyled text-muted">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Get started</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5 className="text-white mb-3">Newsletter</h5>
            <p className="small text-muted">
              Signup to the Scribbler newsletter to get recommendations on
              latest blogs of your concern.
            </p>
            <form action="#">
              <div className="input-group mb-3">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-primary"
                  id="button-addon2"
                  type="button"
                >
                  <strong className="fas fa-paper-plane">Submit</strong>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
