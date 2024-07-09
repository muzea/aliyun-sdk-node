export interface GetCreateBEClusterInquiryRequest {
    /**
     * 商品编码。
     * @example `selectdb_go_public_cn`
     */
    "CommodityCode"?: string;
    /**
     * 计费类型。
     * @example `POSTPAY`
     */
    "ChargeType": string;
    /**
     * 计费周期。
     * @example `Hour`
     */
    "PricingCycle": string;
    /**
     * 数量。
     * @example `1`
     */
    "Quantity": number;
    /**
     * 预留缓存空间。
     * @example `200`
     */
    "PreCacheSize"?: number;
    /**
     * 预留计算资源。
     * @example `4`
     */
    "PreComputeSize"?: number;
    /**
     * 弹性缓存空间。
     * @example `200`
     */
    "CacheSize"?: number;
    /**
     * 弹性计算资源。
     * @example `4`
     */
    "ComputeSize"?: number;
    /**
     * 实例ID。
     * @example `selectdb-cn-xxx`
     */
    "DbInstanceId": string;
    /**
     * 区域ID。
     * @example `cn-beijing`
     */
    "RegionId": string;
}
