export interface DescribeServiceMeshLogsResponse {
    /**
     * 请求ID
     * @example `31d3a0f0-07ed-4f6e-9004-1804498c****`
     */
    RequestId: string;
    /**
     * 日志信息列表
     */
    Logs: {
        /**
         * 创建时间
         * @example `2021-11-19T15:21:53+08:00`
         */
        CreationTime: string;
        /**
         * ASM实例ID
         * @example `ca04bc38979214bf2882be79d39b4****`
         */
        ServiceMeshId: string;
        /**
         * 日志文本
         * @example `[RequestID: 31d3a0f0-07ed-4f6e-9004-1804498c****, UID-110982038403****] c096d641835af4658827a4c66c234**** | Start to add cluster c186a6d9641a24098b5499d4d8313****`
         */
        Log: string;
    }[];
}
