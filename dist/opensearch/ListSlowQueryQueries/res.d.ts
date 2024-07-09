export interface ListSlowQueryQueriesResponse {
    /**
     * 请求ID
     * @example `EB250CA0-ACFD-C5DE-17CD-01445BFE8AE5`
     */
    requestId: string;
    /**
     * 返回结果
     */
    result: {
        /**
         * 优化建议ID
         * @example `0`
         */
        index: number;
        /**
         * 优化建议信息
         * @example `no data`
         */
        appQuery: string;
        /**
         * 开始时间戳
         * @example `1589986800`
         */
        start: number;
        /**
         * 结束时间戳
         * @example `1589990340`
         */
        end: number;
    };
}
