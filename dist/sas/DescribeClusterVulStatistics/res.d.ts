export interface DescribeClusterVulStatisticsResponse {
    /**
     * 本次请求的ID。
     * @example `0B48AB3C-84FC-424D-A01D-B9270EF46038`
     */
    RequestId: string;
    /**
     * 漏洞统计信息。
     */
    VulStat: {
        /**
         * 高危漏洞数量，即紧急程度为高的漏洞数量。
         * @example `13`
         */
        AsapCount: string;
        /**
         * 中危漏洞数量，即紧急程度为中的漏洞数量。
         * @example `21`
         */
        LaterCount: string;
        /**
         * 低危漏洞数量，即紧急程度为低的漏洞数量。
         * @example `0`
         */
        NntfCount: string;
    };
}
