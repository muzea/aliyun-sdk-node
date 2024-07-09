export interface EnableWorkflowResponse {
    /**
     * 返回码
     * @example `200`
     */
    Code: number;
    /**
     * 错误信息，仅错误时返回错误信息。
     * @example `Your request is denied as lack of ssl protect.`
     */
    Message: string;
    /**
     * 请求唯一ID
     * @example `4F68ABED-AC31-4412-9297-D9A8F0401108`
     */
    RequestId: string;
    /**
     * 启用工作流是否成功。取值如下：
     * - **true**：启用工作流成功。
     * - **false**：启用工作流失败。
     * @example `true`
     */
    Success: boolean;
}
