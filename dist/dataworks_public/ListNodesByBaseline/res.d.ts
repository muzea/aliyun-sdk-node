export interface ListNodesByBaselineResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。用于出现错误后排查问题。
     * @example `0000-ABCD-E****`
     */
    RequestId: string;
    /**
     * 错误信息。
     * @example `The specified parameters are invalid.`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `1031203110005`
     */
    ErrorCode: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: string;
    /**
     * 基线中的节点列表。
     */
    Data: {
        /**
         * 节点责任人的阿里云UID。
         * @example `9527952****`
         */
        Owner: string;
        /**
         * 节点的名称。
         * @example `节点名称`
         */
        NodeName: string;
        /**
         * 节点的ID。
         * @example `1234`
         */
        NodeId: number;
        /**
         * 节点所在工作空间的ID。
         * @example `1234`
         */
        ProjectId: number;
    }[];
}
