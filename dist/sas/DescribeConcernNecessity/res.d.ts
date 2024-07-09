export interface DescribeConcernNecessityResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `ECC6B3E3-D496-512D-B46D-E6996A6B63EE`
     */
    RequestId: string;
    /**
     * 漏洞修复必要性列表。
     * - asap：高
     * - later：中
     * - nntf：低
     */
    ConcernNecessity: string[];
}
