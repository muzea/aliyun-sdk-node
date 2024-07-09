export interface AssignPrivateIpAddressResponse {
    /**
     * 响应状态码。
     * @example `0`
     */
    Code: number;
    /**
     * 错误信息。（当实例状态为异常时，提示异常原因）
     * @example `success`
     */
    Message: string;
    /**
     * 当次请求的Request ID。
     * @example `AC8C713A-A9F4-5984-A5E1-76496DF35153`
     */
    RequestId: string;
    /**
     * 响应内容。
     */
    Content: {
        /**
         * 灵骏网卡ID。
         * @example `lni-bp18exxqa2rvfn45e5pz`
         */
        NetworkInterfaceId: string;
        /**
         * IP唯一标识。
         * @example `sip-8exxqa2r`
         */
        IpName: string;
    };
}
