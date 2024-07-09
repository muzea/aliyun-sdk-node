export interface PublishLiveResponse {
    /**
     * 请求ID。
     * @example `FE22D613-D3C6-4A58-87CA-F21FC85AA08E`
     */
    RequestId: string;
    /**
     * 发布直播的返回结果。
     */
    Result: {
        /**
         * 直播资源的唯一标识ID。
         * @example `b7f2****ebb3`
         */
        LiveId: string;
        /**
         * 主播ID。
         * @example `as****hs`
         */
        AnchorId: string;
        /**
         * 直播状态。类型为字符串，取值：
         * * **1**：直播中。
         * @example `1`
         */
        Status: string;
        /**
         * 直播推流地址。
         * @example `rtmp://demo-app-push.com/live/b7f2****ebb3?auth_key=e620****a8e3`
         */
        PushUrl: string;
        /**
         * 直播拉流地址。
         * @example `http://demo-app-live.com/live/b7f2****ebb3.flv?auth_key=e620****a8e3`
         */
        LiveUrl: string;
    };
}
