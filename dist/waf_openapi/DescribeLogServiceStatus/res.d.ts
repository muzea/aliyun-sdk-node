export interface DescribeLogServiceStatusResponse {
    /**
     * 返回结果的总数。
     * @example `63`
     */
    TotalCount: number;
    /**
     * 本次请求的ID。
     * @example `D7861F61-5B61-46CE-A47C-6B19****5EB0`
     */
    RequestId: string;
    /**
     * 域名的日志采集状态（是否开启了日志采集）。
     */
    DomainStatus: {
        /**
         * 域名名称。
         * @example `www.aliyun.com`
         */
        Domain: string;
        /**
         * 该域名是否开启了日志采集。取值：
         * - **1**：表示已开启。
         * - **0**：表示未开启。
         * @example `1`
         */
        SlsLogActive: number;
    }[];
}
