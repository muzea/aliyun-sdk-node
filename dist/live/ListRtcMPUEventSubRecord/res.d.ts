export interface ListRtcMPUEventSubRecordResponse {
    /**
     * 请求ID。
     * @example `******3B-0E1A-586A-AC29-742247******`
     */
    RequestId: string;
    /**
     * 当前页返回的回调记录总数。
     * @example `1`
     */
    Count: number;
    /**
     * 是否有下一页。
     * @example `false`
     */
    HasMore: boolean;
    /**
     * 回调记录。
     */
    Logs: {
        /**
         * 订阅的应用ID。
         * @example `yourAppId`
         */
        AppId: string;
        /**
         * 事件回调ID。
         * @example `Sub-******9799B2C4500******`
         */
        SubId: string;
        /**
         * 回调记录ID。
         * @example `42bba8b5-********-9b501dd6cb6e`
         */
        MsgId: string;
        /**
         * 回调内容，详见[创建混流转推事件回调](~~2804583~~)。
         * @example `{\"EventType\":1,\"MsgId\":\"42bba8b5-94ab-468c-9dae-9b501dd6c***\",\"AppId\":\"rtcdev\",\"SubId\":\"Sub-9799B2C45009799B2C4***\",\"TaskId\":\"mpucallbacktest\",\"CallbackTs\":1712656430***,\"Payload\":{\"DstUrl\":\"rtmp://domain/app/stream?auth\",\"EventTs\":1712656430***,\"EventCode\":1,\"ErrorCode\":0,\"ErrorMessage\":\"\"}}`
         */
        Data: string;
        /**
         * 回调调用时间。
         * 格式为：yyyy-MM-ddTHH:mm:ssZ（UTC时间）
         * @example `1970-01-01T00:00:00Z`
         */
        Time: string;
        /**
         * 回调时长，单位：毫秒。
         * @example `22`
         */
        Cost: number;
        /**
         * 回调地址。
         * @example `http://testcallback***.com/callback`
         */
        CallbackUrl: string;
        /**
         * 错误码，200为回调成功。
         * @example `200`
         */
        HTTPCode: string;
    }[];
}
