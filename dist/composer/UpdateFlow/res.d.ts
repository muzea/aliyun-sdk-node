export interface UpdateFlowResponse {
    /**
     * 本次更新后，当前工作流版本ID。
     * @example `10`
     */
    CurrentVersionId: number;
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
}
