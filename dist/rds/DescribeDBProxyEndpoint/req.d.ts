export interface DescribeDBProxyEndpointRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-bp1ja4f56s7us****`
     */
    "DBInstanceId": string;
    /**
     * 代理终端名称。可调用DescribeDBProxy接口查询。
     * @example `keaxncrjluwu0gue****`
     */
    "DBProxyEndpointId"?: string;
    /**
     * 代理连接地址。可调用DescribeDBProxy接口查询。
     * @example `testproxy****.rwlb.rds.aliyuncs.com`
     */
    "DBProxyConnectString"?: string;
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 预留参数，无需配置。
     * @example `normal`
     */
    "DBProxyEngineType"?: string;
}
