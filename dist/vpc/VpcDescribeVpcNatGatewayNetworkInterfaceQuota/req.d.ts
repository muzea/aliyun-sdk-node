export interface VpcDescribeVpcNatGatewayNetworkInterfaceQuotaRequest {
    /**
     * 资源所属的阿里云账号（主账号）ID。
     * @example `132193271328****`
     */
    "ResourceUid"?: number;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 要查询的VPC NAT网关的ID。
     * @example `ngw-bp1uewa15k4iy5770****`
     */
    "NatGatewayId"?: string;
    /**
     * 要查询的VPC NAT网关所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
