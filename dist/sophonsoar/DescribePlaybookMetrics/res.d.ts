export interface DescribePlaybookMetricsResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `567D3D0B-2153-5860-BF9A-F9DEED55FB73`
     */
    RequestId: string;
    /**
     * 剧本的信息详情。
     */
    Metrics: {
        /**
         * 剧本的名称。
         * @example `demo name`
         */
        DisplayName: string;
        /**
         * 剧本的UUID。
         * @example `0fbc9bdb-9ae3-4ef4-a709-xxxxx`
         */
        PlaybookUuid: string;
        /**
         * 剧本的类型，取值：
         * - **preset**：预定义剧本。
         * - **user**：自定义剧本。
         * @example `user`
         */
        OwnType: string;
        /**
         * 剧本的启用状态，取值：
         * - **1**：表示剧本已启用。
         * - **0**：表示剧本未启用
         * @example `1`
         */
        Active: number;
        /**
         * 剧本的最后执行时间，格式：13位的时间戳。
         * @example `1683526277415`
         */
        LastRuntime: number;
        /**
         * 剧本创建时间，格式：13位的时间戳。
         * @example `1655277397000`
         */
        GmtCreate: number;
        /**
         * 剧本历史版本个数。
         * @example `10`
         */
        HistoryMd5: number;
        /**
         * 剧本任务执行成功数。
         * @example `100`
         */
        SuccNum: number;
        /**
         * 剧本任务执行失败数。
         * @example `10`
         */
        FailNum: number;
        /**
         * 剧本的描述信息。
         * @example `This is a playbook for waf processing`
         */
        Description: string;
    };
}
