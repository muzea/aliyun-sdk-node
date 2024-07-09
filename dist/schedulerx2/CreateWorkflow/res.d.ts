export interface CreateWorkflowResponse {
    /**
     * 请求唯一ID。
     * @example `39090022-1F3B-4797-8518-6B61095F1AF0`
     */
    RequestId: string;
    /**
     * 返回码
     * @example `200`
     */
    Code: string;
    /**
     * 创建工作流是否成功。取值如下：
     * - true：创建工作流成功。
     * - false：创建工作流失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息
     * @example `timetype is invalid`
     */
    Message: string;
    /**
     * 创建工作流的返回值
     */
    Data: {
        /**
         * 工作流ID
         * @example `92583`
         */
        WorkflowId: number;
    };
}
