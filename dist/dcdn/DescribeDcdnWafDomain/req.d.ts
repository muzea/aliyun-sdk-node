export interface DescribeDcdnWafDomainRequest {
    /**
     * WAF管控区域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 加速域名。若参数为空，则返回所有加速域名。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 资源组。若参数为空，代表默认资源组。
     * @example `/`
     */
    "ResourceGroupId"?: string;
}
