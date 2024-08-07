export interface DeleteVpcRequest {
    /**
     * 要删除的VPC ID。
     * @example `vpc-bp1m7v25emi1h5mtc****`
     */
    "VpcId": string;
    /**
     * 要删除的VPC所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 是否强制删除VPC。取值：
     * - **true**：强制删除。
     * - **false**（默认值）：不强制删除。
     * 当VPC下仅存在以下资源时可强制删除VPC：
     * - 该VPC下仅存在IPv4网关及指向IPv4网关的路由。
     * - 该VPC下仅存在IPv6网关及指向IPv6网关的路由。
     * @example `false`
     */
    "ForceDelete"?: boolean;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会删除专有网络VPC。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行删除。
     * @example `false`
     */
    "DryRun"?: boolean;
}
