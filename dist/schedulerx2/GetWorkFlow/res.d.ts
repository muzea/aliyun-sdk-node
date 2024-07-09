export interface GetWorkFlowResponse {
    /**
     * 请求ID
     * @example `45678xxx`
     */
    RequestId: string;
    /**
     * 错误码
     * @example `200`
     */
    Code: number;
    /**
     * 错误信息
     * @example `workflow is not existed`
     */
    Message: string;
    /**
     * 结果
     * @example `true`
     */
    Success: boolean;
    /**
     * 工作流的数据
     */
    Data: {
        /**
         * 工作流基本信息
         */
        WorkFlowInfo: {
            /**
             * 工作流ID
             * @example `1234xxx`
             */
            WorkflowId: number;
            /**
             * 工作流名称
             * @example `workflow_111`
             */
            Name: string;
            /**
             * 工作流描述
             * @example `my first workflow`
             */
            Description: string;
            /**
             * 工作流状态
             * @example `成功`
             */
            Status: string;
            /**
             * 工作流时间类型
             * @example `cron`
             */
            TimeType: string;
            /**
             * 工作流时间表达式
             * @example `0 0 2 * * ?`
             */
            TimeExpression: string;
        };
        /**
         * 工作流节点信息
         */
        WorkFlowNodeInfo: {
            /**
             * 工作流节点列表
             */
            Nodes: {
                /**
                 * 任务ID
                 * @example `123456xxx`
                 */
                Id: number;
                /**
                 * 任务名称
                 * @example `job_111`
                 */
                Label: string;
                /**
                 * 任务状态
                 * @example `1`
                 */
                Status: number;
            }[];
            /**
             * 工作流边列表
             */
            Edges: {
                /**
                 * 起始任务ID
                 * @example `100`
                 */
                Source: number;
                /**
                 * 目的任务ID
                 * @example `200`
                 */
                Target: number;
            }[];
        };
    };
}
