export interface UpdateElasticNetworkInterfaceResponse {
    /**
     * 响应状态码
     * @example `0`
     */
    Code: number;
    /**
     * 返回信息
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `AC8C713A-A9F4-5984-A5E1-76496DF35153`
     */
    RequestId: string;
    /**
     * 响应内容
     */
    Content: {
        /**
         * 灵骏节点ID
         * @example `e01-cn-lbj3aej****`
         */
        NodeId: string;
        /**
         * 灵骏弹性网卡ID
         * @example `leni-1234****`
         */
        ElasticNetworkInterfaceId: string;
    };
}
