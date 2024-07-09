export interface UpdateVirtualBorderBandwidthRequest {
    /**
     * VBR所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * VBR实例ID。
     * @example `vbr-bp15zckdt37pq72****`
     */
    "VirtualBorderRouterId": string;
    /**
     * 修改后的VBR限速带宽，单位：Mbps。
     * @example `2`
     */
    "Bandwidth": number;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `02fb3da4-130e-11e9-8e44-0016****`
     */
    "ClientToken"?: string;
}
