import React from "react";

function Banner({result, children}) {
  return <div className={`${result} banner`}>{children}</div>
}

export default Banner;
