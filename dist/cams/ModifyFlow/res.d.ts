export interface ModifyFlowResponse {
    /**
     * 请求ID。
     * @example `1612C226-E271-4CFE-9F18-4066D******`
     */
    RequestId: string;
    /**
     * 结果返回OK为正常。
     * @example `OK`
     */
    Code: string;
    /**
     * 错误描述信息。
     * @example `None`
     */
    Message: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * Flow ID。
         * @example `92675332812643****
        `
         */
        FlowId: string;
        /**
         * Flow名称。
         * @example `flow_001`
         */
        FlowName: string;
        /**
         * Flow目录。
         */
        Categories: string[];
    };
}
