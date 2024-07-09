export interface GetApprovalDetailResponse {
    /**
     * 请求ID。
     * @example `66DE630B-ECA1-52A3-9198-602066F9****`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `MissingWorkflowInstanceId`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `WorkflowInstanceId is mandatory for this action.`
     */
    ErrorMessage: string;
    /**
     * 工单审批详情信息。
     */
    ApprovalDetail: {
        WorkflowNodes: {
            /**
             * 审批流程节点信息。
             */
            WorkflowNode: {
                /**
                 * 提交工单审批流程的时间。
                 * @example `2019-10-15 13:47:54`
                 */
                OperateTime: string;
                /**
                 * 提交工单审批流程的用户ID。
                 * @example `1****`
                 */
                OperatorId: number;
                /**
                 * 审批节点名称。
                 * @example `DBA`
                 */
                NodeName: string;
                AuditUserIdList: {
                    /**
                     * 审批工单的用户ID列表。
                     */
                    AuditUserIds: string[];
                };
                /**
                 * 审批操作备注。
                 * @example `理由：同意`
                 */
                OperateComment: string;
                /**
                 * 工单审批状态，返回值说明如下：
                 * - **START**：初始状态
                 * - **ERROR**：异常状态
                 * - **AUDITING**：审批中
                 * - **REJECT**：审批拒绝
                 * - **CANCEL**：撤销审批
                 * - **APPROVED**：已批准
                 * @example `APPROVED`
                 */
                WorkflowInsCode: string;
            }[];
        };
        /**
         * 审批描述信息。
         * @example `【实例权限】申请<br/>权限类型：「登录」<br/>申请期限：30.0 days<br/>背景描述：【实例权限】test登录<br/><br/>【申请列表】<br/><span style='color:red'>product</span> rm-bp144d5ky4l4rli0417****.mysql.rds.aliyuncs.com:3306 - PRODUCT<br/>`
         */
        Description: string;
        /**
         * 审批流程创建时间。
         * @example `2021-10-29 14:17:25`
         */
        CreateTime: string;
        CurrentHandlers: {
            /**
             * 当前审批处理人信息。
             */
            CurrentHandler: {
                /**
                 * 用户昵称。
                 * @example `nickName`
                 */
                NickName: string;
                /**
                 * 用户ID。
                 * @example `1`
                 */
                Id: number;
            }[];
        };
        /**
         * 工单类型，返回值说明如下：
         * - **NDDL**：结构设计
         * - **DATA_TRACK**：数据追踪
         * - **TABLE_SYNC**：库表同步
         * - **PERM_APPLY**：权限申请
         * - **DATA_EXPORT**：数据导出
         * - **DATA_CORRECT**：数据变更
         * - **OWNER_APPLY**：Owner申请
         * - **SENSITIVITY**：敏感列等级调整
         * @example `PERM_APPLY`
         */
        OrderType: string;
        /**
         * 审批标题。
         * @example `权限申请工单-384****`
         */
        Title: string;
        /**
         * 审核单ID。
         * @example `184****`
         */
        AuditId: number;
        /**
         * 工单ID。
         * @example `384****`
         */
        OrderId: number;
        /**
         * 工单审批状态，返回值说明如下：
         * - **AUDITING**：审批中
         * - **REJECT**：审批拒绝
         * - **CANCEL**：撤销审批
         * - **APPROVED**：已批准
         * > 一个审批流程包含了多层审批，每层都有其审批的状态码。
         * @example `APPROVED`
         */
        WorkflowInsCode: string;
        ReasonList: {
            /**
             * 审批原因列表。
             */
            Reasons: string[];
        };
        /**
         * 工作流模板ID
         * @example `1234`
         */
        TemplateId: number;
    };
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
}
