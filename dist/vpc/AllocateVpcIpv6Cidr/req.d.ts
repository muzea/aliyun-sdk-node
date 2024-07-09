export interface AllocateVpcIpv6CidrRequest {
    /**
     * VPC所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * VPC的IPv6地址段类型，取值：
     * - **BGP**（默认值）：阿里云BGP IPv6。
     * - **ChinaMobile**：中国移动（单线）。
     * - **ChinaUnicom**：中国联通（单线）。
     * - **ChinaTelecom**：中国电信（单线）。
     * > - 如果是开通了单线带宽白名单的用户，该字段可以设置为**ChinaTelecom**（中国电信）、**ChinaUnicom**（中国联通）和**ChinaMobile**（中国移动）。
     * - 每种类型的IPv6地址段只能预留一个，只有在分配给VPC后，才可以预留下一个。
     * @example `BGP`
     */
    "Ipv6Isp"?: string;
    /**
     * IPv6地址池的类型，取值如下：
     * - **aliyun**（默认值）：系统分配IPv6地址段。
     * - **custom**：用户自定义IPv6地址段。
     * @example `custom`
     */
    "AddressPoolType"?: string;
    /**
     * 需要预留的IPv6地址段。
     * @example `2408:XXXX:0:a600::/56`
     */
    "Ipv6CidrBlock"?: string;
}
