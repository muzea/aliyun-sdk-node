export interface GetLiveChannelInfoRequest {
    /**
     * Bucket名称。
     * @example `exsmplebucket`
     */
    "bucket": string;
    /**
     * 频道名称。不能包含斜杠（/）。
     * @example `channel_name`
     */
    "channel": string;
}
