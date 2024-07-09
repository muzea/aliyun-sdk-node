export interface GetVulStatisticsResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `3FE272FA-7263-4554-A90F-A7857945A6D5`
     */
    RequestId: string;
    /**
     * 漏洞修复等级为中的漏洞数量。
     * @example `0`
     */
    VulLaterSum: number;
    /**
     * 漏洞修复等级为低的漏洞数量。
     * @example `0`
     */
    VulNntfSum: number;
    /**
     * 漏洞修复等级为高的漏洞数量。
     * @example `16`
     */
    VulAsapSum: number;
}
