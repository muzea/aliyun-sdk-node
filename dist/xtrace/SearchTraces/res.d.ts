export interface SearchTracesResponse {
    /**
     * 请求ID。
     * @example `1E2B6A4C-6B83-4062-8B6F-AEEC1F******`
     */
    RequestId: string;
    /**
     * 返回数据的位置信息。
     */
    PageBean: {
        /**
         * 每页显示的数据条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 总条数。
         * @example `500`
         */
        TotalCount: number;
        TraceInfos: {
            /**
             * 返回的调用链信息。
             */
            TraceInfo: {
                /**
                 * Span名称。
                 * @example `/api`
                 */
                OperationName: string;
                /**
                 * Span所在的主机IP地址或主机名称。
                 * @example `192.163.XXX.XXX`
                 */
                ServiceIp: string;
                /**
                 * 耗时，单位为秒（s）。
                 * @example `2`
                 */
                Duration: number;
                /**
                 * Span产生时间，单位为毫秒（ms）。
                 * @example `1714306014000`
                 */
                Timestamp: number;
                /**
                 * 微服务名称，又称为应用名称。
                 * @example `service1`
                 */
                ServiceName: string;
                /**
                 * 调用链ID。
                 * @example `1c6881aab841******`
                 */
                TraceID: string;
                /**
                 * 标签信息。
                 * @example `{"env":"dev"}`
                 */
                TagMap: any;
            }[];
        };
    };
}
