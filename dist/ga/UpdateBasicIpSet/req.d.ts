export interface UpdateBasicIpSetRequest {
    /**
     * 基础型全球加速实例所属的地域ID，仅取值：**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 基础型全球加速实例的接入地域实例ID。
     * @example `ips-bp11r5jb8ogp122xl****`
     */
    "IpSetId": string;
    /**
     * 基础型全球加速实例的接入地域带宽。单位：Mbps。、
     * 加速地域支持分配的最小带宽为 2Mbps。
     * @example `2`
     */
    "Bandwidth": number;
}
