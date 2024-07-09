export interface ListNodesRequest {
    /**
     * 负责人的ID。
     * @example `193379****`
     */
    "Owner"?: string;
    /**
     * 业务流程的名称。
     * @example `test_bizName`
     */
    "BizName"?: string;
    /**
     * 节点的类型。您可以调用[ListFileType](~~212428~~)查看节点类型。
     * @example `ODPS_SQL`
     */
    "ProgramType"?: string;
    /**
     * 页码数。最小值1，最大值100
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的条数，默认为10条，最大100条。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 工作空间的ID。
     * @example `1234`
     */
    "ProjectId": number;
    /**
     * 运行的环境，包括DEV和PROD。
     * @example `PROD`
     */
    "ProjectEnv": string;
    /**
     * 节点的名称。
     * @example `liux_test_n****`
     */
    "NodeName"?: string;
    /**
     * 调度的类型，取值如下：
     * - NORMAL：正常调度任务。
     * - PAUSE：暂停任务。
     * - SKIP：空跑任务，被日常调度，但启动调度时直接被置为成功。
     * @example `NORMAL`
     */
    "SchedulerType"?: string;
}
