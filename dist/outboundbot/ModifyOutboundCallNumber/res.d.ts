export interface ModifyOutboundCallNumberResponse {
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 接口状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 接口提示消息
     * @example `Success`
     */
    Message: string;
    /**
     * 请求id
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 号码信息
     */
    OutboundCallNumber: {
        /**
         * 号码
         * @example `10088`
         */
        Number: string;
        /**
         * 号码id
         * @example `fa0e21e9-caab-4629-9121-1e341243d599`
         */
        OutboundCallNumberId: string;
        /**
         * 限流周期
         * @example `10`
         */
        RateLimitCount: string;
        /**
         * 限流次数
         * @example `100`
         */
        RateLimitPeriod: string;
    };
}
