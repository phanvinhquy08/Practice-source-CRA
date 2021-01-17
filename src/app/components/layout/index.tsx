import React from "react";

import V1 from "./v1";

type Props = {
  ver: "v1" | "v2";
};

const Layout: React.FC<Props> = ({ ver, children }) => {
  return <>{ver === "v1" && <V1 children={children} />}</>;
};

export default Layout;
