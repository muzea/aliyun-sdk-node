export interface UpdateIpSetRequest {
    /**
     * 全球加速实例所在的地域，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `7D2F7E4E-B958-439C-9821-56D6213A31EC`
     */
    "ClientToken"?: string;
    /**
     * 要修改的加速地域ID。
     * @example `ips-bp11r5jb8ogp122xl****`
     */
    "IpSetId": string;
    /**
     * 要修改的加速地域带宽。单位：Mbps。
     * 每个加速地域支持分配的最小带宽为2Mbps。
     * @example `3`
     */
    "Bandwidth": number;
}
