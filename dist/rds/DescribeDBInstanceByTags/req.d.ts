export interface DescribeDBInstanceByTagsRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 废弃参数。
     * @example `None`
     */
    "proxyId"?: string;
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6w****`
     */
    "DBInstanceId"?: string;
    /**
     * 每页记录数，取值：**30~100**。默认值：**30**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 页码，取值：大于0且不超过Integer的最大值。
     * 默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
}
