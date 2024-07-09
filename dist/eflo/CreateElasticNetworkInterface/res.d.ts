export interface CreateElasticNetworkInterfaceResponse {
    /**
     * 响应状态码。
     * @example `0`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `成功`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `A88DFED5-24B7-5A3E-87DE-380BF06F3C90`
     */
    RequestId: string;
    /**
     * 响应内容。
     */
    Content: {
        /**
         * 灵骏节点ID。
         * @example `e01-cn-lbj3aej****`
         */
        NodeId: string;
        /**
         * 灵骏弹性网卡ID。
         * @example `leni-1fejojjo****`
         */
        ElasticNetworkInterfaceId: string;
    };
}
