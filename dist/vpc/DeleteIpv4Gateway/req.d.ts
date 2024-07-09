export interface DeleteIpv4GatewayRequest {
    /**
     * 要删除的IPv4网关的实例ID。
     * @example `ipv4gw-5tsnc6s4ogsedtp3k****`
     */
    "Ipv4GatewayId": string;
    /**
     * 选择删除IPv4网关后，VPC的公网模式，取值：
     * - **private**：默认值，删除IPv4网关后，VPC将变成纯私网VPC，不具备公网访问能力。
     * - **public**：删除IPv4网关后，VPC公网访问不再受IPv4网关集中控制，公网IP绑定实例后缺省可以直接访问公网。
     * @example `public`
     */
    "InternetMode"?: string;
    /**
     * 要删除的IPv4网关所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `ap-southeast-6`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会删除IPv4网关。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接删除IPv4网关。
     * @example `false`
     */
    "DryRun"?: boolean;
}
