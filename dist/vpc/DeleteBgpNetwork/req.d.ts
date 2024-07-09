export interface DeleteBgpNetworkRequest {
    /**
     * BGP组所在的地域。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 需要和IDC互联的VPC或交换机的网段。
     * @example `10.110.192.12/32`
     */
    "DstCidrBlock": string;
    /**
     * 边界路由器ID。
     * @example `vrt-bp1lhl0taikrteen8****`
     */
    "RouterId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
}
