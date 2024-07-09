export interface PublicSyncAndCreateImageScanTaskResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `F9353221-40F4-5F98-B73C-2803DC804033`
     */
    RequestId: string;
    /**
     * 调用成功时，返回的数据。
     */
    Data: {
        /**
         * 扫描任务的ID。
         * @example `a410bb3e68c217a3368bc0238c66886d`
         */
        TaskId: string;
        /**
         * 扫描镜像的总数量。
         * @example `5`
         */
        TotalCount: number;
        /**
         * 已完成扫描的镜像的数量。
         * @example `5`
         */
        FinishCount: number;
        /**
         * 采集镜像信息的时间戳，单位为毫秒。
         * @example `1644286364150`
         */
        CollectTime: number;
        /**
         * 扫描任务开始运行的时间戳，单位为毫秒。
         * @example `1644286364150`
         */
        ExecTime: number;
        /**
         * 扫描任务的状态。取值：
         * - **INIT**：初始化中
         * - **PRE_ANALYZER**：预分析中
         * - **SUCCESS**：执行成功
         * - **FAIL**：执行失败
         * @example `SUCCESS`
         */
        Status: string;
        /**
         * 扫描任务的进度。
         * @example `100`
         */
        Progress: number;
        /**
         * 扫描任务的执行结果。取值：
         * - **SUCCESS**：扫描任务执行成功
         * - **TASK\_NOT\_SUPPORT_REGION**：镜像在不支持扫描的地域
         * @example `SUCCESS`
         */
        Result: string;
        /**
         * 是否可以继续创建扫描任务。取值：
         * - **true**：可以继续创建扫描任务。
         * - **false**：无法继续创建扫描任务。
         * > 默认支持同时存在10个扫描任务，超过10个扫描任务时，使用本接口创建扫描任务会失败。您需要等待已有的10个扫描任务中有扫描任务完成后，才可以继续创建新的扫描任务。
         * @example `true`
         */
        CanCreate: boolean;
    };
}
