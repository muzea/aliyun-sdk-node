export interface ListTransitRouterCidrRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId不一样。
     * @example `123e4567-e89b-12d3-a456-426****`
     */
    "ClientToken"?: string;
    /**
     * 转发路由器实例ID。
     * @example `tr-p0w3x8c9em72a40nw****`
     */
    "TransitRouterId": string;
    /**
     * 转发路由器地址段ID。
     * @example `cidr-0zv0q9crqpntzz****`
     */
    "TransitRouterCidrId"?: string;
    /**
     * 转发路由器实例所属的地域ID。
     * 您可以通过调用[DescribeChildInstanceRegions](~~132080~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会查询转发路由器已添加的地址段。检查项包括是否填写了必需参数、请求格式、业务限制等。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后直接查询转发路由器下已添加的地址段。
     * @example `false`
     */
    "DryRun"?: boolean;
}
