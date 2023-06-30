import React from "react";
import PageLayout from "./Common/PageLayout";

import image from "../../assets/img/bennoe10d.jpg";

const Benno10D = () => {
  return (
    <PageLayout
      model="benno boost e 10d e-bike"
      type="Shop/electric"
      price="$3,999.99"
      image={image}
    />
  );
};

export default Benno10D;
