export interface DeleteLiveChannelRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * 指定LiveChannel名称，该LiveChannel必须存在。
     * @example `examplechannel`
     */
    "channel": string;
}
