export interface CreateContainerScanTaskByAppNameResponse {
    /**
     * 调用成功时，返回的数据。
     */
    Data: {
        /**
         * 扫描任务的ID。
         * @example `fc98d58eb56f699d49bf7ebbd6d7****`
         */
        TaskId: string;
        /**
         * 扫描容器的总数量。
         * @example `5`
         */
        TotalCount: number;
        /**
         * 已完成扫描的容器的数量。
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
         * - **INIT**：初始化中。
         * - **PRE_ANALYZER**：预分析中。
         * - **SUCCESS**：执行成功。
         * - **FAIL**：执行失败。
         * @example `SUCCESS`
         */
        Status: string;
        /**
         * 扫描任务进度的百分比。
         * @example `100`
         */
        Progress: number;
        /**
         * 扫描任务的执行结果。取值：
         * - **SUCCESS**：扫描任务执行成功。
         * - **TASK\_NOT\_SUPPORT_REGION**：镜像在不支持扫描的地域。
         * > 镜像安全扫描支持的地域，请参见本文档返回参数表后的镜像安全扫描支持的地域的表格。
         * @example `SUCCESS`
         */
        Result: string;
        /**
         * 是否可以继续创建扫描任务。取值：
         * - **true**：可以继续创建扫描任务。
         * - **false**：无法继续创建扫描任务。
         * @example `true`
         */
        CanCreate: boolean;
    };
    /**
     * 唯一请求ID。
     * @example `1EE7B150-D67E-53FD-A52D-3E8E669A****`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
