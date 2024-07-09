export interface DescribeTransactionsListRequest {
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
    /**
     * 查询的开始时间戳，单位：秒。
     * @example `1682232649`
     */
    "StartTimestamp"?: number;
    /**
     * 查询的结束时间戳，单位：秒。
     * @example `1682235649`
     */
    "EndTimestamp"?: number;
    /**
     * 交易类型。可选值 “in”、“out”、“all”，默认“all”。
     * @example `in`
     */
    "Type"?: string;
    /**
     * 查询页数。
     * @example `1`
     */
    "Page"?: number;
}
