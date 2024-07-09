export interface DeleteIpSetRequest {
    /**
     * 全球加速实例所在的地域ID，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `DD61839A-5CC5-404B-8C6E-56066F0C432D`
     */
    "ClientToken"?: string;
    /**
     * 全球加速实例ID。
     * @example `ga-bp1yeeq8yfoyszmqy****`
     */
    "AcceleratorId"?: string;
    /**
     * 要删除的加速地域实例ID。
     * 您可以通过调用[ListIpSets](~~2253273~~)查询指定全球加速实例下包含的加速地域实例ID。
     * @example `ips-bp11r5jb8ogp122xl****`
     */
    "IpSetId": string;
}
