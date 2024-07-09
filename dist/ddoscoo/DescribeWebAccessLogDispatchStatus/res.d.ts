export interface DescribeWebAccessLogDispatchStatusResponse {
    /**
     * 查询到的域名的总数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 本次请求的ID。
     * @example `CF33B4C3-196E-4015-AADD-5CAD00057B80`
     */
    RequestId: string;
    /**
     * 域名的全量日志开关状态。
     */
    SlsConfigStatus: {
        /**
         * 域名。
         * @example `www.aliyundoc.com`
         */
        Domain: string;
        /**
         * 是否开启全量日志采集。取值：
         * - **true**：表示已开启。
         * - **false**：表示未开启。
         * @example `true`
         */
        Enable: boolean;
    }[];
}
