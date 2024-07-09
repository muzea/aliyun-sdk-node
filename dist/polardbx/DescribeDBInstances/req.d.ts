export interface DescribeDBInstancesRequest {
    /**
     * 实例所属地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 分页下标：从1开始。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 页面大小，取值如下：
     * - 30
     * - 50
     * - 100
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 资源组ID。
     * @example `rg-acfmyst47******`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表。
     * @example `[{\"TagKey\":\"test\",\"TagValue\":\"test-value\"}]`
     */
    "Tags"?: string;
    /**
     * 实例ID。
     * @example `dinga93c84f4d***`
     */
    "InstanceId"?: string;
    /**
     * 实例系列，取值如下：
     * - **enterprise**：企业版
     * - **standard**：标准版
     * @example `enterprise`
     */
    "Series"?: string;
    /**
     * 是否必须有日志引擎。
     * @example `true`
     */
    "MustHasCdc"?: boolean;
}
