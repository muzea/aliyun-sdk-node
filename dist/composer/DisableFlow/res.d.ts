export interface DisableFlowResponse {
    /**
     * 请求ID
     * @example `ADB97A33-50E7-48A5-963D-ACBAE36D0BEC`
     */
    RequestId: string;
    /**
     * 当前操作的结果。
     * - **true**：修改成功
     * - **false**：修改失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 工作流当前状态。
     * - **Enabled**：启用
     * - **Disabled**：已禁用
     * @example `Disabled`
     */
    FlowStatus: string;
}
