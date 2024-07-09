export interface DescribeResolverAvailableZonesRequest {
    /**
     * 语言
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 地域ID
     * @example `cn-zhangjiakou`
     */
    "ResolverRegionId": string;
    /**
     * 可用区ID
     * @example `cn-zhangjiakou-a`
     */
    "AzId"?: string;
}
