export interface DeleteElasticNetworkInterfaceResponse {
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
     * @example `BDBCC783-84CA-5733-8EEA-645C88B9009C`
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
