export interface UpdateLeniPrivateIpAddressResponse {
    /**
     * 响应状态码。
     * @example `0`
     */
    Code: number;
    /**
     * 消息。
     * @example `成功`
     */
    Message: string;
    /**
     * 当次请求的Request ID。
     * @example `A88DFED5-24B7-5A3E-87DE-380BF06F3C90`
     */
    RequestId: string;
    /**
     * 响应内容。
     */
    Content: {
        /**
         * 灵骏弹性网卡ID。
         * @example `leni-1234****`
         */
        ElasticNetworkInterfaceId: string;
        /**
         * 灵骏弹性网卡辅助私网IP唯一标识。
         * @example `sip-8ylg****
        `
         */
        IpName: string;
    };
}
