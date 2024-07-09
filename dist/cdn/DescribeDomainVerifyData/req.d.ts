export interface DescribeDomainVerifyDataRequest {
    /**
     * 加速域名，仅支持查询单个域名。
     * @example `www.yourdomain.com`
     */
    "DomainName": string;
    /**
     * 是否开启全球资源计划。
     * 支持：
     * - **on**（开启）
     * - **off**（不开启）
     * @example `off`
     */
    "GlobalResourcePlan"?: string;
}
