export interface SearchTracesResponse {
    /**
     * 请求ID
     * @example `4C518054-852F-4023-ABC1-4AF95FF7****`
     */
    RequestId: string;
    /**
     * 返回的调用链路详细信息
     */
    TraceInfos: {
        /**
         * 埋点的接口名称
         * @example `get***`
         */
        OperationName: string;
        /**
         * 应用所在机器的IP地址
         * @example `172.20.**.**`
         */
        ServiceIp: string;
        /**
         * 调用链路耗时（毫秒）
         * @example `6`
         */
        Duration: number;
        /**
         * 时间戳
         * @example `1595174436993`
         */
        Timestamp: number;
        /**
         * 应用名称
         * @example `arms-k8s-demo-subcomponent`
         */
        ServiceName: string;
        /**
         * 调用链路ID
         * @example `ac1400a115951744369937024d****`
         */
        TraceID: string;
    }[];
}
