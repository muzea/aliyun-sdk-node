export interface GetNodeOnBaselineResponse {
    /**
     * HTTP返回码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 本次调用的唯一ID。出现错误后，您可以根据该ID排查问题。
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
     * 基线上的节点列表。
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
