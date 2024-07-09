export interface GetVirusScanLatestTaskStatisticResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `7532B7EE-7CE7-5F4D-BF04-B12447DDCAE1`
     */
    RequestId: string;
    /**
     * 自定义结果数据。
     */
    Data: {
        /**
         * 扫描任务的ID。
         * @example `fc98d58eb56f699d49bf7ebbd6d7****`
         */
        TaskId: string;
        /**
         * 扫描的时间戳，单位：毫秒。
         * @example `1681145862000`
         */
        ScanTime: number;
        /**
         * 扫描任务的状态。
         * **主任务取值：**
         * - **0**：任务待开始。
         * - **10**：扫描进行中。
         * - **100**：扫描完成。
         * **子任务取值：**
         * - **0**：扫描待开始。
         * - **20**：检测脚本下发。
         * - **50**：扫描在机器上执行。
         * - **100**：扫描结束。
         * @example `0`
         */
        Status: number;
        /**
         * 扫描出来的安全告警的数量。
         * @example `2`
         */
        SuspiciousCount: number;
        /**
         * 扫描出来有风险的机器数量。
         * @example `2`
         */
        SuspiciousMachine: number;
        /**
         * 未扫描出具有风险的机器数量。
         * @example `1`
         */
        SafeMachine: number;
        /**
         * 此次病毒扫描机器的数量。
         * @example `3`
         */
        ScanMachine: number;
        /**
         * 此次病毒扫描的扫描类型。取值：
         * - **system**：系统自动扫描。
         * - **user**：用户自定义扫描。
         * @example `system`
         */
        ScanType: string;
        /**
         * 用户自定义类型时，指定的需要扫描的文件路径。
         */
        ScanPath: string[];
        /**
         * 扫描任务进度的百分比。
         * @example `92`
         */
        Progress: string;
        /**
         * 服务器机器名称。
         * @example `testMahine1`
         */
        MachineName: string;
        /**
         * 完成扫描的机器数量。
         * @example `2`
         */
        CompleteMachine: number;
        /**
         * 未扫描结束和扫描失败的机器数量。
         * @example `1`
         */
        UnCompleteMachine: number;
        /**
         * 扫描出的告警的最高风险等级。取值：
         * - **high**：高危。
         * - **medium**：中危。
         * - **low**：低危。
         * @example `medium`
         */
        RiskLevel: string;
    };
}
