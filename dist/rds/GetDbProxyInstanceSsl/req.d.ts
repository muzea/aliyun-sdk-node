export interface GetDbProxyInstanceSslRequest {
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-t4n3a****`
     */
    "DbInstanceId": string;
    /**
     * 预留参数，无需配置。
     * @example `normal`
     */
    "DBProxyEngineType"?: string;
}
