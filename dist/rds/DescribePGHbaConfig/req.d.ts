export interface DescribePGHbaConfigRequest {
    /**
     * 预留参数，无需配置。
     * @example `1`
     */
    "ClientToken"?: string;
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `pgm-bp1lymyn1v3i****`
     */
    "DBInstanceId": string;
    /**
     * 资源组ID。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
