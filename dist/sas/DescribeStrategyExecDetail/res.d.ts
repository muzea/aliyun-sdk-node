export interface DescribeStrategyExecDetailResponse {
    /**
     * 状态为**执行中**的基线检查任务的个数。
     * @example `0`
     */
    InProcessCount: number;
    /**
     * 基线检查执行结束时间。
     * @example `2021-12-05 00:12:46`
     */
    EndTime: string;
    /**
     * 基线检查执行开始时间。
     * @example `2021-12-05 00:12:16`
     */
    StartTime: string;
    /**
     * 基线检查策略执行的进度。
     * @example `100%`
     */
    Percent: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `01611D72-1E33-53F5-A9A5-C81B5561970F`
     */
    RequestId: string;
    /**
     * 基线检查未通过的风险项数量。
     * @example `94`
     */
    FailCount: number;
    /**
     * 基线检查执行类型。取值：
     * - **Schedule**：周期性自动检查
     * - **Manual**：即时手动检查
     * @example `Manual`
     */
    Source: string;
    /**
     * 基线检查状态为**已通过**的风险项数量。
     * @example `81`
     */
    SuccessCount: number;
    /**
     * 检测出基线风险项的服务器列表。
     */
    FailedEcsList: {
        /**
         * 执行基线检查的服务器实例IP地址。
         * @example `115.28.XX.XX`
         */
        IP: string;
        /**
         * 公网IP地址。
         * @example `115.28.XX.XX`
         */
        InternetIp: string;
        /**
         *  私网IP地址。
         * @example `172.31.XX.XX`
         */
        IntranetIp: string;
        /**
         * 基线检查未通过的原因。
         * @example `Detect timeout`
         */
        Reason: string;
        /**
         * 实例名称。
         * @example `worker-k8s-for-cs-cf5741fb95c3a45d0864f0e4544dc****`
         */
        InstanceName: string;
    }[];
}
