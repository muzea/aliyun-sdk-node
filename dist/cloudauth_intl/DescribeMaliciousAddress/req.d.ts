export interface DescribeMaliciousAddressRequest {
    /**
     * 开始时间。
     * @example `2017-07-20`
     */
    "Start"?: string;
    /**
     * 结束时间。
     * @example `2017-08-20`
     */
    "End"?: string;
    /**
     * 币种(支持：BTC、ETH、EOS、XRP、TRX、USDT)。
     * @example `BTC`
     */
    "Coin"?: string;
    /**
     * 商户侧自定义的业务唯一标识，用于后续定位排查问题使用。支持字母和数字的组合，长度最长32位，请确保唯一。
     * @example `djs20dsjk2-dsjd29-dsskc`
     */
    "MerchantBizId"?: string;
}
