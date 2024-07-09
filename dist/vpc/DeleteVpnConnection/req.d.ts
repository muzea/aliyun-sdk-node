export interface DeleteVpnConnectionRequest {
    /**
     * IPsec连接所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
     */
    "ClientToken"?: string;
    /**
     *  IPsec连接的ID。
     * @example `vco-bp1bbi27hojx80nck****`
     */
    "VpnConnectionId": string;
}
