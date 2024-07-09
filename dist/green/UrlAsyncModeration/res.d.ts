export interface UrlAsyncModerationResponse {
    /**
     * Id of the request
     * @example `6CF2815C-****-****-B52E-FF6E2****492`
     */
    RequestId: string;
    /**
     * 返回码。返回200代表成功。
     * @example `200`
     */
    Code: number;
    /**
     * 本次请求的响应消息。
     * @example `success`
     */
    Msg: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * URL 异步审核增强版API返回的ReqId字段，可用此字段查询检测结果。
         * @example `A07B3DB9-D762-5C56-95B1-8EC55CF176D2`
         */
        ReqId: string;
        /**
         * API请求时传入的dataId 的值，如请求时未传入，则没有该字段。
         * @example `26769ada6e264e7ba9aa048241e12be9`
         */
        DataId: string;
    };
}
