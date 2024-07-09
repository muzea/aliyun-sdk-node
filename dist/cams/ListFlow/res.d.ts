export interface ListFlowResponse {
    /**
     * 请求ID。
     * @example `1612C226-E271-4CFE-9F18-4066D550F91B`
     */
    RequestId: string;
    /**
     * 结果返回OK为正常。
     * @example `OK`
     */
    Code: string;
    /**
     * 错误描述信息。
     * @example `无`
     */
    Message: string;
    /**
     * 返回数据对像。
     */
    Data: {
        /**
         * Flow ID。
         * @example `92675332812643****`
         */
        FlowId: string;
        /**
         * Flow名称。
         * @example `flow-02020`
         */
        FlowName: string;
        /**
         * 目录。
         */
        Categories: string[];
    }[];
}
