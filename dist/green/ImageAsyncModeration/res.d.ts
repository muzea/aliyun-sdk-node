export interface ImageAsyncModerationResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `4A926AE2-4C96-573F-824F-0532960799F8`
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
     * 图片异步检测后的结果。
     */
    Data: {
        /**
         * 图片异步审核增强版API返回的reqId字段，可用此字段查询检测结果。
         * @example `A07B3DB9-D762-5C56-95B1-8EC55CF176D2`
         */
        ReqId: string;
        /**
         * API请求时传入的dataId 的值，如请求时未传入，则没有该字段。
         * @example `fb5ffab1-993b-449f-b8d6-b97d5e3331f2`
         */
        DataId: string;
    };
}
