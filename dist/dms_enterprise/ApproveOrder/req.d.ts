export interface ApproveOrderRequest {
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 审批流ID，可通过调用接口[GetOrderBaseInfo](~~144642~~) 获取该参数的值。
     * @example `1234`
     */
    "WorkflowInstanceId": number;
    /**
     * 审批动作，取值及说明如下：
     * - **AGREE**：同意。
     * - **CANCEL**：取消。
     * - **REJECT**：拒绝。
     * - **TRANSFER**：转交。
     * - **ADD_APPROVAL_NODE**：加签。
     * @example `AGREE`
     */
    "ApprovalType": string;
    /**
     * 备注信息。
     * @example `test`
     */
    "Comment"?: string;
    /**
     * 被转交用户的ID。ApprovalType参数为TRANSFER时必填。
     * @example `12***`
     */
    "NewApprover"?: number;
    /**
     * 转交用户的ID，默认为当前操作用户的ID。当用户为管理员或DBA时，可指定其他相关人员的ID。
     * @example `23***`
     */
    "OldApprover"?: number;
    /**
     * ApprovalType为ADD_APPROVAL_NODE时必填。
     * 添加的审批节点ID，该节点必须为用户自定义审批节点。
     * @example `1`
     */
    "ApprovalNodeId"?: number;
    /**
     * ApprovalType为ADD_APPROVAL_NODE时必填。
     * 加签的位置，取值及说明如下：
     * - **PRE_ADD_APPROVAL_NODE**：前加签。
     * - **POST_ADD_APPROVAL_NODE**：后加签。
     * @example `POST_ADD_APPROVAL_NODE`
     */
    "ApprovalNodePos"?: string;
    /**
     * > ApprovalType为TRANSFER（转交）时填写。NewApprover参数与本参数二选一填写即可。
     * 被转交用户的ID列表，用户ID之间使用英文逗号分隔。
     * @example `154***,155***,156***`
     */
    "NewApproverList"?: string;
}
