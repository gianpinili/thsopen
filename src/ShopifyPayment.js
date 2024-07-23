import { useEffect } from "react";
import PropTypes from "prop-types";

const ShopifyPayment = () => {
  useEffect(() => {
    // Direct checkout URL
    const checkoutUrl =
      "https://www.thehockeyshop.com/checkouts/bin/a3325da99f837f2a4d741fb0426421c9?locale=en&skip_shop_pay=true";

    // Redirect to the checkout URL
    window.location.href = checkoutUrl;
  }, []);

  return null;
};

ShopifyPayment.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default ShopifyPayment;
