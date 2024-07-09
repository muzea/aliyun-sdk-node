export interface CreatePickUpWaybillResponse {
    /**
     * 请求ID。
     * @example `9FC30594-3841-43AD-9008-03393BCB5CD2`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 状态码描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 接口调用是否成功。
         * @example `true`
         */
        Success: string;
        /**
         * 快递公司编码。
         * @example `YTO`
         */
        CpCode: string;
        /**
         * 订单号。
         * @example `77312345629****`
         */
        MailNo: string;
        /**
         * 错误码。
         * @example `无`
         */
        ErrorCode: string;
        /**
         * 错误信息。
         * @example `无`
         */
        ErrorMsg: string;
        /**
         * 取件码。
         * @example `3524`
         */
        GotCode: string;
    };
}
