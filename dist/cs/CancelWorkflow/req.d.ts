export interface CancelWorkflowRequest {
    /**
     * 工作流名称。
     * @example `mapping-gpu-mhhgh`
     */
    "workflowName": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 执行的操作，目前只支持cancel。
         * @example `cancel`
         */
        action: string;
    };
}
