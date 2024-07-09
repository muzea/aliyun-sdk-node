export interface SetWildcardDomainPatternsRequest {
    /**
     * API分组 ID，系统生成，全局唯一
     * @example `0009db9c828549768a200320714b8930`
     */
    "GroupId": string;
    /**
     * 自定义域名
     * @example `*.prd.e-eir.com`
     */
    "DomainName": string;
    /**
     * 通配域名模式。
     * @example `[\"{svc}.prd.e-eir.com\"]`
     */
    "WildcardDomainPatterns"?: string;
}
