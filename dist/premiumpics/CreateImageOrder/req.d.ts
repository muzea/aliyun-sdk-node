export interface CreateImageOrderRequest {
    /**
     * 1更新时间，2创建时间
     * @example `SINGLE`
     */
    "OrderType"?: string;
    /**
     * type
     * @example `A`
     */
    "Type": string;
    /**
     * 商品id
     * @example `0da9332a7e46bf3a3648322cc4cefe55`
     */
    "GoodsId": string;
    /**
     * 图片规格
     * @example `专业版`
     */
    "SpecificationName"?: string;
    /**
     * 是否自动支付预付费实例的账单：-true：是-false：否
     * @example `true`
     */
    "AutoRenew"?: string;
    /**
     * 实例ID。
     * @example `waf-cn-2r427peet48`
     */
    "InstanceId"?: string;
    /**
     * 购买的渠道类型
     * @example `1`
     */
    "BuyerType": string;
    /**
     * 联系人名称。
     * @example `韩媛媛`
     */
    "ContactName": string;
    /**
     * 联系人电话号码
     * @example `123****6789`
     */
    "ContactNumber": string;
    /**
     * 会议码
     * @example `6`
     */
    "Channel"?: string;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ascii字符。
     * @example `74aed3df801b1abeea70604eae4c777a`
     */
    "Token"?: string;
}
