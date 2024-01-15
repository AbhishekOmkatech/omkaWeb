import React from "react";

const GetInTounch = () => {
  return (
    <div>
      {/* get in touch */}
      <a
        href="mailto: info@omkatech.com"
        class="btn-whatsapp-pulse1 btn-whatsapp-pulse-border1"
        id="a1" rel="noopener noreferrer"
      >
        <i class="fa fa-envelope">{/* Get In Touch */}</i>
      </a>
      {/* whatsapp */}
      <a
        href="https://api.whatsapp.com/send?phone=+17866482910&text=Hello, Team Omka Tech"
        id="aa1"
        target="_blank"
        rel="noopener"
        class="btn-whatsapp-pulse btn-whatsapp-pulse-border"
      >
        <i class="fab fa-whatsapp"></i>
      </a>
      {/* phone */}
      <a
        href="https://join.skype.com/invite/tKKVXcZ1vN4T"
        id="aaa1"
        target="_blank"
        rel="noopener"
        class="btn-whatsapp-pulse2 btn-whatsapp-pulse-border2"
      >
        <i class="fab fa-skype"></i>
      </a>
    </div>
    
  );
};

export default GetInTounch;
