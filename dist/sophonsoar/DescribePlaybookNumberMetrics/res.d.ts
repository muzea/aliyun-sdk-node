export interface DescribePlaybookNumberMetricsResponse {
    /**
     * 统计信息。
     */
    Metrics: {
        /**
         * 剧本总数。
         * @example `100`
         */
        TotalNum: number;
        /**
         * 启用剧本数。
         * @example `50`
         */
        StartUpNum: number;
    };
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `D4CC979E-3D5B-5A6A-BC87-C93C9E861C7B`
     */
    RequestId: string;
}
