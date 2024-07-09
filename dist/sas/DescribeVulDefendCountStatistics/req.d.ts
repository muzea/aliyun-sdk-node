export interface DescribeVulDefendCountStatisticsRequest {
    /**
     * 要查询的漏洞类型。取值：
     * - app：应用漏洞
     * - emg：应急漏洞
     * @example `emg`
     */
    "VulType"?: string;
}
