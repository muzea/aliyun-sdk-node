export interface SearchTracesByPageResponse {
    /**
     * 请求ID。
     * @example `4C518054-852F-4023-ABC1-4AF95FF7****`
     */
    RequestId: string;
    /**
     * 返回结构体。
     */
    PageBean: {
        /**
         * 返回结果的页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 返回结果的每页项目数量。
         * @example `5`
         */
        PageSize: number;
        /**
         * 返回结果的总项目数量。
         * @example `1601`
         */
        Total: number;
        /**
         * 返回的调用链路详细信息。
         */
        TraceInfos: {
            /**
             * 埋点的接口名称。
             * @example `/demo/queryException/12`
             */
            OperationName: string;
            /**
             * 应用所在机器的IP地址。
             * @example `172.20.XX.XX`
             */
            ServiceIp: string;
            /**
             * 调用链路耗时，单位为毫秒。
             * @example `679`
             */
            Duration: number;
            /**
             * 时间戳。
             * @example `1595174436994`
             */
            Timestamp: number;
            /**
             * 应用名称。
             * @example `arms-k8s-demo-subcomponent`
             */
            ServiceName: string;
            /**
             * 调用链路ID。
             * @example `ac1400a115951744369947025d****`
             */
            TraceID: string;
        }[];
    };
}
