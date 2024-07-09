export interface DeleteVpnAttachmentResponse {
    /**
     * 请求ID。
     * @example `29440C49-398F-3D06-BA8B-E3CD13F3246D`
     */
    RequestId: string;
    /**
     * 当前任务返回的状态码。**200**表示任务成功。
     * @example `200`
     */
    Code: string;
    /**
     * 当前任务是否成功执行。
     * - **true**：已成功执行。
     * - **false**：未能成功执行。
     * @example `true`
     */
    Success: boolean;
    /**
     * 当前任务返回的信息。
     * @example `successful`
     */
    Message: string;
}
