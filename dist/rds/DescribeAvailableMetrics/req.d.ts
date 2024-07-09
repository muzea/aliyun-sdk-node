export interface DescribeAvailableMetricsRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `pgm-bp1s1j103lo6****`
     */
    "DBInstanceName": string;
    /**
     * 资源组ID。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
