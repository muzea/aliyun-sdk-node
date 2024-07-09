export interface CreateWorkflowResponse {
    /**
     * Id of the request
     * @example `9E3A7161-EB7B-172B-8D18-FFB06BA38***`
     */
    requestId: string;
    /**
     * 调用是否成功
     * @example `True`
     */
    success: boolean;
    /**
     * 返回结果
     */
    data: {
        /**
         * 工作流ID
         * @example `w-acfmv4opbs****`
         */
        workflowId: string;
    };
}
