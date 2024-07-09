export interface PutLiveChannelStatusRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * 指定LiveChannel名称，该LiveChannel必须存在。
     * @example `exmplechannel`
     */
    "channel": string;
    /**
     * 设置LiveChannel的Status。
     * 有效值：
     * - enabled：启用LiveChannel
     * - disabled：禁用LiveChannel
     * @example `enabled`
     */
    "status": string;
}
