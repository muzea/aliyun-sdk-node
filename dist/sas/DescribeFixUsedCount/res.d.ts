export interface DescribeFixUsedCountResponse {
    /**
     * 全球（不含中国）区域已使用漏洞修复次数。
     * @example `5`
     */
    UsedCountSg: number;
    /**
     * 中国区域已使用漏洞修复次数。
     * @example `5`
     */
    UsedCountCn: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `CB1CE824-7F80-546D-8AF8-4A5209F9B698`
     */
    RequestId: string;
    /**
     * 已使用漏洞修复次数。
     * @example `10`
     */
    UsedCount: number;
}
