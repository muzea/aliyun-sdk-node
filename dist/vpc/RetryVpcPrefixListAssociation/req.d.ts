export interface RetryVpcPrefixListAssociationRequest {
    /**
     * 要重新下发的前缀列表的实例ID。
     * @example `pl-0b7hwu67****`
     */
    "PrefixListId": string;
    /**
     * 关联前缀列表实例的资源类型。取值：
     * - **vpcRouteTable**：VPC路由表。
     * - **trRouteTable**：转发路由器的路由表。
     * @example `vpcRouteTable`
     */
    "ResourceType": string;
    /**
     * 关联的资源的实例ID。
     * @example `vtb-bp1drpcfz9srr393h****`
     */
    "ResourceId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会关联前缀列表。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接关联前缀列表。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 要重新下发的前缀列表实例所在地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
