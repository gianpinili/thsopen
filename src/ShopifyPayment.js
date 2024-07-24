import { useEffect } from "react";
import PropTypes from "prop-types";

const ShopifyPayment = () => {
  useEffect(() => {
    // Direct checkout URL
    const checkoutUrl =
      "https://www.thehockeyshop.com/checkouts/bin/2839501a6d7cf3149543898c26591d3a?locale=en&skip_shop_pay=true";

    // Redirect to the checkout URL
    window.location.href = checkoutUrl;
  }, []);

  return null;
};

ShopifyPayment.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default ShopifyPayment;
