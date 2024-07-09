export interface PutLiveChannelRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * 频道名称。不能包含斜杠（/）。
     * @example `ChannelName`
     */
    "channel": string;
    /**
     * 保存LiveChannel配置的请求体。
     */
    "body"?: {
        /**
         * 保存LiveChannel配置的容器。
         */
        LiveChannelConfiguration: any;
    };
}
