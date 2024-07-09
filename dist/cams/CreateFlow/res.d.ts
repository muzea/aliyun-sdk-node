export interface CreateFlowResponse {
    /**
     * 请求ID。
     * @example `90E63D28-E31D-1EB2-8939-A9486641****`
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
     * 返回数据。
     */
    Data: {
        /**
         * Flow ID。
         * @example `333993838***`
         */
        FlowId: string;
        /**
         * Flow名称。
         * @example `test1`
         */
        FlowName: string;
        /**
         * 目录列表。
         */
        Categories: string[];
    };
}
