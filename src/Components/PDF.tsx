import React from "react";
import {Subs_Protocol_Whitepaper} from "../assets";

const PDFFile = () => {
    return (
      <div>
        
        <embed src={Subs_Protocol_Whitepaper} width="100%" height="700px" />
      </div>
    );
  };

export default PDFFile;