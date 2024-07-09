export interface ApprovePermissionApplyOrderRequest {
    /**
     * 审批的申请单ID，您可以调用[ListPermissionApplyOrders](~~211008~~)接口获取。
     * @example `48f36729-05f9-4a40-9286-933fd940f30a`
     */
    "FlowId": string;
    /**
     * 审批的备注信息。
     * @example `agree`
     */
    "ApproveComment": string;
    /**
     * 执行的审批动作，取值如下：
     * - 1：同意。
     * - 2：拒绝。
     * @example `1`
     */
    "ApproveAction": number;
}
