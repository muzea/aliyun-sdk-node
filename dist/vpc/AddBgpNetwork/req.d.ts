export interface AddBgpNetworkRequest {
    /**
     * VBR组所在的地域。
     *  您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 需要和本地IDC互连的VPC或交换机的网段。
     * @example `10.10.XX.XX/32`
     */
    "DstCidrBlock": string;
    /**
     * VPC的ID。
     * @example `vpc-bp1qpo0kug3a2*****`
     */
    "VpcId"?: string;
    /**
     * 路由器接口关联的路由器ID。
     * @example `vrt-2zeo3xzyf38r4u******`
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
