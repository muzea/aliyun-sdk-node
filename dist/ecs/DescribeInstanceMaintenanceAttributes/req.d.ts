export interface DescribeInstanceMaintenanceAttributesRequest {
    /**
     * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 维护属性列表的页码。
     * 起始值：1
     * 默认值：1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 单页返回的条数。取值范围：1~100
     * 默认值：10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 实例ID列表。可输入最多100个实例ID。
     * @example `i-bp67acfmxazb4p****`
     */
    "InstanceId"?: string[];
}
