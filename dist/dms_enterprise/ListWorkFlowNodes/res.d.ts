export interface ListWorkFlowNodesResponse {
    /**
     * 请求ID。
     * @example `CFD8FE00-36D9-4C1B-940D-65A7B73D9066`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 错误消息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    WorkflowNodes: {
        /**
         * 审批节点信息。
         */
        WorkflowNode: {
            /**
             * 备注。
             * @example `test`
             */
            Comment: string;
            /**
             * 创建人昵称。
             * @example `test`
             */
            CreateUserNickName: string;
            /**
             * 节点类型，取值和说明如下：
             * - SYS：系统定义
             * - USER_LIST：用户自定义
             * @example `SYS`
             */
            NodeType: string;
            /**
             * 节点名称。
             * @example `test`
             */
            NodeName: string;
            AuditUsers: {
                /**
                 * 审批人信息。
                 */
                AuditUser: {
                    /**
                     * 审批人真实名。
                     * @example `test`
                     */
                    RealName: string;
                    /**
                     * 审批人用户ID，注意不是阿里云Uid。
                     * @example `123`
                     */
                    UserId: number;
                    /**
                     * 审批人昵称。
                     * @example `test`
                     */
                    NickName: string;
                }[];
            };
            /**
             * 创建者用户ID，注意不是阿里云uid。
             * @example `123`
             */
            CreateUserId: number;
            /**
             * 节点ID。
             * @example `123`
             */
            NodeId: number;
        }[];
    };
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
}
