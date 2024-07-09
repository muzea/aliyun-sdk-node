export interface DescribeLocalAvailableRecoveryTimeRequest {
    /**
     * 实例ID。
     * @example `rm-bp1f****`
     */
    "DBInstanceId": string;
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "Region"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfm****`
     */
    "ResourceGroupId"?: string;
}
