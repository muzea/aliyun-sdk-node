export interface ModifyDbProxyInstanceSslRequest {
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
     * 代理连接地址ID。可以通过接口DescribeDBProxyEndpoint查看。
     * @example `ta9um4****`
     */
    "DbProxyEndpointId": string;
    /**
     * 需要开启SSL加密的地址。
     * @example `test123456.rwlb.rds.aliyuncs.com`
     */
    "DbProxyConnectString": string;
    /**
     * 对SSL加密执行的操作，取值：
     * * 0：关闭SSL加密
     * * 1：开启SSL加密或修改SSL加密地址
     * * 2：更新证书有效期
     * >执行以上操作会重启实例，请谨慎操作。
     * @example `1`
     */
    "DbProxySslEnabled": string;
    /**
     * 预留参数，无需配置。
     * @example `normal`
     */
    "DBProxyEngineType"?: string;
}
