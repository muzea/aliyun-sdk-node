export interface DescribeAddressOverviewRequest {
    /**
     * 商户侧自定义的业务唯一标识，用于后续定位排查问题使用。支持字母和数字的组合，长度最长32位，请确保唯一。
     * @example `e0c34a***353888`
     */
    "MerchantBizId"?: string;
    /**
     * 地址。
     * @example `0xabds***djskjds`
     */
    "Address"?: string;
    /**
     * 币种。
     * @example `ETH`
     */
    "Coin"?: string;
}
