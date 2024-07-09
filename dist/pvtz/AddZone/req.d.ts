export interface AddZoneRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * zone名称。
     * @example `example.com`
     */
    "ZoneName"?: string;
    /**
     * - **ZONE**：当前Zone不进行递归解析
     * - **RECORD**：不完全劫持，进行递归解析代理
     * @example `ZONE`
     */
    "ProxyPattern"?: string;
    /**
     * 资源组ID。
     * @example ` rg-resourcegroupid1`
     */
    "ResourceGroupId"?: string;
    /**
     * 暂不对用户开放，无需传值。
     * @example `CLOUD_PRODUCT_ZONE`
     */
    "ZoneType"?: string;
    /**
     * 暂不对用户开放，无需传值。
     * @example `BLINK`
     */
    "ZoneTag"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。
     * @example `21079fa016944979537637959d09bc`
     */
    "ClientToken"?: string;
    /**
     * 内置权威位置区
     * - 普通区：NORMAL_ZONE
     * - 快速区：FAST_ZONE
     * @example `FAST_ZONE`
     */
    "DnsGroup"?: string;
}
