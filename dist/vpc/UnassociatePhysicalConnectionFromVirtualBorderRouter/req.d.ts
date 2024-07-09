export interface UnassociatePhysicalConnectionFromVirtualBorderRouterRequest {
    /**
     * 物理专线所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 要与物理专线解绑的VBR的实例ID。
     * @example `vbr-bp16ksp61j7e0tkn*****`
     */
    "VbrId": string;
    /**
     * 物理专线ID。
     * @example `pc-bp1qrb3044eqixog****`
     */
    "PhysicalConnectionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
}
