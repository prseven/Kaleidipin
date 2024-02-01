import React from "react";
import k from "../Images/k.png";

function Footer(props) {
  return (
    <div>
      <footer class="d-flex flex-wrap justify-content-center align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
          <a
            href="/"
            class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <img
              src={k}
              width="30"
              height="30"
              class="d-inline-block align-top"
            />
          </a>
          <span class="mb-3 mb-md-0 text-muted text-info">
            © 2023 KaleidpinApp, Inc
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
