export interface UnAssignPrivateIpAddressResponse {
    /**
     * 响应状态码
     * @example `0`
     */
    Code: number;
    /**
     * 错误信息。（当实例状态为异常时，提示异常原因）
     * @example `成功`
     */
    Message: string;
    /**
     * 当次请求的Request ID
     * @example `A88DFED5-24B7-5A3E-87DE-380BF06F3C90`
     */
    RequestId: string;
    /**
     * 响应内容
     */
    Content: {
        /**
         * 灵骏网卡ID
         * @example `lni-bp164jwjpdq4lnsy83s5`
         */
        NetworkInterfaceId: string;
        /**
         * IP唯一标识
         * @example `sip-xxxxx`
         */
        IpName: string;
    };
}
