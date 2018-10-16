import React from "react";
import Helmet from "react-helmet";

import FunnelLayout from "../layouts/funnel";
import Paperform from "../components/PaperformEmbed";

export default () => (
  <FunnelLayout>
    <Helmet
      title="Buy now | supa gifts australia"
      meta={[
        {
          name: "description",
          content:
            "Buy yourself, a friend or a family member a gift with a conscience."
        }
      ]}
    />

    <Paperform id="supa-gifts" />
  </FunnelLayout>
);
