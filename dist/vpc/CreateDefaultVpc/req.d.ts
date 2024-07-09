export interface CreateDefaultVpcRequest {
    /**
     * 默认VPC所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 默认VPC的IPv6网段。
     * > 当**EnableIpv6**取值为**true**时，需要输入该参数。
     * @example `2408:XXXX:346:b600::/56`
     */
    "Ipv6CidrBlock"?: string;
    /**
     * 是否开启IPv6网段。取值：
     * - **false**（默认值）：不开启。
     * - **true**：开启。
     * @example `false`
     */
    "EnableIpv6"?: boolean;
    /**
     * 资源组ID。
     * @example `rg-acfmystnjq4****`
     */
    "ResourceGroupId"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
}
