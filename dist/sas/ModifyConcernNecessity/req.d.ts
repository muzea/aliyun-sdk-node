export interface ModifyConcernNecessityRequest {
    /**
     * 漏洞修复必要性列表。
     * - asap：高
     * - later：中
     * - nntf：低
     * @example `asap,nntf`
     */
    "ConcernNecessity"?: string;
}
