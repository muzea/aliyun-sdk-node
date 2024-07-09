export interface DescribeDomainExtensionsRequest {
    /**
     * 负载均衡实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 负载均衡实例的ID。
     * @example `lb-bp1b6c08ex****`
     */
    "LoadBalancerId": string;
    /**
     * 负载均衡实例HTTPS监听的前端端口，取值：**1-65535**。
     * @example `443`
     */
    "ListenerPort": number;
    /**
     * 扩展域名ID。
     * @example `de-bp1rp7ta1****`
     */
    "DomainExtensionId"?: string;
}
