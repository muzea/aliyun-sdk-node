export interface DescribeInstanceAutoRenewalAttributeRequest {
    /**
     * 实例所属的地域ID。您可以通过调用[DescribeDBInstanceAttribute](~~62010~~)接口查询。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。
     * @example `dds-bp567b****`
     */
    "DBInstanceId"?: string;
    /**
     * 实例类型。取值：
     * - **replicate**（默认值）：单节点或副本集实例。
     * - **sharding**：分片集群实例。
     * @example `replicate`
     */
    "DBInstanceType"?: string;
    /**
     * 每页记录数。取值：**30**（默认值）、**50**或**100**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值为大于0且不超过Integer数据类型的最大值，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
}
