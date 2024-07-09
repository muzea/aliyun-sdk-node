export interface ListTaskFlowInstanceResponse {
    /**
     * 请求ID。
     * @example `8CFF2295-8249-5287-B888-DBD4F0D76CB0`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    DAGInstanceList: {
        /**
         * 任务流运行记录列表。
         */
        DAGInstance: {
            /**
             * 运行记录ID。
             * @example `9234`
             */
            Id: number;
            /**
             * 任务流业务时间，时间格式为yyyy-MM-DD HH:mm:ss。
             * @example `2021-11-10 14:37:26`
             */
            BusinessTime: string;
            /**
             * 任务流运行开始时间，时间格式为yyyy-MM-DD HH:mm:ss。
             * @example `2021-11-11 14:35:57
            `
             */
            startTime: string;
            /**
             * 任务流运行结束时间，时间格式为yyyy-MM-DD HH:mm:ss。
             * @example `2021-11-11 14:38:57`
             */
            EndTime: string;
            /**
             * 任务流ID。
             * @example `7***`
             */
            DagId: string;
            /**
             * 触发类型。返回值如下：
             * - **0**：周期调度
             * - **1**：手动运行
             * @example `1`
             */
            TriggerType: number;
            /**
             * 任务流状态，返回值如下：
             * - **0**：等待调度
             * - **1**：运行中
             * - **2**：暂停
             * - **3**：失败
             * - **4**：成功
             * - **5**：完成
             * @example `4`
             */
            Status: number;
            /**
             * 任务描述信息。
             * @example `test`
             */
            Message: string;
            /**
             * 历史任务流版本ID。
             * @example `2****`
             */
            HistoryDagId: number;
            /**
             * 任务流名称。
             * @example `Spark_SQL_test`
             */
            DagName: string;
            /**
             * 任务流Owner的名称。
             * @example `test_name`
             */
            OwnerName: string;
            /**
             * 任务流版本。
             * @example `[]`
             */
            DagVersion: string;
        }[];
    };
    /**
     * 满足条件运行记录总个数。
     * @example `1`
     */
    TotalCount: number;
}
