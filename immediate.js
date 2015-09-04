function messageSendCoupon()
{
    url = "http://staging.newaer.com/dtad/sink/Coupon.pkpass";
    cta = "Get Coupon";
    sendMessage(selectedRowId, cta, url);
}

function messageDeveloperPortal()
{
    url = "http://developer.newaer.com";
    cta = "Push Developer Site to Phone";
    sendMessage(selectedRowId, cta, url);
}
