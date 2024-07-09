export interface DescribeVSwitchAttributesRequest {
    /**
     * 要查询的交换机ID。
     * @example `vsw-25naue4g****`
     */
    "VSwitchId": string;
    /**
     * 路由表所属的VPC的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会查询交换机的配置信息。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接查询交换机的配置信息。
     * @example `false`
     */
    "DryRun"?: boolean;
}
