export interface ExecuteWorkflowResponse {
    /**
     * 返回码。
     * @example `200`
     */
    Code: number;
    /**
     * 错误消息，仅错误时返回错误信息。
     * @example `Cannot find product according to your domain.`
     */
    Message: string;
    /**
     * 请求唯一ID。
     * @example `4F68ABED-AC31-4412-9297-D9A8F0401108`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 如果调用成功，会返回流程实例ID。
     */
    Data: {
        /**
         * 工作流实例ID。
         * @example `111111`
         */
        WfInstanceId: number;
    };
}
