export interface PreviewWorkflowResponse {
    /**
     * 请求ID，用于定位日志，排查问题。
     * @example `0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931`
     */
    RequestId: string;
    /**
     * 错误码，请求异常时返回。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 错误信息，请求异常时返回。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 工作流详细信息。
     */
    WorkflowDetail: {
        /**
         * 审批模板名称。
         * @example `Owner与DBA`
         */
        WfCateName: string;
        /**
         * 审批模板备注。
         * @example `系统定义审批线，先数据Owner审批，再DBA审批。`
         */
        Comment: string;
        WorkflowNodeList: {
            /**
             * 审批节点列表。
             */
            WorkflowNode: {
                /**
                 * 审批节点名称。
                 * @example `Owner`
                 */
                NodeName: string;
                /**
                 * 节点类型。
                 * @example `SYS`
                 */
                NodeType: string;
                /**
                 * 审批节点备注。
                 * @example `系统节点，动态计算，由用户操作的资源对应的Owner来完成审批。`
                 */
                Comment: string;
                AuditUserList: {
                    /**
                     * 审批用户列表。
                     */
                    AuditUser: {
                        /**
                         * 用户ID。
                         * @example `16***`
                         */
                        UserId: number;
                        /**
                         * 用户昵称。
                         * @example `Owner`
                         */
                        NickName: string;
                        /**
                         * 用户名称。
                         * @example `db_test`
                         */
                        RealName: string;
                    }[];
                };
            }[];
        };
    };
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
}
