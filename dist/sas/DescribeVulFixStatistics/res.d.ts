export interface DescribeVulFixStatisticsResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `CE500770-42D3-442E-9DDD-156E0F9F3B45`
     */
    RequestId: string;
    /**
     * 全量修复统计信息。
     */
    FixTotal: {
        /**
         * 修复中的漏洞数量。
         * @example `22`
         */
        FixingNum: number;
        /**
         * 今天已修复的漏洞数量。
         * @example `15`
         */
        FixedTodayNum: number;
        /**
         * 已完成修复的漏洞总数。
         * @example `47`
         */
        FixedTotalNum: number;
        /**
         * 待修复漏洞数。
         * @example `62`
         */
        NeedFixNum: number;
    };
    /**
     * 漏洞修复统计信息列表。
     */
    FixStat: {
        /**
         * 修复中的漏洞数量。
         * @example `17`
         */
        FixingNum: number;
        /**
         * 漏洞类型。取值：
         * - **cve**：Linux漏洞
         * - **sys**：Windows漏洞
         * - **cms**：WebCMS漏洞
         * - **app**：应用漏洞
         * - **emg**：应急漏洞
         * @example `cve`
         */
        Type: string;
        /**
         * 今天已修复的漏洞数量。
         * @example `10`
         */
        FixedTodayNum: number;
        /**
         * 已完成修复的漏洞总数。
         * @example `22`
         */
        FixedTotalNum: number;
        /**
         * 待修复漏洞数。
         * @example `8`
         */
        NeedFixNum: number;
    }[];
}
