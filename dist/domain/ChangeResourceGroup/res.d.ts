export interface ChangeResourceGroupResponse {
    /**
     * 本次请求调用的唯一ID。
     * @example `4EA05A10-D4BC-47EA-AD9E-370A46BB4FB9`
     */
    RequestId: string;
    /**
     * 操作结果。取值：
     * - **true**：操作成功。
     * - **false**：操作失败。
     * @example `true`
     */
    Result: string;
}
