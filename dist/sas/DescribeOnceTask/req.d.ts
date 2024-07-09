export interface DescribeOnceTaskRequest {
    /**
     * 任务类型。取值：
     * - **CLIENT\_PROBLEM\_CHECK**：客户端任务
     * - **CLIENT\_DEV\_OPS**：云运维任务
     * - **ASSET\_SECURITY\_CHECK**：资产采集任务
     * > **TaskType**和**RootTaskId**不能同时为空
     * @example `CLIENT_PROBLEM_CHECK`
     */
    "TaskType"?: string;
    /**
     * 根任务ID。
     * > **TaskType**和**RootTaskId**不能同时为空
     * @example `bb5d657479bba5e1d308b6c9e85c9174`
     */
    "RootTaskId"?: string;
    /**
     * 根任务开始的时间戳。单位为毫秒。
     * @example `1651737301000`
     */
    "StartTimeQuery"?: number;
    /**
     * 根任务结束的时间戳。单位为毫秒。
     * @example `1651766520000`
     */
    "EndTimeQuery"?: number;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 设置分页查询时，每页包含的客户端任务的数量。默认值为**20**，表示每页包含20个客户端任务。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 任务ID。
     * @example `d7b2acf8d362742123e4a84e1bf8****`
     */
    "TaskId"?: string;
}
