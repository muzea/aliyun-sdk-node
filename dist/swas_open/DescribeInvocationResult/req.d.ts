export interface DescribeInvocationResultRequest {
    /**
     * 轻量应用服务器实例ID。
     * @example `ace0706b2ac4454d984295a94213****`
     */
    "InstanceId": string;
    /**
     * 命令执行ID。您可以通过接口[DescribeInvocations](~~439368~~)查询InvokeId。
     * @example `t-bj02prjhw1n****`
     */
    "InvokeId": string;
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
