import React from "react";
import Helmet from "react-helmet";

import FunnelLayout from "../layouts/funnel";
import Paperform from "../components/PaperformEmbed";

export default () => (
  <FunnelLayout>
    <div style={{ margin: "0 auto -1rem" }}>
      <Helmet
        title="Buy now | supa gifts australia"
        description="Buy yourself, a friend or a family member a gift with a conscience."
      />

      <Paperform id="supa-gifts" />
    </div>
  </FunnelLayout>
);
