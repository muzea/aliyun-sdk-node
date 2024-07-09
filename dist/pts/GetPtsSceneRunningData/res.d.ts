export interface GetPtsSceneRunningDataResponse {
    /**
     * 场景状态。缺省值为7。
     * @example `6`
     */
    Status: number;
    /**
     * 总请求数。
     * @example `8900`
     */
    TotalRequestCount: number;
    /**
     * 是否生成报告。
     * @example `false`
     */
    HasReport: boolean;
    /**
     * 并发限制。
     * @example `20`
     */
    ConcurrencyLimit: number;
    /**
     * 错误提示消息。
     * @example `no message`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `DC4E3177-6745-4925-B423-4E89VV34221A`
     */
    RequestId: string;
    /**
     * 压测开始时间，时间戳ms。
     * @example `1651895518339`
     */
    BeginTime: number;
    /**
     * 施压机位置信息。
     */
    AgentLocation: {
        /**
         * 地区。
         * @example `华东地区`
         */
        Region: string;
        /**
         * 提供商。
         * @example `阿里巴巴`
         */
        Isp: string;
        /**
         * 施压机台数。
         * @example `10`
         */
        Count: number;
        /**
         * 省份。
         * @example `山东省`
         */
        Province: string;
    }[];
    /**
     * 90分位RT。
     * @example `45`
     */
    Seg90Rt: number;
    /**
     * 响应体大小。
     * @example `8kb`
     */
    ResponseBps: string;
    /**
     * 所有机器数。
     * @example `10`
     */
    TotalAgents: number;
    /**
     * 系统状态码。
     * @example `4001`
     */
    Code: string;
    /**
     * 是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 消耗VUM。
     * @example `100`
     */
    Vum: number;
    /**
     * 平均RT。
     * @example `45`
     */
    AverageRt: number;
    /**
     * API的压测信息。
     */
    ChainMonitorDataList: {
        /**
         * 时间点。
         * @example `1278908899`
         */
        TimePoint: number;
        /**
         * API 的ID。
         * @example `ANBDC8B`
         */
        ApiId: string;
        /**
         * 最小RT。
         * @example `16`
         */
        MinRt: number;
        /**
         * 请求成功的RPS。
         * @example `78`
         */
        Qps2XX: number;
        /**
         * 最大RT。
         * @example `56`
         */
        MaxRt: number;
        /**
         * 配置RPS。
         * @example `78`
         */
        ConfigQps: number;
        /**
         * 请求失败总数。
         * @example `456`
         */
        FailedCount: number;
        /**
         * 请求失败的RPS。
         * @example `15`
         */
        FailedQps: number;
        /**
         * 平均RT。
         * @example `46`
         */
        AverageRt: number;
        /**
         * 检查点结果。
         */
        CheckPointResult: {
            /**
             * 业务成功数。
             * @example `908`
             */
            SucceedBusinessCount: number;
            /**
             * 业务成功RPS。
             * @example `89`
             */
            SucceedBusinessQps: number;
            /**
             * 业务失败数。
             * @example `1000`
             */
            FailedBusinessCount: number;
            /**
             * 业务失败RPS。
             * @example `78`
             */
            FailedBusinessQps: number;
        };
        /**
         * 请求成功数。
         * @example `7890`
         */
        Count2XX: number;
        /**
         * 实际RPS。
         * @example `23`
         */
        RealQps: number;
        /**
         * API的名称。
         * @example `第一个API`
         */
        ApiName: string;
        /**
         * API的ID。
         * @example `78509`
         */
        NodeId: number;
        /**
         * 并发。
         * @example `100`
         */
        Concurrency: number;
    }[];
    /**
     * 请求体大小。
     * @example `89kb`
     */
    RequestBps: string;
    /**
     * 业务失败数据。
     * @example `78`
     */
    FailedBusinessCount: number;
    /**
     * 并发。
     * @example `10`
     */
    Concurrency: number;
    /**
     * HTTP状态码。
     * @example `400`
     */
    HttpStatusCode: number;
    /**
     * 请求失败数。
     * @example `90`
     */
    FailedRequestCount: number;
    /**
     * 配置TPS限制。
     * @example `80`
     */
    TpsLimit: number;
    /**
     * 健康引擎数。
     * @example `10`
     */
    AliveAgents: number;
    /**
     * 总QPS。
     * @example `10`
     */
    TotalRealQps: number;
}
