export interface GetVodPlaylistRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * 指定LiveChannel名称。该LiveChannel必须存在。
     * @example `examplechannel`
     */
    "channel": string;
    /**
     * 指定查询ts文件的终止时间，格式为Unix timestamp。
     * > EndTime必须大于 StartTime，且时间跨度不能大于1天。
     * @example `1636618271`
     */
    "endTime": string;
    /**
     * 指定查询ts文件的起始时间，格式为Unix timestamp。
     * @example `1636600271`
     */
    "startTime": string;
}
