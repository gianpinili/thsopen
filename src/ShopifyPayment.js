import { useEffect } from "react";
import PropTypes from "prop-types";

const ShopifyPayment = () => {
  useEffect(() => {
    // Direct checkout URL
    const checkoutUrl =
      "www.thehockeyshop.com/checkouts/bin/ffd69365c2b47fc1552cf2fe1a4486cc";

    // Redirect to the checkout URL
    window.location.href = checkoutUrl;
  }, []);

  return null;
};

ShopifyPayment.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default ShopifyPayment;
