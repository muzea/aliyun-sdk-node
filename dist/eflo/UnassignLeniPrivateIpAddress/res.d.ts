export interface UnassignLeniPrivateIpAddressResponse {
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
     * 当次请求的Request ID。
     * @example `AC8C713A-A9F4-5984-A5E1-76496DF35153`
     */
    RequestId: string;
    /**
     * 响应内容。
     * @example `{}`
     */
    Content: {
        /**
         * 灵骏弹性网卡辅助私网IP唯一标识。
         * @example `sip-dqvs****`
         */
        IpName: string;
        /**
         * 灵骏弹性网卡ID。
         * @example `leni-1234****`
         */
        ElasticNetworkInterfaceId: string;
    };
}
