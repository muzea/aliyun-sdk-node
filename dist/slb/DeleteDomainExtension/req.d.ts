export interface DeleteDomainExtensionRequest {
    /**
     * 负载均衡实例的所属地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 要删除的扩展域名ID。
     * @example `de-bp1rp7ta1****`
     */
    "DomainExtensionId": string;
}
