export interface DescribeActionEventPolicyRequest {
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源组ID。可调用DescribeDBInstanceAttribute获取。
     * @example `rg-acfmy*****`
     */
    "ResourceGroupId"?: string;
}
