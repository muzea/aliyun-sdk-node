export interface RemoveUserFromVpcEndpointServiceRequest {
    /**
     * 要移除服务白名单的地域ID。您可以通过调用[DescribeRegions](~~120468~~)接口获取地域ID。
     * @example `eu-west-1`
     */
    "RegionId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe637760`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会移除服务白名单。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回2xx HTTP状态码并直接移除服务白名单。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 要移除的服务白名单中的账号ID。
     * @example `12345678`
     */
    "UserId"?: number;
    /**
     * 终端节点服务的ID。
     * @example `epsrv-hp3vpx8yqxblby3i****`
     */
    "ServiceId": string;
    /**
     * ARN格式的用户白名单。
     * @example `acs:ram:*:<account-id>:*`
     */
    "UserARN"?: string;
}
