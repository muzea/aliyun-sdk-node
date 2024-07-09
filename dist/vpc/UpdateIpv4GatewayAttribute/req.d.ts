export interface UpdateIpv4GatewayAttributeRequest {
    /**
     * 要修改名称或描述信息的IPv4网关的实例ID。
     * @example `ipv4gw-5tsnc6s4ogsedtp3k****`
     */
    "Ipv4GatewayId": string;
    /**
     * 要修改的IPv4网关实例的名称，即修改后的名称。
     * @example `newname`
     */
    "Ipv4GatewayName"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会修改IPv4网关的名称或描述信息。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接修改IPv4网关的名称或描述信息。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 要修改的IPv4网关实例的描述信息，即修改后的描述信息。
     * @example `new`
     */
    "Ipv4GatewayDescription"?: string;
    /**
     * 要修改名称或描述信息的IPv4网关实例所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `ap-southeast-6`
     */
    "RegionId": string;
}
