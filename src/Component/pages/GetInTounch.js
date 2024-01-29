import React from "react";

const GetInTounch = () => {
  return (
    <div>
      {/* get in touch */}
      <a
        href="mailto: info@omkatech.com"
        className="btn-whatsapp-pulse1 btn-whatsapp-pulse-border1"
        id="a1" rel="noopener noreferrer"
      >
        <i className="fa fa-envelope">{/* Get In Touch */}</i>
      </a>
      {/* whatsapp */}
      <a
        href="https://api.whatsapp.com/send?phone=+17866482910&text=Hello, Team Omka Tech"
        id="aa1"
        target="_blank"
        rel="noopener"
        className="btn-whatsapp-pulse btn-whatsapp-pulse-border"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
      {/* phone */}
      <a
        href="https://join.skype.com/invite/tKKVXcZ1vN4T"
        id="aaa1"
        target="_blank"
        rel="noopener"
        className="btn-whatsapp-pulse2 btn-whatsapp-pulse-border2"
      >
        <i className="fab fa-skype"></i>
      </a>
    </div>
    
  );
};

export default GetInTounch;
