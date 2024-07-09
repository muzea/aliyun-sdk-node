export interface DescribeGlobalDistributeCacheRequest {
    /**
     * 分布式实例ID。
     * @example `gr-bp14rkqrhac****`
     */
    "GlobalInstanceId"?: string;
    /**
     * 页码，取值为大于**0**且不超过Integer数据类型的最大值，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 每页记录数。
     * @example `20`
     */
    "PageSize"?: string;
    /**
     * 子实例ID。
     * @example `gr-bp1zcjlobkyrq****`
     */
    "SubInstanceId"?: string;
}
