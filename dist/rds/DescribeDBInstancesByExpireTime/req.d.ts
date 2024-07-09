export interface DescribeDBInstancesByExpireTimeRequest {
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 废弃参数，无需配置。
     * @example `API`
     */
    "proxyId"?: string;
    /**
     * 实例剩余可用天数。取值：**0~180**。
     * @example `180`
     */
    "ExpirePeriod"?: number;
    /**
     * 实例的过期状态，取值：
     * - **True**：已过期
     * - **False**：未过期
     * @example `True`
     */
    "Expired"?: boolean;
    /**
     * 每页记录数，取值：**1~100**。
     * 默认值：**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值：大于**0**且不超过Integer类型的最大值。
     * 默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 查询绑定有该标签的实例，包括TagKey和TagValue。单次最多支持传入5组值，格式：`{"key1":"value1","key2":"value2"...}`。
     * @example `{"key1":"value1"}	`
     */
    "Tags"?: string;
    /**
     * 资源组ID。可调用DescribeDBInstanceAttribute获取。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
