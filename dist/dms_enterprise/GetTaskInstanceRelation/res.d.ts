export interface GetTaskInstanceRelationResponse {
    /**
     * 请求ID。
     * @example `028BF827-3801-5869-8548-F4A039256304`
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
    NodeList: {
        /**
         * 任务流运行记录的节点信息列表。
         */
        Node: {
            /**
             * 任务节点运行记录ID。
             * @example `14059`
             */
            Id: number;
            /**
             * 任务节点ID。
             * @example `14059`
             */
            NodeId: number;
            /**
             * 任务节点名称。
             * @example `Spark SQL-1`
             */
            NodeName: string;
            /**
             * 任务节点类型，返回值请参见[NodeType参数说明](~~424705~~)。
             * @example `36`
             */
            NodeType: number;
            /**
             * 业务时间。
             * @example `2021-11-09 14:37:26`
             */
            BusinessTime: string;
            /**
             * 任务节点运行状态，取值如下：
             * - **0**：等待调度
             * - **1**：正在运行
             * - **2**：挂起
             * - **3**：运行失败
             * - **4**：运行成功
             * - **5**：已完成
             * @example `4`
             */
            Status: number;
            /**
             * 任务描述信息。
             * @example `test`
             */
            Message: string;
            /**
             * 任务执行时间，单位为毫秒。
             * @example `170655`
             */
            ExecuteTime: number;
            /**
             * 任务流运行结束时间，时间格式为yyyy-MM-DD HH:mm:ss。
             * @example `2021-11-11 14:38:57`
             */
            EndTime: string;
        }[];
    };
}
